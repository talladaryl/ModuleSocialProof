<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class NotificationExtended extends Model
{
    protected $table = 'sp_notifications_extended';
    protected $primaryKey = 'notification_id';

    protected $fillable = [
        'campaign_id',
        'team_id',
        'site_id',
        'template_id',
        'user_id',
        'name',
        'type',
        'title',
        'message',
        'url',
        'image_url',
        'status',
        'priority',
        'display_duration',
        'delay_before_show',
        'position',
        'settings',
        'config',
        'targeting_rules',
        'notifications',
        'last_action_date',
        'notification_key',
        'impressions',
        'hovers',
        'clicks',
        'form_submissions',
        'views_count',
        'clicks_count',
        'conversions_count',
        'is_enabled',
        'starts_at',
        'ends_at',
        'last_datetime',
    ];

    protected $casts = [
        'settings' => 'array',
        'config' => 'array',
        'targeting_rules' => 'array',
        'notifications' => 'array',
        'is_enabled' => 'boolean',
        'status' => 'string',
        'priority' => 'integer',
        'display_duration' => 'integer',
        'delay_before_show' => 'integer',
        'views_count' => 'integer',
        'clicks_count' => 'integer',
        'conversions_count' => 'integer',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'last_action_date' => 'datetime',
        'last_datetime' => 'datetime',
        'impressions' => 'integer',
        'hovers' => 'integer',
        'clicks' => 'integer',
        'form_submissions' => 'integer',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($notification) {
            if (empty($notification->notification_key)) {
                $notification->notification_key = md5($notification->user_id . time() . Str::random(16));
            }
        });
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }

    public function trackConversions(): HasMany
    {
        return $this->hasMany(TrackConversion::class, 'notification_id', 'notification_id');
    }

    public function trackNotifications(): HasMany
    {
        return $this->hasMany(TrackNotification::class, 'notification_id', 'notification_id');
    }

    public function scopeEnabled($query)
    {
        return $query->where('is_enabled', true);
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function incrementImpressions(): void
    {
        $this->increment('impressions');
        $this->update(['last_datetime' => now()]);
    }

    public function incrementHovers(): void
    {
        $this->increment('hovers');
    }

    public function incrementClicks(): void
    {
        $this->increment('clicks');
    }

    public function incrementFormSubmissions(): void
    {
        $this->increment('form_submissions');
    }

    public function getClickThroughRate(): float
    {
        if ($this->impressions === 0) {
            return 0;
        }

        return ($this->clicks / $this->impressions) * 100;
    }

    public function getConversionRate(): float
    {
        if ($this->impressions === 0) {
            return 0;
        }

        return ($this->form_submissions / $this->impressions) * 100;
    }

    public function generateNotificationKey(): void
    {
        $this->notification_key = md5($this->user_id . $this->notification_id . time() . Str::random(16));
        $this->save();
    }

    // Notification types constants
    const TYPE_INFORMATIONAL = 'INFORMATIONAL';
    const TYPE_INFORMATIONAL_MINI = 'INFORMATIONAL_MINI';
    const TYPE_COUPON = 'COUPON';
    const TYPE_LIVE_COUNTER = 'LIVE_COUNTER';
    const TYPE_VIDEO = 'VIDEO';
    const TYPE_AUDIO = 'AUDIO';
    const TYPE_SOCIAL_SHARE = 'SOCIAL_SHARE';
    const TYPE_EMOJI_FEEDBACK = 'EMOJI_FEEDBACK';
    const TYPE_COOKIE_NOTIFICATION = 'COOKIE_NOTIFICATION';
    const TYPE_SCORE_FEEDBACK = 'SCORE_FEEDBACK';
    const TYPE_INFORMATIONAL_BAR = 'INFORMATIONAL_BAR';
    const TYPE_INFORMATIONAL_BAR_MINI = 'INFORMATIONAL_BAR_MINI';
    const TYPE_IMAGE = 'IMAGE';
    const TYPE_COUPON_BAR = 'COUPON_BAR';
    const TYPE_BUTTON_BAR = 'BUTTON_BAR';
    const TYPE_BUTTON_MODAL = 'BUTTON_MODAL';
    const TYPE_ENGAGEMENT_LINKS = 'ENGAGEMENT_LINKS';
    const TYPE_WHATSAPP_CHAT = 'WHATSAPP_CHAT';
    const TYPE_CUSTOM_HTML = 'CUSTOM_HTML';
    const TYPE_CONTACT_US = 'CONTACT_US';
    const TYPE_EMAIL_COLLECTOR = 'EMAIL_COLLECTOR';
    const TYPE_CONVERSIONS = 'CONVERSIONS';
    const TYPE_CONVERSIONS_COUNTER = 'CONVERSIONS_COUNTER';
    const TYPE_REQUEST_COLLECTOR = 'REQUEST_COLLECTOR';
    const TYPE_COUNTDOWN_COLLECTOR = 'COUNTDOWN_COLLECTOR';
    const TYPE_COLLECTOR_BAR = 'COLLECTOR_BAR';
    const TYPE_COLLECTOR_MODAL = 'COLLECTOR_MODAL';
    const TYPE_COLLECTOR_TWO_MODAL = 'COLLECTOR_TWO_MODAL';
    const TYPE_TEXT_FEEDBACK = 'TEXT_FEEDBACK';
    const TYPE_REVIEWS = 'REVIEWS';

    public static function getAvailableTypes(): array
    {
        return [
            self::TYPE_INFORMATIONAL,
            self::TYPE_INFORMATIONAL_MINI,
            self::TYPE_COUPON,
            self::TYPE_LIVE_COUNTER,
            self::TYPE_VIDEO,
            self::TYPE_AUDIO,
            self::TYPE_SOCIAL_SHARE,
            self::TYPE_EMOJI_FEEDBACK,
            self::TYPE_COOKIE_NOTIFICATION,
            self::TYPE_SCORE_FEEDBACK,
            self::TYPE_INFORMATIONAL_BAR,
            self::TYPE_INFORMATIONAL_BAR_MINI,
            self::TYPE_IMAGE,
            self::TYPE_COUPON_BAR,
            self::TYPE_BUTTON_BAR,
            self::TYPE_BUTTON_MODAL,
            self::TYPE_ENGAGEMENT_LINKS,
            self::TYPE_WHATSAPP_CHAT,
            self::TYPE_CUSTOM_HTML,
            self::TYPE_CONTACT_US,
            self::TYPE_EMAIL_COLLECTOR,
            self::TYPE_CONVERSIONS,
            self::TYPE_CONVERSIONS_COUNTER,
            self::TYPE_REQUEST_COLLECTOR,
            self::TYPE_COUNTDOWN_COLLECTOR,
            self::TYPE_COLLECTOR_BAR,
            self::TYPE_COLLECTOR_MODAL,
            self::TYPE_COLLECTOR_TWO_MODAL,
            self::TYPE_TEXT_FEEDBACK,
            self::TYPE_REVIEWS,
        ];
    }
}
