import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
const ViewCampaign = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCampaign.url(args, options),
    method: 'get',
})

ViewCampaign.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/campaigns/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
ViewCampaign.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewCampaign.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
ViewCampaign.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCampaign.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
ViewCampaign.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewCampaign.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
    const ViewCampaignForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewCampaign.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
        ViewCampaignForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewCampaign.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages\ViewCampaign::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/CampaignResource/Pages/ViewCampaign.php:7
 * @route '/admin/socialproof/campaigns/{record}'
 */
        ViewCampaignForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewCampaign.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewCampaign.form = ViewCampaignForm
export default ViewCampaign