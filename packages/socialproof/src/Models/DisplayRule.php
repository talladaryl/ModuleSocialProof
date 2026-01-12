<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DisplayRule extends Model
{
    protected $table = 'sp_display_rules';
    protected $primaryKey = 'rule_id';

    protected $fillable = [
        'notification_id',
        'name',
        'trigger_type',
        'trigger_config',
        'targeting_config',
        'timing_config',
        'frequency_config',
        'conditions',
        'is_active',
        'priority',
    ];

    protected $casts = [
        'trigger_config' => 'array',
        'targeting_config' => 'array',
        'timing_config' => 'array',
        'frequency_config' => 'array',
        'conditions' => 'array',
        'is_active' => 'boolean',
        'priority' => 'integer',
    ];

    // Relations
    public function notification(): BelongsTo
    {
        return $this->belongsTo(NotificationExtended::class, 'notification_id', 'notification_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByTriggerType($query, string $type)
    {
        return $query->where('trigger_type', $type);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('priority', 'desc')->orderBy('created_at');
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->is_active;
    }

    public function activate(): void
    {
        $this->update(['is_active' => true]);
    }

    public function deactivate(): void
    {
        $this->update(['is_active' => false]);
    }

    public function getTriggerConfig(string $key, $default = null)
    {
        return $this->trigger_config[$key] ?? $default;
    }

    public function setTriggerConfig(string $key, $value): void
    {
        $config = $this->trigger_config ?? [];
        $config[$key] = $value;
        
        $this->update(['trigger_config' => $config]);
    }

    public function getTargetingConfig(string $key, $default = null)
    {
        return $this->targeting_config[$key] ?? $default;
    }

    public function setTargetingConfig(string $key, $value): void
    {
        $config = $this->targeting_config ?? [];
        $config[$key] = $value;
        
        $this->update(['targeting_config' => $config]);
    }

    public function getTimingConfig(string $key, $default = null)
    {
        return $this->timing_config[$key] ?? $default;
    }

    public function setTimingConfig(string $key, $value): void
    {
        $config = $this->timing_config ?? [];
        $config[$key] = $value;
        
        $this->update(['timing_config' => $config]);
    }

    public function getFrequencyConfig(string $key, $default = null)
    {
        return $this->frequency_config[$key] ?? $default;
    }

    public function setFrequencyConfig(string $key, $value): void
    {
        $config = $this->frequency_config ?? [];
        $config[$key] = $value;
        
        $this->update(['frequency_config' => $config]);
    }

    public function shouldTrigger(array $context): bool
    {
        if (!$this->isActive()) {
            return false;
        }

        // Check trigger conditions
        if (!$this->checkTriggerConditions($context)) {
            return false;
        }

        // Check targeting conditions
        if (!$this->checkTargetingConditions($context)) {
            return false;
        }

        // Check timing conditions
        if (!$this->checkTimingConditions($context)) {
            return false;
        }

        // Check frequency conditions
        if (!$this->checkFrequencyConditions($context)) {
            return false;
        }

        return true;
    }

    private function checkTriggerConditions(array $context): bool
    {
        switch ($this->trigger_type) {
            case self::TRIGGER_PAGE_LOAD:
                return true;
                
            case self::TRIGGER_SCROLL:
                $scrollPercentage = $context['scroll_percentage'] ?? 0;
                $requiredScroll = $this->getTriggerConfig('scroll_percentage', 50);
                return $scrollPercentage >= $requiredScroll;
                
            case self::TRIGGER_TIME_DELAY:
                $timeOnPage = $context['time_on_page'] ?? 0;
                $requiredTime = $this->getTriggerConfig('delay_seconds', 5);
                return $timeOnPage >= $requiredTime;
                
            case self::TRIGGER_EXIT_INTENT:
                return $context['exit_intent'] ?? false;
                
            case self::TRIGGER_CLICK:
                $clickedElement = $context['clicked_element'] ?? '';
                $targetElement = $this->getTriggerConfig('target_element', '');
                return $clickedElement === $targetElement;
                
            default:
                return false;
        }
    }

    private function checkTargetingConditions(array $context): bool
    {
        // Check device targeting
        $targetDevices = $this->getTargetingConfig('devices', []);
        if (!empty($targetDevices)) {
            $currentDevice = $context['device'] ?? 'desktop';
            if (!in_array($currentDevice, $targetDevices)) {
                return false;
            }
        }

        // Check country targeting
        $targetCountries = $this->getTargetingConfig('countries', []);
        if (!empty($targetCountries)) {
            $currentCountry = $context['country'] ?? '';
            if (!in_array($currentCountry, $targetCountries)) {
                return false;
            }
        }

        // Check page targeting
        $targetPages = $this->getTargetingConfig('pages', []);
        if (!empty($targetPages)) {
            $currentPage = $context['page_url'] ?? '';
            $matched = false;
            foreach ($targetPages as $pattern) {
                if (fnmatch($pattern, $currentPage)) {
                    $matched = true;
                    break;
                }
            }
            if (!$matched) {
                return false;
            }
        }

        return true;
    }

    private function checkTimingConditions(array $context): bool
    {
        // Check if within allowed time range
        $startTime = $this->getTimingConfig('start_time');
        $endTime = $this->getTimingConfig('end_time');
        
        if ($startTime && $endTime) {
            $currentTime = now()->format('H:i');
            if ($currentTime < $startTime || $currentTime > $endTime) {
                return false;
            }
        }

        // Check allowed days
        $allowedDays = $this->getTimingConfig('days', []);
        if (!empty($allowedDays)) {
            $currentDay = now()->dayOfWeek; // 0 = Sunday, 6 = Saturday
            if (!in_array($currentDay, $allowedDays)) {
                return false;
            }
        }

        return true;
    }

    private function checkFrequencyConditions(array $context): bool
    {
        $maxViews = $this->getFrequencyConfig('max_views_per_session');
        if ($maxViews) {
            $currentViews = $context['session_views'] ?? 0;
            if ($currentViews >= $maxViews) {
                return false;
            }
        }

        $maxViewsPerDay = $this->getFrequencyConfig('max_views_per_day');
        if ($maxViewsPerDay) {
            $dailyViews = $context['daily_views'] ?? 0;
            if ($dailyViews >= $maxViewsPerDay) {
                return false;
            }
        }

        return true;
    }

    // Trigger type constants
    const TRIGGER_PAGE_LOAD = 'page_load';
    const TRIGGER_SCROLL = 'scroll';
    const TRIGGER_TIME_DELAY = 'time_delay';
    const TRIGGER_EXIT_INTENT = 'exit_intent';
    const TRIGGER_CLICK = 'click';
    const TRIGGER_HOVER = 'hover';
    const TRIGGER_FORM_SUBMIT = 'form_submit';
    const TRIGGER_NEW_VISITOR = 'new_visitor';
    const TRIGGER_RETURNING_VISITOR = 'returning_visitor';

    public static function getAvailableTriggerTypes(): array
    {
        return [
            self::TRIGGER_PAGE_LOAD => 'Page Load',
            self::TRIGGER_SCROLL => 'Scroll Percentage',
            self::TRIGGER_TIME_DELAY => 'Time Delay',
            self::TRIGGER_EXIT_INTENT => 'Exit Intent',
            self::TRIGGER_CLICK => 'Element Click',
            self::TRIGGER_HOVER => 'Element Hover',
            self::TRIGGER_FORM_SUBMIT => 'Form Submit',
            self::TRIGGER_NEW_VISITOR => 'New Visitor',
            self::TRIGGER_RETURNING_VISITOR => 'Returning Visitor',
        ];
    }
}