<?php

namespace Packages\SocialProof\Services;

use Packages\SocialProof\Models\NotificationHandler;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class NotificationHandlerService
{
    public function send(NotificationHandler $handler, array $data): void
    {
        try {
            switch ($handler->type) {
                case NotificationHandler::TYPE_EMAIL:
                    $this->sendEmail($handler, $data);
                    break;
                
                case NotificationHandler::TYPE_WEBHOOK:
                    $this->sendWebhook($handler, $data);
                    break;
                
                case NotificationHandler::TYPE_SLACK:
                    $this->sendSlack($handler, $data);
                    break;
                
                case NotificationHandler::TYPE_DISCORD:
                    $this->sendDiscord($handler, $data);
                    break;
                
                case NotificationHandler::TYPE_TELEGRAM:
                    $this->sendTelegram($handler, $data);
                    break;
                
                default:
                    Log::warning("Unknown notification handler type: {$handler->type}");
            }

            $handler->update(['last_datetime' => now()]);
        } catch (\Exception $e) {
            Log::error("Failed to send notification handler {$handler->notification_handler_id}: " . $e->getMessage());
        }
    }

    protected function sendEmail(NotificationHandler $handler, array $data): void
    {
        $settings = $handler->settings;
        $to = $settings['email'] ?? null;
        $subject = $settings['subject'] ?? 'Social Proof Notification';
        
        if (!$to) {
            return;
        }

        $message = $this->formatMessage($settings['template'] ?? 'New event: {event_type}', $data);

        Mail::raw($message, function ($mail) use ($to, $subject) {
            $mail->to($to)->subject($subject);
        });
    }

    protected function sendWebhook(NotificationHandler $handler, array $data): void
    {
        $settings = $handler->settings;
        $url = $settings['url'] ?? null;
        
        if (!$url) {
            return;
        }

        $payload = array_merge($data, [
            'handler_id' => $handler->notification_handler_id,
            'timestamp' => now()->toISOString(),
        ]);

        Http::timeout(10)->post($url, $payload);
    }

    protected function sendSlack(NotificationHandler $handler, array $data): void
    {
        $settings = $handler->settings;
        $webhookUrl = $settings['webhook_url'] ?? null;
        
        if (!$webhookUrl) {
            return;
        }

        $message = $this->formatMessage($settings['template'] ?? 'New event: {event_type}', $data);

        $payload = [
            'text' => $message,
            'username' => $settings['username'] ?? 'Social Proof',
            'icon_emoji' => $settings['icon'] ?? ':bell:',
        ];

        Http::timeout(10)->post($webhookUrl, $payload);
    }

    protected function sendDiscord(NotificationHandler $handler, array $data): void
    {
        $settings = $handler->settings;
        $webhookUrl = $settings['webhook_url'] ?? null;
        
        if (!$webhookUrl) {
            return;
        }

        $message = $this->formatMessage($settings['template'] ?? 'New event: {event_type}', $data);

        $payload = [
            'content' => $message,
            'username' => $settings['username'] ?? 'Social Proof',
        ];

        Http::timeout(10)->post($webhookUrl, $payload);
    }

    protected function sendTelegram(NotificationHandler $handler, array $data): void
    {
        $settings = $handler->settings;
        $botToken = $settings['bot_token'] ?? null;
        $chatId = $settings['chat_id'] ?? null;
        
        if (!$botToken || !$chatId) {
            return;
        }

        $message = $this->formatMessage($settings['template'] ?? 'New event: {event_type}', $data);

        $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
        
        Http::timeout(10)->post($url, [
            'chat_id' => $chatId,
            'text' => $message,
            'parse_mode' => 'HTML',
        ]);
    }

    protected function formatMessage(string $template, array $data): string
    {
        $message = $template;
        
        foreach ($data as $key => $value) {
            if (is_string($value) || is_numeric($value)) {
                $message = str_replace('{' . $key . '}', $value, $message);
            }
        }

        return $message;
    }
}