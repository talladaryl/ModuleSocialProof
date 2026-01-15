import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
const ClientAnalytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientAnalytics.url(options),
    method: 'get',
})

ClientAnalytics.definition = {
    methods: ["get","head"],
    url: '/client/client-analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
ClientAnalytics.url = (options?: RouteQueryOptions) => {
    return ClientAnalytics.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
ClientAnalytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientAnalytics.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
ClientAnalytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClientAnalytics.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
    const ClientAnalyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ClientAnalytics.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
        ClientAnalyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientAnalytics.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
        ClientAnalyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientAnalytics.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ClientAnalytics.form = ClientAnalyticsForm
export default ClientAnalytics