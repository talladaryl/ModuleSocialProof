import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
const ListClientApiKeys = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientApiKeys.url(options),
    method: 'get',
})

ListClientApiKeys.definition = {
    methods: ["get","head"],
    url: '/client/client-api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
ListClientApiKeys.url = (options?: RouteQueryOptions) => {
    return ListClientApiKeys.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
ListClientApiKeys.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientApiKeys.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
ListClientApiKeys.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientApiKeys.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
    const ListClientApiKeysForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientApiKeys.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
        ListClientApiKeysForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientApiKeys.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\ListClientApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/ListClientApiKeys.php:7
 * @route '/client/client-api-keys'
 */
        ListClientApiKeysForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientApiKeys.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientApiKeys.form = ListClientApiKeysForm
export default ListClientApiKeys