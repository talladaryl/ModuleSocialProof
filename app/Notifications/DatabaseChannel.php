<?php

namespace App\Notifications;

use Illuminate\Notifications\Channels\DatabaseChannel as BaseDatabaseChannel;
use Illuminate\Notifications\Notification;

class DatabaseChannel extends BaseDatabaseChannel
{
    protected function buildPayload($notifiable, Notification $notification): array
    {
        return [
            'type' => $notification::class,
            'data' => $this->getData($notifiable, $notification),
            'read_at' => null,
        ];
    }
}
