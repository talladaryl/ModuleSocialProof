<?php

namespace Packages\SocialProof\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Packages\SocialProof\Models\Campaign;

class CampaignPolicy
{
    use HandlesAuthorization;

    public function viewAny($user): bool
    {
        return true;
    }

    public function view($user, Campaign $campaign): bool
    {
        return $user->id === $campaign->user_id;
    }

    public function create($user): bool
    {
        return true;
    }

    public function update($user, Campaign $campaign): bool
    {
        return $user->id === $campaign->user_id;
    }

    public function delete($user, Campaign $campaign): bool
    {
        return $user->id === $campaign->user_id;
    }

    public function restore($user, Campaign $campaign): bool
    {
        return $user->id === $campaign->user_id;
    }

    public function forceDelete($user, Campaign $campaign): bool
    {
        return $user->id === $campaign->user_id;
    }
}