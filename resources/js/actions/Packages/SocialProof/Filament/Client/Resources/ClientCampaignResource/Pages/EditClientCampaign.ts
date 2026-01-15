import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
const EditClientCampaign = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientCampaign.url(args, options),
    method: 'get',
})

EditClientCampaign.definition = {
    methods: ["get","head"],
    url: '/client/client-campaigns/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
EditClientCampaign.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientCampaign.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
EditClientCampaign.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientCampaign.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
EditClientCampaign.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientCampaign.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
    const EditClientCampaignForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientCampaign.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
        EditClientCampaignForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientCampaign.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages\EditClientCampaign::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientCampaignResource/Pages/EditClientCampaign.php:7
 * @route '/client/client-campaigns/{record}/edit'
 */
        EditClientCampaignForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientCampaign.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientCampaign.form = EditClientCampaignForm
export default EditClientCampaign