<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamMember extends Model
{
    use SoftDeletes;

    protected $table = 'sp_team_members';
    protected $primaryKey = 'member_id';

    protected $fillable = [
        'team_id',
        'client_id',
        'email',
        'role',
        'permissions',
        'site_access',
        'status',
        'invitation_token',
        'invited_at',
        'joined_at',
        'invitation_expires_at',
        'invited_by',
        'invitation_message',
        'last_activity_at',
    ];

    protected $casts = [
        'permissions' => 'array',
        'site_access' => 'array',
        'invited_at' => 'datetime',
        'joined_at' => 'datetime',
        'invitation_expires_at' => 'datetime',
        'last_activity_at' => 'datetime',
    ];

    // Relations
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'team_id', 'team_id');
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function invitedBy(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'invited_by', 'client_id');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', self::STATUS_ACTIVE);
    }

    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeByRole($query, string $role)
    {
        return $query->where('role', $role);
    }

    public function scopeForTeam($query, $teamId)
    {
        return $query->where('team_id', $teamId);
    }

    // Helper methods
    public function isActive(): bool
    {
        return $this->status === self::STATUS_ACTIVE;
    }

    public function isPending(): bool
    {
        return $this->status === self::STATUS_PENDING;
    }

    public function isInactive(): bool
    {
        return $this->status === self::STATUS_INACTIVE;
    }

    public function isDeclined(): bool
    {
        return $this->status === self::STATUS_DECLINED;
    }

    public function activate(): void
    {
        $this->update([
            'status' => self::STATUS_ACTIVE,
            'joined_at' => now(),
        ]);
    }

    public function deactivate(): void
    {
        $this->update(['status' => self::STATUS_INACTIVE]);
    }

    public function decline(): void
    {
        $this->update(['status' => self::STATUS_DECLINED]);
    }

    public function hasPermission(string $permission): bool
    {
        if (empty($this->permissions)) {
            return false;
        }

        return in_array($permission, $this->permissions) || in_array('*', $this->permissions);
    }

    public function canAccessSite(int $siteId): bool
    {
        if (empty($this->site_access)) {
            return true; // Access to all sites
        }

        return in_array($siteId, $this->site_access);
    }

    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }

    public function isManager(): bool
    {
        return $this->role === self::ROLE_MANAGER;
    }

    public function isEditor(): bool
    {
        return $this->role === self::ROLE_EDITOR;
    }

    public function isViewer(): bool
    {
        return $this->role === self::ROLE_VIEWER;
    }

    public function updateLastActivity(): void
    {
        $this->update(['last_activity_at' => now()]);
    }

    public function generateInvitationToken(): string
    {
        $token = bin2hex(random_bytes(32));
        $this->update([
            'invitation_token' => $token,
            'invitation_expires_at' => now()->addDays(7),
        ]);

        return $token;
    }

    public function isInvitationExpired(): bool
    {
        return $this->invitation_expires_at && $this->invitation_expires_at->isPast();
    }

    // Role constants
    const ROLE_ADMIN = 'admin';
    const ROLE_MANAGER = 'manager';
    const ROLE_EDITOR = 'editor';
    const ROLE_VIEWER = 'viewer';

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';
    const STATUS_DECLINED = 'declined';

    public static function getAvailableRoles(): array
    {
        return [
            self::ROLE_ADMIN => 'Administrator',
            self::ROLE_MANAGER => 'Manager',
            self::ROLE_EDITOR => 'Editor',
            self::ROLE_VIEWER => 'Viewer',
        ];
    }

    public static function getAvailableStatuses(): array
    {
        return [
            self::STATUS_PENDING => 'Pending',
            self::STATUS_ACTIVE => 'Active',
            self::STATUS_INACTIVE => 'Inactive',
            self::STATUS_DECLINED => 'Declined',
        ];
    }

    public static function getDefaultPermissions(string $role): array
    {
        return match ($role) {
            self::ROLE_ADMIN => ['*'],
            self::ROLE_MANAGER => ['read', 'write', 'manage_team'],
            self::ROLE_EDITOR => ['read', 'write'],
            self::ROLE_VIEWER => ['read'],
            default => ['read'],
        };
    }
}