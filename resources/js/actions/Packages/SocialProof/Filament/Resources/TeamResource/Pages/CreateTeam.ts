import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
const CreateTeam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam.url(options),
    method: 'get',
})

CreateTeam.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/teams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
CreateTeam.url = (options?: RouteQueryOptions) => {
    return CreateTeam.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
CreateTeam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeam.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
CreateTeam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeam.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
    const CreateTeamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateTeam.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
        CreateTeamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTeam.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\CreateTeam::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/CreateTeam.php:7
 * @route '/socialproof-admin/teams/create'
 */
        CreateTeamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTeam.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateTeam.form = CreateTeamForm
export default CreateTeam