import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
const CreateCampaign = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(options),
    method: 'get',
})

CreateCampaign.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
CreateCampaign.url = (options?: RouteQueryOptions) => {
    return CreateCampaign.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
CreateCampaign.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
CreateCampaign.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCampaign.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
    const CreateCampaignForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateCampaign.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
        CreateCampaignForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCampaign.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\CampaignResource\Pages\CreateCampaign::__invoke
 * @see packages/socialproof/src/Filament/Resources/CampaignResource/Pages/CreateCampaign.php:7
 * @route '/socialproof-admin/campaigns/create'
 */
        CreateCampaignForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCampaign.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateCampaign.form = CreateCampaignForm
export default CreateCampaign