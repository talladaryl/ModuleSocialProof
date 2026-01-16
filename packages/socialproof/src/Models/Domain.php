<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Domain extends Model
{
    protected $table = 'sp_domains';
    protected $primaryKey = 'domain_id';

    protected $fillable = [
        'client_id',
        'site_id',
        'user_id',
        'domain',
        'scheme',
        'host',
        'custom_index_url',
        'custom_not_found_url',
        'type',
        'is_enabled',
        'is_active',
        'is_verified',
        'verified_at',
        'verification_token',
        'is_primary',
        'last_datetime',
    ];

    protected $casts = [
        'is_enabled' => 'boolean',
        'is_active' => 'boolean',
        'is_verified' => 'boolean',
        'is_primary' => 'boolean',
        'verified_at' => 'datetime',
        'last_datetime' => 'datetime',
        'type' => 'integer',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function site(): BelongsTo
    {
        return $this->belongsTo(Site::class, 'site_id', 'site_id');
    }

    public function campaigns(): HasMany
    {
        return $this->hasMany(Campaign::class, 'domain_id', 'domain_id');
    }

    public function scopeEnabled($query)
    {
        return $query->where('is_enabled', true);
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function getFullUrl(): string
    {
        return $this->scheme . '://' . $this->host;
    }

    // Domain types
    const TYPE_REGULAR = 0;
    const TYPE_CUSTOM = 1;
}
