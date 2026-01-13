import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
const ListApiKeys = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListApiKeys.url(options),
    method: 'get',
})

ListApiKeys.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
ListApiKeys.url = (options?: RouteQueryOptions) => {
    return ListApiKeys.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
ListApiKeys.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListApiKeys.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
ListApiKeys.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListApiKeys.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
    const ListApiKeysForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListApiKeys.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
        ListApiKeysForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListApiKeys.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
        ListApiKeysForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListApiKeys.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListApiKeys.form = ListApiKeysForm
export default ListApiKeys