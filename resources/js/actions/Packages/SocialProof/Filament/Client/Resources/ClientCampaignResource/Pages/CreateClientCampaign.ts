import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
const CreateClientCampaign = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientCampaign.url(options),
    method: 'get',
})

CreateClientCampaign.definition = {
    methods: ["get","head"],
    url: '/client/client-campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
CreateClientCampaign.url = (options?: RouteQueryOptions) => {
    return CreateClientCampaign.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
CreateClientCampaign.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientCampaign.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
CreateClientCampaign.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientCampaign.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
    const CreateClientCampaignForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientCampaign.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
        CreateClientCampaignForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientCampaign.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\CreateClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/CreateClientCampaign.php:7
 * @route '/client/client-campaigns/create'
 */
        CreateClientCampaignForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientCampaign.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientCampaign.form = CreateClientCampaignForm
export default CreateClientCampaign