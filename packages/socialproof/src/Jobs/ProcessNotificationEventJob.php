<?php

namespace Packages\SocialProof\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Services\TrackingService;

class ProcessNotificationEventJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public int $notificationId,
        public string $type,
        public string $path,
        public string $ip,
        public array $data = []
    ) {}

    public function handle(TrackingService $trackingService): void
    {
        $notification = NotificationExtended::find($this->notificationId);
        
        if (!$notification) {
            return;
        }

        $trackingService->trackNotificationEvent(
            $notification,
            $this->type,
            $this->path,
            $this->ip,
            $this->data
        );
    }
}