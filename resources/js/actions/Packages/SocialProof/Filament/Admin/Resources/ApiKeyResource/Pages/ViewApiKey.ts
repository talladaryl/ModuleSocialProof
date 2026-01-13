import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
const ViewApiKey = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewApiKey.url(args, options),
    method: 'get',
})

ViewApiKey.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
ViewApiKey.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewApiKey.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
ViewApiKey.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewApiKey.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
ViewApiKey.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewApiKey.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
    const ViewApiKeyForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewApiKey.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
        ViewApiKeyForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewApiKey.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
        ViewApiKeyForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewApiKey.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewApiKey.form = ViewApiKeyForm
export default ViewApiKey