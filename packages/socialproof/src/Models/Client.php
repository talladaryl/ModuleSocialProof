<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Client extends Authenticatable
{
    use SoftDeletes, Notifiable;

    protected $table = 'sp_clients';
    protected $primaryKey = 'client_id';

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'company_name',
        'company',
        'address',
        'website',
        'country',
        'timezone',
        'language',
        'currency',
        'avatar',
        'email_verified_at',
        'status',
        'last_login_at',
        'preferences',
        'settings',
        'billing_info',
        'notes',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'last_login_at' => 'datetime',
        'preferences' => 'array',
        'billing_info' => 'array',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'billing_info',
    ];

    public function getCompanyAttribute(): ?string
    {
        return $this->attributes['company'] ?? $this->attributes['company_name'] ?? null;
    }

    public function setCompanyAttribute($value): void
    {
        $this->attributes['company_name'] = $value;
    }

    public function getSettingsAttribute(): array
    {
        $preferences = $this->preferences ?? [];
        return is_array($preferences) ? $preferences : [];
    }

    public function setSettingsAttribute($value): void
    {
        $preferences = $this->preferences ?? [];
        $preferences = is_array($preferences) ? $preferences : [];
        $value = is_array($value) ? $value : [];

        $this->setAttribute('preferences', array_merge($preferences, $value));
    }

    public function getWebsiteAttribute(): ?string
    {
        if (array_key_exists('website', $this->attributes)) {
            return $this->attributes['website'];
        }

        $preferences = $this->preferences ?? [];
        return is_array($preferences) ? ($preferences['website'] ?? null) : null;
    }

    public function setWebsiteAttribute($value): void
    {
        $preferences = $this->preferences ?? [];
        $preferences = is_array($preferences) ? $preferences : [];

        if ($value === null || $value === '') {
            unset($preferences['website']);
        } else {
            $preferences['website'] = $value;
        }

        $this->setAttribute('preferences', $preferences);
    }

    public function getNotesAttribute(): ?string
    {
        if (array_key_exists('notes', $this->attributes)) {
            return $this->attributes['notes'];
        }

        $preferences = $this->preferences ?? [];
        return is_array($preferences) ? ($preferences['notes'] ?? null) : null;
    }

    public function setNotesAttribute($value): void
    {
        $preferences = $this->preferences ?? [];
        $preferences = is_array($preferences) ? $preferences : [];

        if ($value === null || $value === '') {
            unset($preferences['notes']);
        } else {
            $preferences['notes'] = $value;
        }

        $this->setAttribute('preferences', $preferences);
    }

    // Relations
    public function subscription(): HasOne
    {
        return $this->hasOne(Subscription::class, 'client_id', 'client_id')
            ->where('status', 'active')
            ->latest();
    }

    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class, 'client_id', 'client_id');
    }

    public function sites(): HasMany
    {
        return $this->hasMany(Site::class, 'client_id', 'client_id');
    }

    public function campaigns(): HasMany
    {
        return $this->hasMany(Campaign::class, 'client_id', 'client_id');
    }

    public function widgets(): HasMany
    {
        return $this->hasMany(Widget::class, 'client_id', 'client_id');
    }

    public function notificationExtendeds(): HasMany
    {
        return $this->hasMany(NotificationExtended::class, 'client_id', 'client_id');
    }

    public function domains(): HasMany
    {
        return $this->hasMany(Domain::class, 'client_id', 'client_id');
    }

    public function apiKeys(): HasMany
    {
        return $this->hasMany(ApiKey::class, 'client_id', 'client_id');
    }

    public function teamMembers(): HasMany
    {
        return $this->hasMany(TeamMember::class, 'client_id', 'client_id');
    }

    public function teams(): HasMany
    {
        return $this->hasMany(Team::class, 'client_id', 'client_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeVerified($query)
    {
        return $query->whereNotNull('email_verified_at');
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->status === 'active';
    }

    public function isEmailVerified(): bool
    {
        return !is_null($this->email_verified_at);
    }

    public function getCurrentPlan()
    {
        return $this->subscription?->plan;
    }

    public function hasActiveSubscription(): bool
    {
        return $this->subscription && $this->subscription->isActive();
    }

    public function canCreateSites(): bool
    {
        $plan = $this->getCurrentPlan();
        if (!$plan) return false;
        
        if ($plan->max_sites === -1) return true;
        
        return $this->sites()->count() < $plan->max_sites;
    }

    public function canCreateWidgets(): bool
    {
        $plan = $this->getCurrentPlan();
        if (!$plan) return false;
        
        if ($plan->max_widgets === -1) return true;
        
        return $this->widgets()->count() < $plan->max_widgets;
    }

    public function canCreateNotifications(): bool
    {
        $plan = $this->getCurrentPlan();
        if (!$plan) return false;
        
        if ($plan->max_notifications === -1) return true;
        
        return $this->notificationExtendeds()->count() < $plan->max_notifications;
    }

    public function getRemainingMonthlyEvents(): int
    {
        $plan = $this->getCurrentPlan();
        if (!$plan) return 0;
        
        if ($plan->max_monthly_events === -1) return PHP_INT_MAX;
        
        // Calculer les événements du mois en cours
        $currentMonthEvents = $this->getMonthlyEventsCount();
        
        return max(0, $plan->max_monthly_events - $currentMonthEvents);
    }

    public function getMonthlyEventsCount(): int
    {
        return Event::where('client_id', $this->client_id)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
    }

    public function events(): HasMany
    {
        return $this->hasMany(Event::class, 'client_id', 'client_id');
    }

    public function conversions(): HasMany
    {
        return $this->hasMany(TrackConversion::class, 'client_id', 'client_id');
    }

    public function trackNotifications(): HasMany
    {
        return $this->hasMany(TrackNotification::class, 'client_id', 'client_id');
    }

    // Status constants
    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';
    const STATUS_SUSPENDED = 'suspended';
    const STATUS_PENDING = 'pending';

    public static function getAvailableStatuses(): array
    {
        return [
            self::STATUS_ACTIVE,
            self::STATUS_INACTIVE,
            self::STATUS_SUSPENDED,
            self::STATUS_PENDING,
        ];
    }
}
