<?php

namespace Packages\SocialProof\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Packages\SocialProof\Models\NotificationExtended;

class NotificationExtendedPolicy
{
    use HandlesAuthorization;

    public function viewAny($user): bool
    {
        return true;
    }

    public function view($user, NotificationExtended $notification): bool
    {
        return $user->id === $notification->user_id;
    }

    public function create($user): bool
    {
        return true;
    }

    public function update($user, NotificationExtended $notification): bool
    {
        return $user->id === $notification->user_id;
    }

    public function delete($user, NotificationExtended $notification): bool
    {
        return $user->id === $notification->user_id;
    }

    public function restore($user, NotificationExtended $notification): bool
    {
        return $user->id === $notification->user_id;
    }

    public function forceDelete($user, NotificationExtended $notification): bool
    {
        return $user->id === $notification->user_id;
    }
}