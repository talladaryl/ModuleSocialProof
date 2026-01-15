<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrackLog extends Model
{
    protected $table = 'sp_track_logs';

    protected $fillable = [
        'user_id',
        'campaign_id',
        'path',
        'ip_binary',
    ];

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeForCampaign($query, $campaignId)
    {
        return $query->where('campaign_id', $campaignId);
    }

    public function setIpAddress(string $ip): void
    {
        $this->ip_binary = inet_pton($ip);
    }

    public function getIpAddress(): ?string
    {
        return $this->ip_binary ? inet_ntop($this->ip_binary) : null;
    }
}