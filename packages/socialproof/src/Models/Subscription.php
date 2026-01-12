<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Carbon\Carbon;

class Subscription extends Model
{
    protected $table = 'sp_subscriptions';
    protected $primaryKey = 'subscription_id';

    protected $fillable = [
        'client_id',
        'plan_id',
        'billing_cycle',
        'status',
        'trial_ends_at',
        'starts_at',
        'ends_at',
        'canceled_at',
        'payment_method',
        'payment_provider',
        'provider_subscription_id',
        'provider_customer_id',
        'last_payment_at',
        'next_payment_at',
        'amount',
        'currency',
        'metadata',
    ];

    protected $casts = [
        'trial_ends_at' => 'datetime',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'canceled_at' => 'datetime',
        'last_payment_at' => 'datetime',
        'next_payment_at' => 'datetime',
        'amount' => 'decimal:2',
        'metadata' => 'array',
    ];

    // Relations
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'plan_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeOnTrial($query)
    {
        return $query->where('status', 'trialing')
            ->where('trial_ends_at', '>', now());
    }

    public function scopeExpired($query)
    {
        return $query->where('status', 'active')
            ->where('ends_at', '<', now());
    }

    public function scopeCanceled($query)
    {
        return $query->where('status', 'canceled');
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->status === 'active' && 
               ($this->ends_at === null || $this->ends_at->isFuture());
    }

    public function isOnTrial(): bool
    {
        return $this->status === 'trialing' && 
               $this->trial_ends_at && 
               $this->trial_ends_at->isFuture();
    }

    public function isExpired(): bool
    {
        return $this->ends_at && $this->ends_at->isPast();
    }

    public function isCanceled(): bool
    {
        return $this->status === 'canceled';
    }

    public function isPastDue(): bool
    {
        return $this->status === 'past_due';
    }

    public function cancel(): void
    {
        $this->update([
            'status' => 'canceled',
            'canceled_at' => now(),
        ]);
    }

    public function resume(): void
    {
        $this->update([
            'status' => 'active',
            'canceled_at' => null,
        ]);
    }

    public function changePlan(Plan $newPlan): void
    {
        $this->update([
            'plan_id' => $newPlan->plan_id,
            'amount' => $this->billing_cycle === 'yearly' 
                ? $newPlan->price_yearly 
                : $newPlan->price_monthly,
        ]);
    }

    public function getDaysRemaining(): int
    {
        if (!$this->ends_at) {
            return PHP_INT_MAX;
        }

        return max(0, now()->diffInDays($this->ends_at, false));
    }

    public function getTrialDaysRemaining(): int
    {
        if (!$this->trial_ends_at || !$this->isOnTrial()) {
            return 0;
        }

        return max(0, now()->diffInDays($this->trial_ends_at, false));
    }

    public function getRenewalDate(): ?Carbon
    {
        if ($this->billing_cycle === 'yearly') {
            return $this->starts_at?->addYear();
        }

        return $this->starts_at?->addMonth();
    }

    public function getFormattedAmount(): string
    {
        return $this->currency . ' ' . number_format($this->amount, 2);
    }

    public function getNextPaymentAmount(): float
    {
        return $this->billing_cycle === 'yearly' 
            ? $this->plan->price_yearly 
            : $this->plan->price_monthly;
    }

    // Status constants
    const STATUS_ACTIVE = 'active';
    const STATUS_TRIALING = 'trialing';
    const STATUS_PAST_DUE = 'past_due';
    const STATUS_CANCELED = 'canceled';
    const STATUS_UNPAID = 'unpaid';
    const STATUS_INCOMPLETE = 'incomplete';
    const STATUS_INCOMPLETE_EXPIRED = 'incomplete_expired';

    // Billing cycle constants
    const BILLING_MONTHLY = 'monthly';
    const BILLING_YEARLY = 'yearly';

    public static function getAvailableStatuses(): array
    {
        return [
            self::STATUS_ACTIVE,
            self::STATUS_TRIALING,
            self::STATUS_PAST_DUE,
            self::STATUS_CANCELED,
            self::STATUS_UNPAID,
            self::STATUS_INCOMPLETE,
            self::STATUS_INCOMPLETE_EXPIRED,
        ];
    }

    public static function getBillingCycles(): array
    {
        return [
            self::BILLING_MONTHLY,
            self::BILLING_YEARLY,
        ];
    }
}