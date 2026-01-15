import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
const ListClientSites = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientSites.url(options),
    method: 'get',
})

ListClientSites.definition = {
    methods: ["get","head"],
    url: '/client/client-sites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
ListClientSites.url = (options?: RouteQueryOptions) => {
    return ListClientSites.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
ListClientSites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientSites.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
ListClientSites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientSites.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
    const ListClientSitesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientSites.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
        ListClientSitesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientSites.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
        ListClientSitesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientSites.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientSites.form = ListClientSitesForm
export default ListClientSites