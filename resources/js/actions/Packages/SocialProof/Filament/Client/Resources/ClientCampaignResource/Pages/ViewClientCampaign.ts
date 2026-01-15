import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
const ViewClientCampaign = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientCampaign.url(args, options),
    method: 'get',
})

ViewClientCampaign.definition = {
    methods: ["get","head"],
    url: '/client/client-campaigns/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
ViewClientCampaign.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientCampaign.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
ViewClientCampaign.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientCampaign.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
ViewClientCampaign.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientCampaign.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
    const ViewClientCampaignForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientCampaign.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
        ViewClientCampaignForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientCampaign.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\ViewClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/ViewClientCampaign.php:7
 * @route '/client/client-campaigns/{record}'
 */
        ViewClientCampaignForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientCampaign.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientCampaign.form = ViewClientCampaignForm
export default ViewClientCampaign