import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
const ListClientTeamMembers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTeamMembers.url(options),
    method: 'get',
})

ListClientTeamMembers.definition = {
    methods: ["get","head"],
    url: '/client/client-team-members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
ListClientTeamMembers.url = (options?: RouteQueryOptions) => {
    return ListClientTeamMembers.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
ListClientTeamMembers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTeamMembers.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
ListClientTeamMembers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientTeamMembers.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
    const ListClientTeamMembersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientTeamMembers.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
        ListClientTeamMembersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTeamMembers.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\ListClientTeamMembers::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/ListClientTeamMembers.php:7
 * @route '/client/client-team-members'
 */
        ListClientTeamMembersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTeamMembers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientTeamMembers.form = ListClientTeamMembersForm
export default ListClientTeamMembers