<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ApiRateLog extends Model
{
    protected $table = 'sp_api_rate_logs';
    protected $primaryKey = 'rate_log_id';

    protected $fillable = [
        'api_key_id',
        'client_id',
        'endpoint',
        'method',
        'ip_address',
        'response_code',
        'response_time_ms',
        'rate_limited',
        'metadata',
    ];

    protected $casts = [
        'response_code' => 'integer',
        'response_time_ms' => 'integer',
        'rate_limited' => 'boolean',
        'metadata' => 'array',
    ];

    public function apiKey(): BelongsTo
    {
        return $this->belongsTo(ApiKey::class, 'api_key_id', 'api_key_id');
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function scopeRateLimited($query)
    {
        return $query->where('rate_limited', true);
    }

    public static function log(array $data): self
    {
        return static::create($data);
    }
}
