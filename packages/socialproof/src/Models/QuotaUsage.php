<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuotaUsage extends Model
{
    protected $table = 'sp_quotas_usage';
    protected $primaryKey = 'usage_id';

    protected $fillable = [
        'client_id',
        'quota_type',
        'used',
        'limit',
        'period_start',
        'period_end',
    ];

    protected $casts = [
        'used' => 'integer',
        'limit' => 'integer',
        'period_start' => 'date',
        'period_end' => 'date',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function getUsagePercentage(): float
    {
        if ($this->limit === 0) return 0;
        return round(($this->used / $this->limit) * 100, 2);
    }

    public function isExceeded(): bool
    {
        return $this->used >= $this->limit;
    }

    public function getRemainingQuota(): int
    {
        return max(0, $this->limit - $this->used);
    }

    public function incrementUsage(int $amount = 1): void
    {
        parent::increment('used', $amount);
    }

    public static function getOrCreateForClient(int $clientId, string $quotaType, int $limit = 0): self
    {
        $periodStart = now()->startOfMonth();
        $periodEnd = now()->endOfMonth();

        return static::firstOrCreate(
            [
                'client_id' => $clientId,
                'quota_type' => $quotaType,
                'period_start' => $periodStart,
            ],
            [
                'used' => 0,
                'limit' => $limit,
                'period_end' => $periodEnd,
            ]
        );
    }

    const TYPE_EVENTS = 'events';
    const TYPE_NOTIFICATIONS = 'notifications';
    const TYPE_WIDGETS = 'widgets';
    const TYPE_SITES = 'sites';
    const TYPE_API_CALLS = 'api_calls';
}
