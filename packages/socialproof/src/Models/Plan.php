<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Plan extends Model
{
    protected $table = 'sp_plans';
    protected $primaryKey = 'plan_id';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price_monthly',
        'price_yearly',
        'currency',
        'trial_days',
        'max_sites',
        'max_widgets',
        'max_notifications',
        'max_monthly_events',
        'max_team_members',
        'max_api_keys',
        'features',
        'notification_types',
        'is_popular',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'price_monthly' => 'decimal:2',
        'price_yearly' => 'decimal:2',
        'trial_days' => 'integer',
        'max_sites' => 'integer',
        'max_widgets' => 'integer',
        'max_notifications' => 'integer',
        'max_monthly_events' => 'integer',
        'max_team_members' => 'integer',
        'max_api_keys' => 'integer',
        'features' => 'array',
        'notification_types' => 'array',
        'is_popular' => 'boolean',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    // Relations
    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class, 'plan_id', 'plan_id');
    }

    public function activeSubscriptions(): HasMany
    {
        return $this->subscriptions()->where('status', 'active');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopePopular($query)
    {
        return $query->where('is_popular', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->is_active;
    }

    public function isPopular(): bool
    {
        return $this->is_popular;
    }

    public function hasFeature(string $feature): bool
    {
        return isset($this->features[$feature]) && $this->features[$feature] === true;
    }

    public function supportsNotificationType(string $type): bool
    {
        if ($this->notification_types === 'all') {
            return true;
        }

        if (is_array($this->notification_types)) {
            return in_array($type, $this->notification_types);
        }

        return false;
    }

    public function getYearlySavings(): float
    {
        if ($this->price_monthly <= 0 || $this->price_yearly <= 0) {
            return 0;
        }

        $yearlyFromMonthly = $this->price_monthly * 12;
        return $yearlyFromMonthly - $this->price_yearly;
    }

    public function getYearlySavingsPercentage(): float
    {
        if ($this->price_monthly <= 0) {
            return 0;
        }

        $yearlyFromMonthly = $this->price_monthly * 12;
        if ($yearlyFromMonthly <= 0) {
            return 0;
        }

        return (($yearlyFromMonthly - $this->price_yearly) / $yearlyFromMonthly) * 100;
    }

    public function isUnlimited(string $limit): bool
    {
        return $this->{$limit} === -1;
    }

    public function getFormattedLimit(string $limit): string
    {
        $value = $this->{$limit};
        
        if ($value === -1) {
            return 'Unlimited';
        }

        if ($limit === 'max_monthly_events' && $value >= 1000) {
            return number_format($value / 1000, 0) . 'K';
        }

        return number_format($value);
    }

    public function getFormattedPrice(string $period = 'monthly'): string
    {
        $price = $period === 'yearly' ? $this->price_yearly : $this->price_monthly;
        
        if ($price <= 0) {
            return 'Free';
        }

        return $this->currency . ' ' . number_format($price, 2);
    }

    // Plan types constants
    const TYPE_FREE = 'free';
    const TYPE_STARTER = 'starter';
    const TYPE_PROFESSIONAL = 'professional';
    const TYPE_ENTERPRISE = 'enterprise';

    public static function getDefaultPlans(): array
    {
        return [
            self::TYPE_FREE,
            self::TYPE_STARTER,
            self::TYPE_PROFESSIONAL,
            self::TYPE_ENTERPRISE,
        ];
    }
}