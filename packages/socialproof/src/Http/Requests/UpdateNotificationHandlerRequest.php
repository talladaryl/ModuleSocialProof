<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Packages\SocialProof\Models\NotificationHandler;

class UpdateNotificationHandlerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $baseRules = [
            'name' => 'required|string|max:128',
            'type' => 'required|string|in:' . implode(',', NotificationHandler::getAvailableTypes()),
            'is_enabled' => 'boolean',
        ];

        // Add type-specific validation rules
        $typeRules = $this->getTypeSpecificRules();

        return array_merge($baseRules, $typeRules);
    }

    protected function getTypeSpecificRules(): array
    {
        $type = $this->input('type');

        return match ($type) {
            NotificationHandler::TYPE_EMAIL => [
                'settings.email' => 'required|email|max:255',
                'settings.subject' => 'required|string|max:255',
                'settings.template' => 'required|string|max:1000',
            ],
            NotificationHandler::TYPE_WEBHOOK => [
                'settings.url' => 'required|url|max:255',
                'settings.method' => 'sometimes|in:GET,POST,PUT,PATCH',
                'settings.headers' => 'sometimes|array',
            ],
            NotificationHandler::TYPE_SLACK => [
                'settings.webhook_url' => 'required|url|max:255',
                'settings.username' => 'sometimes|string|max:50',
                'settings.icon' => 'sometimes|string|max:50',
                'settings.template' => 'required|string|max:1000',
            ],
            NotificationHandler::TYPE_DISCORD => [
                'settings.webhook_url' => 'required|url|max:255',
                'settings.username' => 'sometimes|string|max:50',
                'settings.template' => 'required|string|max:1000',
            ],
            NotificationHandler::TYPE_TELEGRAM => [
                'settings.bot_token' => 'required|string|max:100',
                'settings.chat_id' => 'required|string|max:50',
                'settings.template' => 'required|string|max:1000',
            ],
            default => [],
        };
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Handler name is required.',
            'name.max' => 'Handler name cannot exceed 128 characters.',
            'type.required' => 'Handler type is required.',
            'type.in' => 'Invalid handler type selected.',
            'settings.email.required' => 'Email address is required.',
            'settings.email.email' => 'Please enter a valid email address.',
            'settings.url.required' => 'Webhook URL is required.',
            'settings.url.url' => 'Please enter a valid URL.',
            'settings.webhook_url.required' => 'Webhook URL is required.',
            'settings.webhook_url.url' => 'Please enter a valid webhook URL.',
            'settings.bot_token.required' => 'Bot token is required.',
            'settings.chat_id.required' => 'Chat ID is required.',
            'settings.subject.required' => 'Email subject is required.',
            'settings.template.required' => 'Message template is required.',
        ];
    }
}