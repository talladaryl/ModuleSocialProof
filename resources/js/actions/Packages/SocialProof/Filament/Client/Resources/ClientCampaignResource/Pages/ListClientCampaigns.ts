import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
const ListClientCampaigns = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientCampaigns.url(options),
    method: 'get',
})

ListClientCampaigns.definition = {
    methods: ["get","head"],
    url: '/client/client-campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
ListClientCampaigns.url = (options?: RouteQueryOptions) => {
    return ListClientCampaigns.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
ListClientCampaigns.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientCampaigns.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
ListClientCampaigns.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientCampaigns.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
    const ListClientCampaignsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientCampaigns.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
        ListClientCampaignsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientCampaigns.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ListClientCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ListClientCampaigns.php:7
 * @route '/client/client-campaigns'
 */
        ListClientCampaignsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientCampaigns.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientCampaigns.form = ListClientCampaignsForm
export default ListClientCampaigns