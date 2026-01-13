import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
const EditApiKey = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditApiKey.url(args, options),
    method: 'get',
})

EditApiKey.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
EditApiKey.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditApiKey.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
EditApiKey.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditApiKey.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
EditApiKey.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditApiKey.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
    const EditApiKeyForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditApiKey.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
        EditApiKeyForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditApiKey.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
        EditApiKeyForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditApiKey.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditApiKey.form = EditApiKeyForm
export default EditApiKey