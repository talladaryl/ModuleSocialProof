<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'sp_notifications';

    protected $fillable = [
        'widget_id',
        'event_id',
        'type',
        'title',
        'message',
        'icon',
        'data',
        'is_active',
        'displayed_at',
        'expires_at',
    ];

    protected $casts = [
        'data' => 'array',
        'is_active' => 'boolean',
        'displayed_at' => 'datetime',
        'expires_at' => 'datetime',
    ];

    public function widget(): BelongsTo
    {
        return $this->belongsTo(Widget::class);
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true)
                    ->where(function ($q) {
                        $q->whereNull('expires_at')
                          ->orWhere('expires_at', '>', now());
                    });
    }

    public function scopeForWidget($query, $widgetId)
    {
        return $query->where('widget_id', $widgetId);
    }

    public function scopeRecent($query, $minutes = 60)
    {
        return $query->where('created_at', '>=', now()->subMinutes($minutes));
    }

    public function markAsDisplayed(): void
    {
        $this->update(['displayed_at' => now()]);
    }

    public function isExpired(): bool
    {
        return $this->expires_at && $this->expires_at->isPast();
    }
}