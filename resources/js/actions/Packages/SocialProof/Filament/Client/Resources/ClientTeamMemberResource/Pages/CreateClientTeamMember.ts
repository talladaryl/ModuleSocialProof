import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
const CreateClientTeamMember = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientTeamMember.url(options),
    method: 'get',
})

CreateClientTeamMember.definition = {
    methods: ["get","head"],
    url: '/client/client-team-members/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
CreateClientTeamMember.url = (options?: RouteQueryOptions) => {
    return CreateClientTeamMember.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
CreateClientTeamMember.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientTeamMember.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
CreateClientTeamMember.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientTeamMember.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
    const CreateClientTeamMemberForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientTeamMember.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
        CreateClientTeamMemberForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientTeamMember.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\CreateClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/CreateClientTeamMember.php:7
 * @route '/client/client-team-members/create'
 */
        CreateClientTeamMemberForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientTeamMember.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientTeamMember.form = CreateClientTeamMemberForm
export default CreateClientTeamMember