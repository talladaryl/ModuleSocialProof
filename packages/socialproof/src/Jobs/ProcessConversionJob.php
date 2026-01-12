<?php

namespace Packages\SocialProof\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Services\TrackingService;

class ProcessConversionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public int $notificationId,
        public array $data,
        public string $path,
        public ?string $ip = null,
        public ?string $userAgent = null
    ) {}

    public function handle(TrackingService $trackingService): void
    {
        $notification = NotificationExtended::find($this->notificationId);
        
        if (!$notification) {
            return;
        }

        $trackingService->trackConversion(
            $notification,
            $this->data,
            $this->path,
            $this->ip ?? '127.0.0.1',
            $this->userAgent
        );
    }
}