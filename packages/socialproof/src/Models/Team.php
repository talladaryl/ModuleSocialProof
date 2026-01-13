<?php

namespace Packages\SocialProof\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Models\Plan;

class Team extends Model
{
    use SoftDeletes;

    protected $table = 'sp_teams';
    protected $primaryKey = 'id';
    //protected $primaryKey = 'team_id';

    protected $fillable = [
        'client_id',
        'plan_id',
        'name',
        'slug',
        'description',
        'settings',
        'subscription_ends_at',
        'trial_ends_at',
        'is_active',
    ];

    protected $casts = [
        'settings' => 'array',
        'is_active' => 'boolean',
        'subscription_ends_at' => 'datetime',
        'trial_ends_at' => 'datetime',
    ];

    // Relations
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'client_id');
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'plan_id');
    }

    public function members(): HasMany
    {
        return $this->hasMany(TeamMember::class, 'team_id', 'team_id');
    }

    public function sites(): HasMany
    {
        return $this->hasMany(Site::class, 'client_id', 'client_id');
    }

    public function activeMembers(): HasMany
    {
        return $this->members()->where('status', 'active');
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeForClient($query, $clientId)
    {
        return $query->where('client_id', $clientId);
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

    public function addMember(string $email, string $role = TeamMember::ROLE_VIEWER): TeamMember
    {
        return $this->members()->create([
            'client_id' => $this->client_id,
            'email' => $email,
            'role' => $role,
            'status' => TeamMember::STATUS_PENDING,
            'invited_at' => now(),
        ]);
    }

    public function removeMember(TeamMember $member): bool
    {
        return $member->delete();
    }

    public function getMemberByEmail(string $email): ?TeamMember
    {
        return $this->members()->where('email', $email)->first();
    }

    public function hasMember(string $email): bool
    {
        return $this->members()->where('email', $email)->exists();
    }

    public function getMembersCount(): int
    {
        return $this->members()->count();
    }

    public function getActiveMembersCount(): int
    {
        return $this->activeMembers()->count();
    }

    public function getMembersByRole(string $role): \Illuminate\Database\Eloquent\Collection
    {
        return $this->members()->where('role', $role)->get();
    }

    public function getAdminsCount(): int
    {
        return $this->members()->where('role', TeamMember::ROLE_ADMIN)->count();
    }

    public function getManagersCount(): int
    {
        return $this->members()->where('role', TeamMember::ROLE_MANAGER)->count();
    }

    public function getViewersCount(): int
    {
        return $this->members()->where('role', TeamMember::ROLE_VIEWER)->count();
    }

    public function canAddMember(): bool
    {
        $client = $this->client;
        if (!$client) return false;

        $plan = $client->getCurrentPlan();
        if (!$plan) return false;

        if ($plan->max_team_members === -1) return true;

        return $this->getMembersCount() < $plan->max_team_members;
    }

    // Settings helpers
    public function getSetting(string $key, $default = null)
    {
        return $this->settings[$key] ?? $default;
    }

    public function setSetting(string $key, $value): void
    {
        $settings = $this->settings ?? [];
        $settings[$key] = $value;
        
        $this->update(['settings' => $settings]);
    }
}
