<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Packages\SocialProof\Models\Site;

class Campaign extends Model
{
    protected $table = 'sp_campaigns';
    protected $primaryKey = 'campaign_id';

    protected $fillable = [
        'user_id',
        'domain_id',
        'team_id',
        'site_id',
        'pixel_key',
        'name',
        'description',
        'type',
        'status',
        'priority',
        'domain',
        'branding',
        'email_reports',
        'email_reports_last_datetime',
        'email_reports_count',
        'is_enabled',
        'last_datetime',
        'starts_at',
        'ends_at',
        'config',
        'targeting_rules',
        'views_count',
        'clicks_count',
        'conversions_count',
    ];

    protected $casts = [
        'branding' => 'array',
        'email_reports' => 'array',
        'config' => 'array',
        'targeting_rules' => 'array',
        'is_enabled' => 'boolean',
        'email_reports_last_datetime' => 'datetime',
        'last_datetime' => 'datetime',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($campaign) {
            if (empty($campaign->pixel_key)) {
                $campaign->pixel_key = Str::random(32);
            }
        });
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(NotificationExtended::class, 'campaign_id', 'campaign_id');
    }

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'team_id');
    }

    public function site(): BelongsTo
    {
        return $this->belongsTo(Site::class, 'site_id');
    }

    public function domain(): BelongsTo
    {
        return $this->belongsTo(Domain::class, 'domain_id', 'domain_id');
    }

    public function trackLogs(): HasMany
    {
        return $this->hasMany(TrackLog::class, 'campaign_id', 'campaign_id');
    }

    public function trackNotifications(): HasMany
    {
        return $this->hasMany(TrackNotification::class, 'campaign_id', 'campaign_id');
    }

    public function generatePixelKey(): void
    {
        do {
            $this->pixel_key = Str::random(32);
        } while (static::where('pixel_key', $this->pixel_key)->exists());
        
        $this->save();
    }

    public function getPixelUrl(): string
    {
        return route('socialproof.pixel', ['pixel_key' => $this->pixel_key]);
    }

    public function scopeEnabled($query)
    {
        return $query->where('is_enabled', true);
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }
}