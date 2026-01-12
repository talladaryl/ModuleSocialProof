<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Site extends Model
{
    use SoftDeletes;

    protected $table = 'sp_sites';
    protected $primaryKey = 'site_id';

    protected $fillable = [
        'client_id',
        'name',
        'domain',
        'url',
        'description',
        'favicon_url',
        'timezone',
        'language',
        'settings',
        'tracking_config',
        'is_active',
        'verified_at',
        'last_activity_at',
    ];

    protected $casts = [
        'settings' => 'array',
        'tracking_config' => 'array',
        'is_active' => 'boolean',
        'verified_at' => 'datetime',
        'last_activity_at' => 'datetime',
    ];

    // Relations
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function widgets(): HasMany
    {
        return $this->hasMany(Widget::class, 'site_id', 'site_id');
    }

    public function campaigns(): HasMany
    {
        return $this->hasMany(Campaign::class, 'site_id', 'site_id');
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(NotificationExtended::class, 'site_id', 'site_id');
    }

    public function apiKeys(): HasMany
    {
        return $this->hasMany(ApiKey::class, 'site_id', 'site_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeVerified($query)
    {
        return $query->whereNotNull('verified_at');
    }

    public function scopeForClient($query, $clientId)
    {
        return $query->where('client_id', $clientId);
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->is_active;
    }

    public function isVerified(): bool
    {
        return !is_null($this->verified_at);
    }

    public function verify(): void
    {
        $this->update([
            'verified_at' => now(),
        ]);
    }

    public function activate(): void
    {
        $this->update([
            'is_active' => true,
        ]);
    }

    public function deactivate(): void
    {
        $this->update([
            'is_active' => false,
        ]);
    }

    public function updateLastActivity(): void
    {
        $this->update([
            'last_activity_at' => now(),
        ]);
    }

    public function getCleanDomain(): string
    {
        $domain = $this->domain;
        
        // Remove protocol
        $domain = preg_replace('#^https?://#', '', $domain);
        
        // Remove www
        $domain = preg_replace('#^www\.#', '', $domain);
        
        // Remove trailing slash
        $domain = rtrim($domain, '/');
        
        return $domain;
    }

    public function getFullUrl(): string
    {
        if (empty($this->url)) {
            return 'https://' . $this->getCleanDomain();
        }

        if (!str_starts_with($this->url, 'http')) {
            return 'https://' . $this->url;
        }

        return $this->url;
    }

    public function getFaviconUrl(): string
    {
        if (!empty($this->favicon_url)) {
            return $this->favicon_url;
        }

        // Try to get favicon from domain
        return 'https://www.google.com/s2/favicons?domain=' . $this->getCleanDomain();
    }

    public function getActiveWidgetsCount(): int
    {
        return $this->widgets()->where('is_active', true)->count();
    }

    public function getActiveNotificationsCount(): int
    {
        return $this->notifications()->where('is_enabled', true)->count();
    }

    public function getTotalEventsCount(): int
    {
        // Cette méthode devrait calculer le nombre total d'événements
        // Pour l'instant, on retourne 0
        return 0;
    }

    public function getMonthlyEventsCount(): int
    {
        // Cette méthode devrait calculer le nombre d'événements du mois en cours
        // Pour l'instant, on retourne 0
        return 0;
    }

    public function canAddWidget(): bool
    {
        $client = $this->client;
        if (!$client) return false;

        return $client->canCreateWidgets();
    }

    public function canAddNotification(): bool
    {
        $client = $this->client;
        if (!$client) return false;

        return $client->canCreateNotifications();
    }

    // Settings helpers
    public function getSetting(string $key, $default = null)
    {
        return $this->settings[$key] ?? $default;
    }

    public function setSetting(string $key, $value): void
    {
        $settings = $this->settings ?? [];
        $settings[$key] = $value;
        
        $this->update(['settings' => $settings]);
    }

    public function getTrackingConfig(string $key, $default = null)
    {
        return $this->tracking_config[$key] ?? $default;
    }

    public function setTrackingConfig(string $key, $value): void
    {
        $config = $this->tracking_config ?? [];
        $config[$key] = $value;
        
        $this->update(['tracking_config' => $config]);
    }
}