import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
const ViewClientSite = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientSite.url(args, options),
    method: 'get',
})

ViewClientSite.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
ViewClientSite.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientSite.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
ViewClientSite.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientSite.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
ViewClientSite.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientSite.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
    const ViewClientSiteForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientSite.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
        ViewClientSiteForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientSite.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
        ViewClientSiteForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientSite.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientSite.form = ViewClientSiteForm
export default ViewClientSite