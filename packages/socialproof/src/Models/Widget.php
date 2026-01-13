<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Widget extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'sp_widgets';

    protected $fillable = [
        'name',
        'domain',
        'api_key',
        'settings',
        'is_active',
        'status',
        'user_id',
    ];

    protected $casts = [
        'settings' => 'array',
        'is_active' => 'boolean',
        'status' => 'string',
    ];

    protected $hidden = [
        'api_key',
    ];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    public function generateApiKey(): string
    {
        $this->api_key = 'sp_' . bin2hex(random_bytes(32));
        $this->save();
        
        return $this->api_key;
    }

    public function getDefaultSettings(): array
    {
        return [
            'position' => config('socialproof.widget.default_position'),
            'theme' => config('socialproof.widget.default_theme'),
            'animation_duration' => config('socialproof.widget.animation_duration'),
            'display_duration' => config('socialproof.widget.display_duration'),
            'max_notifications' => config('socialproof.widget.max_notifications'),
            'enabled_types' => array_keys(config('socialproof.notification_types')),
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($widget) {
            if (empty($widget->api_key)) {
                $widget->generateApiKey();
            }
            
            if (empty($widget->settings)) {
                $widget->settings = $widget->getDefaultSettings();
            }
        });
    }
}
