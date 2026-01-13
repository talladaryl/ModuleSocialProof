import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
        editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const teamMembers = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
edit: Object.assign(edit, edit),
}

export default teamMembers