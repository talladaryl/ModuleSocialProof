<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrackConversion extends Model
{
    protected $table = 'sp_track_conversions';

    protected $fillable = [
        'user_id',
        'client_id',
        'site_id',
        'notification_id',
        'type',
        'data',
        'url',
        'page_title',
        'location',
    ];

    protected $casts = [
        'data' => 'array',
        'location' => 'array',
    ];

    public function notification(): BelongsTo
    {
        return $this->belongsTo(NotificationExtended::class, 'notification_id', 'notification_id');
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function site(): BelongsTo
    {
        return $this->belongsTo(Site::class, 'site_id', 'site_id');
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function scopeForNotification($query, $notificationId)
    {
        return $query->where('notification_id', $notificationId);
    }

    // Conversion types
    const TYPE_WEBHOOK = 'webhook';
    const TYPE_AUTO_CAPTURE = 'auto_capture';
    const TYPE_COLLECTOR = 'collector';
    const TYPE_IMPORTED = 'imported';
}