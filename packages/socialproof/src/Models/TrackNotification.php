<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrackNotification extends Model
{
    protected $table = 'sp_track_notifications';

    protected $fillable = [
        'user_id',
        'campaign_id',
        'notification_id',
        'type',
        'path',
    ];

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }

    public function notification(): BelongsTo
    {
        return $this->belongsTo(NotificationExtended::class, 'notification_id', 'notification_id');
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function scopeForCampaign($query, $campaignId)
    {
        return $query->where('campaign_id', $campaignId);
    }

    public function scopeForNotification($query, $notificationId)
    {
        return $query->where('notification_id', $notificationId);
    }

    // Tracking types
    const TYPE_HOVER = 'hover';
    const TYPE_IMPRESSION = 'impression';
    const TYPE_CLICK = 'click';
    const TYPE_FORM_SUBMISSION = 'form_submission';
    const TYPE_FEEDBACK_EMOJI_ANGRY = 'feedback_emoji_angry';
    const TYPE_FEEDBACK_EMOJI_SAD = 'feedback_emoji_sad';
    const TYPE_FEEDBACK_EMOJI_NEUTRAL = 'feedback_emoji_neutral';
    const TYPE_FEEDBACK_EMOJI_HAPPY = 'feedback_emoji_happy';
    const TYPE_FEEDBACK_EMOJI_EXCITED = 'feedback_emoji_excited';
    const TYPE_FEEDBACK_SCORE_1 = 'feedback_score_1';
    const TYPE_FEEDBACK_SCORE_2 = 'feedback_score_2';
    const TYPE_FEEDBACK_SCORE_3 = 'feedback_score_3';
    const TYPE_FEEDBACK_SCORE_4 = 'feedback_score_4';
    const TYPE_FEEDBACK_SCORE_5 = 'feedback_score_5';
}