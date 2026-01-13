import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
const ViewTeam = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam.url(args, options),
    method: 'get',
})

ViewTeam.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/teams/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
ViewTeam.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTeam.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
ViewTeam.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTeam.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
ViewTeam.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTeam.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
    const ViewTeamForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewTeam.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
        ViewTeamForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTeam.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages\ViewTeam::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamResource/Pages/ViewTeam.php:7
 * @route '/admin/socialproof/teams/{record}'
 */
        ViewTeamForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTeam.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewTeam.form = ViewTeamForm
export default ViewTeam