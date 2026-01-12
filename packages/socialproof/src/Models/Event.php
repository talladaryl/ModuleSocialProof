<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    use HasFactory;

    protected $table = 'sp_events';

    protected $fillable = [
        'widget_id',
        'type',
        'data',
        'customer_name',
        'customer_email',
        'customer_location',
        'ip_address',
        'user_agent',
        'processed_at',
    ];

    protected $casts = [
        'data' => 'array',
        'processed_at' => 'datetime',
    ];

    public function widget(): BelongsTo
    {
        return $this->belongsTo(Widget::class);
    }

    public function scopeRecent($query, $minutes = 60)
    {
        return $query->where('created_at', '>=', now()->subMinutes($minutes));
    }

    public function scopeByType($query, string $type)
    {
        return $query->where('type', $type);
    }

    public function scopeUnprocessed($query)
    {
        return $query->whereNull('processed_at');
    }

    public function markAsProcessed(): void
    {
        $this->update(['processed_at' => now()]);
    }

    public function getFormattedCustomerNameAttribute(): string
    {
        if ($this->customer_name) {
            return $this->customer_name;
        }

        if ($this->customer_email) {
            return explode('@', $this->customer_email)[0];
        }

        return 'Someone';
    }
}