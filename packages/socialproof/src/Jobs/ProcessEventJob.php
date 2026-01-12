<?php

namespace Packages\SocialProof\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Services\EventEngine;

class ProcessEventJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Event $event
    ) {}

    public function handle(EventEngine $eventEngine): void
    {
        $eventEngine->processEvent($this->event);
    }
}