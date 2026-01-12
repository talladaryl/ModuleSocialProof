<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationHandler extends Model
{
    protected $table = 'sp_notification_handlers';
    protected $primaryKey = 'notification_handler_id';

    protected $fillable = [
        'user_id',
        'type',
        'name',
        'settings',
        'is_enabled',
        'last_datetime',
    ];

    protected $casts = [
        'settings' => 'array',
        'is_enabled' => 'boolean',
        'last_datetime' => 'datetime',
    ];

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

    // Handler types
    const TYPE_EMAIL = 'email';
    const TYPE_WEBHOOK = 'webhook';
    const TYPE_SLACK = 'slack';
    const TYPE_DISCORD = 'discord';
    const TYPE_TELEGRAM = 'telegram';
    const TYPE_MICROSOFT_TEAMS = 'microsoft_teams';
    const TYPE_TWILIO = 'twilio';
    const TYPE_TWILIO_CALL = 'twilio_call';
    const TYPE_WHATSAPP = 'whatsapp';
    const TYPE_X = 'x';

    public static function getAvailableTypes(): array
    {
        return [
            self::TYPE_EMAIL,
            self::TYPE_WEBHOOK,
            self::TYPE_SLACK,
            self::TYPE_DISCORD,
            self::TYPE_TELEGRAM,
            self::TYPE_MICROSOFT_TEAMS,
            self::TYPE_TWILIO,
            self::TYPE_TWILIO_CALL,
            self::TYPE_WHATSAPP,
            self::TYPE_X,
        ];
    }
}