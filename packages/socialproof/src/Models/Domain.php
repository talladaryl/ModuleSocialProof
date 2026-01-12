<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Domain extends Model
{
    protected $table = 'sp_domains';
    protected $primaryKey = 'domain_id';

    protected $fillable = [
        'user_id',
        'scheme',
        'host',
        'custom_index_url',
        'custom_not_found_url',
        'type',
        'is_enabled',
        'last_datetime',
    ];

    protected $casts = [
        'is_enabled' => 'boolean',
        'last_datetime' => 'datetime',
        'type' => 'integer',
    ];

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