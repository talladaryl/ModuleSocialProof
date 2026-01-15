import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
const EditClientSite = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientSite.url(args, options),
    method: 'get',
})

EditClientSite.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
EditClientSite.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientSite.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
EditClientSite.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientSite.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
EditClientSite.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientSite.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
    const EditClientSiteForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientSite.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
        EditClientSiteForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientSite.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
        EditClientSiteForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientSite.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientSite.form = EditClientSiteForm
export default EditClientSite