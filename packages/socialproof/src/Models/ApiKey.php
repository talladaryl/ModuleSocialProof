<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ApiKey extends Model
{
    protected $table = 'sp_api_keys';
    protected $primaryKey = 'api_key_id';

    protected $fillable = [
        'client_id',
        'site_id',
        'name',
        'key_hash',
        'permissions',
        'rate_limit',
        'is_active',
        'expires_at',
        'last_used_at',
        'usage_count',
        'ip_whitelist',
        'domain_whitelist',
    ];

    protected $casts = [
        'permissions' => 'array',
        'is_active' => 'boolean',
        'expires_at' => 'datetime',
        'last_used_at' => 'datetime',
        'usage_count' => 'integer',
        'rate_limit' => 'integer',
        'ip_whitelist' => 'array',
        'domain_whitelist' => 'array',
    ];

    protected $hidden = [
        'key_hash',
    ];

    // Relations
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function site(): BelongsTo
    {
        return $this->belongsTo(Site::class, 'site_id', 'site_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')
                  ->orWhere('expires_at', '>', now());
            });
    }

    public function scopeExpired($query)
    {
        return $query->whereNotNull('expires_at')
            ->where('expires_at', '<=', now());
    }

    public function scopeForClient($query, $clientId)
    {
        return $query->where('client_id', $clientId);
    }

    public function scopeForSite($query, $siteId)
    {
        return $query->where('site_id', $siteId);
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->is_active && !$this->isExpired();
    }

    public function isExpired(): bool
    {
        return $this->expires_at && $this->expires_at->isPast();
    }

    public function hasPermission(string $permission): bool
    {
        if (empty($this->permissions)) {
            return false;
        }

        return in_array($permission, $this->permissions) || in_array('*', $this->permissions);
    }

    public function canAccessFromIp(string $ip): bool
    {
        if (empty($this->ip_whitelist)) {
            return true; // No restriction
        }

        return in_array($ip, $this->ip_whitelist);
    }

    public function canAccessFromDomain(string $domain): bool
    {
        if (empty($this->domain_whitelist)) {
            return true; // No restriction
        }

        // Clean domain
        $domain = preg_replace('#^https?://#', '', $domain);
        $domain = preg_replace('#^www\.#', '', $domain);
        $domain = rtrim($domain, '/');

        return in_array($domain, $this->domain_whitelist);
    }

    public function recordUsage(): void
    {
        $this->increment('usage_count');
        $this->update(['last_used_at' => now()]);
    }

    public function activate(): void
    {
        $this->update(['is_active' => true]);
    }

    public function deactivate(): void
    {
        $this->update(['is_active' => false]);
    }

    public function regenerate(): string
    {
        $newKey = $this->generateApiKey();
        $this->update([
            'key_hash' => hash('sha256', $newKey),
            'usage_count' => 0,
            'last_used_at' => null,
        ]);

        return $newKey;
    }

    public function extend(int $days): void
    {
        $expiresAt = $this->expires_at ?? now();
        $this->update([
            'expires_at' => $expiresAt->addDays($days),
        ]);
    }

    public function getDaysUntilExpiry(): ?int
    {
        if (!$this->expires_at) {
            return null;
        }

        return max(0, now()->diffInDays($this->expires_at, false));
    }

    public function getUsageToday(): int
    {
        // Cette méthode devrait calculer l'utilisation d'aujourd'hui
        // Pour l'instant, on retourne 0
        return 0;
    }

    public function isRateLimited(): bool
    {
        if (!$this->rate_limit) {
            return false;
        }

        return $this->getUsageToday() >= $this->rate_limit;
    }

    // Static methods
    public static function generateApiKey(): string
    {
        return 'sp_' . Str::random(32);
    }

    public static function findByKey(string $key): ?self
    {
        $hash = hash('sha256', $key);
        return static::where('key_hash', $hash)->first();
    }

    public static function createForClient(Client $client, array $data = []): array
    {
        $key = static::generateApiKey();
        
        $apiKey = static::create(array_merge([
            'client_id' => $client->client_id,
            'name' => 'Default API Key',
            'key_hash' => hash('sha256', $key),
            'permissions' => ['read', 'write'],
            'is_active' => true,
        ], $data));

        return [$apiKey, $key];
    }

    public static function createForSite(Site $site, array $data = []): array
    {
        $key = static::generateApiKey();
        
        $apiKey = static::create(array_merge([
            'client_id' => $site->client_id,
            'site_id' => $site->site_id,
            'name' => 'Site API Key - ' . $site->name,
            'key_hash' => hash('sha256', $key),
            'permissions' => ['read', 'write'],
            'is_active' => true,
        ], $data));

        return [$apiKey, $key];
    }

    // Permission constants
    const PERMISSION_READ = 'read';
    const PERMISSION_WRITE = 'write';
    const PERMISSION_DELETE = 'delete';
    const PERMISSION_ADMIN = 'admin';
    const PERMISSION_ALL = '*';

    public static function getAvailablePermissions(): array
    {
        return [
            self::PERMISSION_READ => 'Read access to data',
            self::PERMISSION_WRITE => 'Create and update data',
            self::PERMISSION_DELETE => 'Delete data',
            self::PERMISSION_ADMIN => 'Full administrative access',
            self::PERMISSION_ALL => 'All permissions',
        ];
    }
}