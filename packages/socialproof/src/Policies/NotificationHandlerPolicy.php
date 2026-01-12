<?php

namespace Packages\SocialProof\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Packages\SocialProof\Models\NotificationHandler;

class NotificationHandlerPolicy
{
    use HandlesAuthorization;

    public function viewAny($user): bool
    {
        return true;
    }

    public function view($user, NotificationHandler $handler): bool
    {
        return $user->id === $handler->user_id;
    }

    public function create($user): bool
    {
        return true;
    }

    public function update($user, NotificationHandler $handler): bool
    {
        return $user->id === $handler->user_id;
    }

    public function delete($user, NotificationHandler $handler): bool
    {
        return $user->id === $handler->user_id;
    }

    public function restore($user, NotificationHandler $handler): bool
    {
        return $user->id === $handler->user_id;
    }

    public function forceDelete($user, NotificationHandler $handler): bool
    {
        return $user->id === $handler->user_id;
    }
}