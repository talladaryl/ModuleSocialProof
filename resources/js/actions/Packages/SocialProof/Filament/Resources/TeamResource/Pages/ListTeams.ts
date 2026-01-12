import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
const ListTeams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})

ListTeams.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
ListTeams.url = (options?: RouteQueryOptions) => {
    return ListTeams.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
ListTeams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTeams.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
ListTeams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTeams.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
    const ListTeamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListTeams.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
        ListTeamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTeams.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\TeamResource\Pages\ListTeams::__invoke
 * @see packages/socialproof/src/Filament/Resources/TeamResource/Pages/ListTeams.php:7
 * @route '/socialproof-admin/teams'
 */
        ListTeamsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTeams.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListTeams.form = ListTeamsForm
export default ListTeams