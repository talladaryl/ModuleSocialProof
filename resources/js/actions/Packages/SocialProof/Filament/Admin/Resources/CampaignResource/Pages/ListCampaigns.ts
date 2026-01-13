import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
const ListCampaigns = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(options),
    method: 'get',
})

ListCampaigns.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
ListCampaigns.url = (options?: RouteQueryOptions) => {
    return ListCampaigns.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
ListCampaigns.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
ListCampaigns.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCampaigns.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
    const ListCampaignsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListCampaigns.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
        ListCampaignsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCampaigns.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ListCampaigns::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ListCampaigns.php:7
 * @route '/admin/socialproof/campaigns'
 */
        ListCampaignsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCampaigns.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListCampaigns.form = ListCampaignsForm
export default ListCampaigns