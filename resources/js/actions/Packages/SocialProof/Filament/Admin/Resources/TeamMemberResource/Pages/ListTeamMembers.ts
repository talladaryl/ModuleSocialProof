import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
const ListTeamMembers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamMembers.url(options),
    method: 'get',
})

ListTeamMembers.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
ListTeamMembers.url = (options?: RouteQueryOptions) => {
    return ListTeamMembers.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
ListTeamMembers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeamMembers.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
ListTeamMembers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeamMembers.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
    const ListTeamMembersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListTeamMembers.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
        ListTeamMembersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTeamMembers.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\ListTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/ListTeamMembers.php:7
 * @route '/admin/socialproof/team-members'
 */
        ListTeamMembersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTeamMembers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListTeamMembers.form = ListTeamMembersForm
export default ListTeamMembers