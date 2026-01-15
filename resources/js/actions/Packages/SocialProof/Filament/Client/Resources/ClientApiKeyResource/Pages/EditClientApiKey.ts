import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
const EditClientApiKey = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientApiKey.url(args, options),
    method: 'get',
})

EditClientApiKey.definition = {
    methods: ["get","head"],
    url: '/client/client-api-keys/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
EditClientApiKey.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientApiKey.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
EditClientApiKey.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientApiKey.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
EditClientApiKey.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientApiKey.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
    const EditClientApiKeyForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientApiKey.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
        EditClientApiKeyForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientApiKey.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\EditClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/EditClientApiKey.php:7
 * @route '/client/client-api-keys/{record}/edit'
 */
        EditClientApiKeyForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientApiKey.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientApiKey.form = EditClientApiKeyForm
export default EditClientApiKey