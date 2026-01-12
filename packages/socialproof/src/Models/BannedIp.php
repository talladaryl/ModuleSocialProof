<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;

class BannedIp extends Model
{
    protected $table = 'sp_banned_ips';
    protected $primaryKey = 'ban_id';

    protected $fillable = [
        'ip_address',
        'reason',
        'banned_by',
        'expires_at',
        'is_permanent',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
        'is_permanent' => 'boolean',
    ];

    public function isActive(): bool
    {
        if ($this->is_permanent) return true;
        return $this->expires_at && $this->expires_at->isFuture();
    }

    public static function isBanned(string $ip): bool
    {
        return static::where('ip_address', $ip)
            ->where(function ($query) {
                $query->where('is_permanent', true)
                    ->orWhere('expires_at', '>', now());
            })
            ->exists();
    }

    public static function ban(string $ip, ?string $reason = null, ?int $hours = null): self
    {
        return static::updateOrCreate(
            ['ip_address' => $ip],
            [
                'reason' => $reason,
                'banned_by' => auth()->id(),
                'expires_at' => $hours ? now()->addHours($hours) : null,
                'is_permanent' => $hours === null,
            ]
        );
    }

    public static function unban(string $ip): bool
    {
        return static::where('ip_address', $ip)->delete() > 0;
    }
}
