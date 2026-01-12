<?php

namespace Packages\SocialProof\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Packages\SocialProof\Models\NotificationHandler;
use Packages\SocialProof\Services\NotificationHandlerService;

class SendNotificationHandlerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public int $handlerId,
        public array $data
    ) {}

    public function handle(NotificationHandlerService $service): void
    {
        $handler = NotificationHandler::find($this->handlerId);
        
        if (!$handler || !$handler->is_enabled) {
            return;
        }

        $service->send($handler, $this->data);
    }
}