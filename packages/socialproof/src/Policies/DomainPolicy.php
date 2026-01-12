<?php

namespace Packages\SocialProof\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Packages\SocialProof\Models\Domain;

class DomainPolicy
{
    use HandlesAuthorization;

    public function viewAny($user): bool
    {
        return true;
    }

    public function view($user, Domain $domain): bool
    {
        return $user->id === $domain->user_id;
    }

    public function create($user): bool
    {
        return true;
    }

    public function update($user, Domain $domain): bool
    {
        return $user->id === $domain->user_id;
    }

    public function delete($user, Domain $domain): bool
    {
        return $user->id === $domain->user_id;
    }

    public function restore($user, Domain $domain): bool
    {
        return $user->id === $domain->user_id;
    }

    public function forceDelete($user, Domain $domain): bool
    {
        return $user->id === $domain->user_id;
    }
}