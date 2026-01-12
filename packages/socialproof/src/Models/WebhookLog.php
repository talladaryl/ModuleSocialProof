<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WebhookLog extends Model
{
    protected $table = 'sp_webhook_logs';
    protected $primaryKey = 'webhook_log_id';

    protected $fillable = [
        'client_id',
        'handler_id',
        'url',
        'method',
        'headers',
        'payload',
        'response_code',
        'response_body',
        'response_time_ms',
        'status',
        'attempts',
        'next_retry_at',
        'error_message',
    ];

    protected $casts = [
        'headers' => 'array',
        'payload' => 'array',
        'response_code' => 'integer',
        'response_time_ms' => 'integer',
        'attempts' => 'integer',
        'next_retry_at' => 'datetime',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function handler(): BelongsTo
    {
        return $this->belongsTo(NotificationHandler::class, 'handler_id', 'notification_handler_id');
    }

    public function isSuccess(): bool
    {
        return $this->status === 'success';
    }

    public function isFailed(): bool
    {
        return $this->status === 'failed';
    }

    public function canRetry(): bool
    {
        return $this->status === 'failed' && $this->attempts < 3;
    }

    const STATUS_PENDING = 'pending';
    const STATUS_SUCCESS = 'success';
    const STATUS_FAILED = 'failed';
    const STATUS_RETRYING = 'retrying';
}
