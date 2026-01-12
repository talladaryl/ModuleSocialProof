<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Template extends Model
{
    protected $table = 'sp_templates';
    protected $primaryKey = 'template_id';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
        'notification_type',
        'preview_image',
        'design_config',
        'layout_config',
        'default_content',
        'custom_css',
        'custom_js',
        'visibility',
        'status',
        'is_featured',
        'sort_order',
        'version',
        'tags',
        'author',
        'license',
    ];

    protected $casts = [
        'design_config' => 'array',
        'layout_config' => 'array',
        'default_content' => 'array',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'tags' => 'array',
    ];

    // Relations
    public function notifications(): HasMany
    {
        return $this->hasMany(NotificationExtended::class, 'template_id', 'template_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopePublic($query)
    {
        return $query->where('visibility', 'public');
    }

    public function scopeSystem($query)
    {
        return $query->where('visibility', 'system');
    }

    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    public function scopeByNotificationType($query, string $type)
    {
        return $query->where('notification_type', $type);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->status === 'active';
    }

    public function isFeatured(): bool
    {
        return $this->is_featured;
    }

    public function isPublic(): bool
    {
        return $this->visibility === 'public';
    }

    public function isSystem(): bool
    {
        return $this->visibility === 'system';
    }

    public function activate(): void
    {
        $this->update(['status' => 'active']);
    }

    public function deactivate(): void
    {
        $this->update(['status' => 'inactive']);
    }

    public function feature(): void
    {
        $this->update(['is_featured' => true]);
    }

    public function unfeature(): void
    {
        $this->update(['is_featured' => false]);
    }

    public function getDesignConfig(string $key, $default = null)
    {
        return $this->design_config[$key] ?? $default;
    }

    public function setDesignConfig(string $key, $value): void
    {
        $config = $this->design_config ?? [];
        $config[$key] = $value;
        
        $this->update(['design_config' => $config]);
    }

    public function getLayoutConfig(string $key, $default = null)
    {
        return $this->layout_config[$key] ?? $default;
    }

    public function setLayoutConfig(string $key, $value): void
    {
        $config = $this->layout_config ?? [];
        $config[$key] = $value;
        
        $this->update(['layout_config' => $config]);
    }

    public function getDefaultContent(string $key, $default = null)
    {
        return $this->default_content[$key] ?? $default;
    }

    public function setDefaultContent(string $key, $value): void
    {
        $content = $this->default_content ?? [];
        $content[$key] = $value;
        
        $this->update(['default_content' => $content]);
    }

    public function hasTag(string $tag): bool
    {
        return in_array($tag, $this->tags ?? []);
    }

    public function addTag(string $tag): void
    {
        $tags = $this->tags ?? [];
        if (!in_array($tag, $tags)) {
            $tags[] = $tag;
            $this->update(['tags' => $tags]);
        }
    }

    public function removeTag(string $tag): void
    {
        $tags = $this->tags ?? [];
        $tags = array_filter($tags, fn($t) => $t !== $tag);
        $this->update(['tags' => array_values($tags)]);
    }

    public function getPreviewImageUrl(): string
    {
        if (!empty($this->preview_image)) {
            return $this->preview_image;
        }

        // Return default preview image based on category
        return "/images/templates/{$this->category}-default.png";
    }

    public function duplicate(array $overrides = []): self
    {
        $attributes = $this->toArray();
        unset($attributes['template_id'], $attributes['created_at'], $attributes['updated_at']);
        
        $attributes['name'] = 'Copy of ' . $attributes['name'];
        $attributes['slug'] = $attributes['slug'] . '-copy-' . time();
        $attributes['visibility'] = 'private';
        $attributes['is_featured'] = false;
        
        return static::create(array_merge($attributes, $overrides));
    }

    // Category constants
    const CATEGORY_TOAST = 'toast';
    const CATEGORY_CARD = 'card';
    const CATEGORY_BAR = 'bar';
    const CATEGORY_MODAL = 'modal';
    const CATEGORY_POPUP = 'popup';
    const CATEGORY_BANNER = 'banner';
    const CATEGORY_SIDEBAR = 'sidebar';
    const CATEGORY_CORNER = 'corner';

    // Visibility constants
    const VISIBILITY_PUBLIC = 'public';
    const VISIBILITY_PRIVATE = 'private';
    const VISIBILITY_SYSTEM = 'system';

    // Status constants
    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';
    const STATUS_DRAFT = 'draft';

    public static function getAvailableCategories(): array
    {
        return [
            self::CATEGORY_TOAST => 'Toast Notifications',
            self::CATEGORY_CARD => 'Card Notifications',
            self::CATEGORY_BAR => 'Bar Notifications',
            self::CATEGORY_MODAL => 'Modal Notifications',
            self::CATEGORY_POPUP => 'Popup Notifications',
            self::CATEGORY_BANNER => 'Banner Notifications',
            self::CATEGORY_SIDEBAR => 'Sidebar Notifications',
            self::CATEGORY_CORNER => 'Corner Notifications',
        ];
    }

    public static function getAvailableVisibilities(): array
    {
        return [
            self::VISIBILITY_PUBLIC => 'Public (visible to all)',
            self::VISIBILITY_PRIVATE => 'Private (visible to owner only)',
            self::VISIBILITY_SYSTEM => 'System (built-in templates)',
        ];
    }

    public static function getAvailableStatuses(): array
    {
        return [
            self::STATUS_ACTIVE => 'Active',
            self::STATUS_INACTIVE => 'Inactive',
            self::STATUS_DRAFT => 'Draft',
        ];
    }
}