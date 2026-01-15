import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
const CreateClientApiKey = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientApiKey.url(options),
    method: 'get',
})

CreateClientApiKey.definition = {
    methods: ["get","head"],
    url: '/client/client-api-keys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
CreateClientApiKey.url = (options?: RouteQueryOptions) => {
    return CreateClientApiKey.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
CreateClientApiKey.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientApiKey.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
CreateClientApiKey.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientApiKey.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
    const CreateClientApiKeyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientApiKey.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
        CreateClientApiKeyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientApiKey.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages\CreateClientApiKey::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientApiKeyResource/Pages/CreateClientApiKey.php:7
 * @route '/client/client-api-keys/create'
 */
        CreateClientApiKeyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientApiKey.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientApiKey.form = CreateClientApiKeyForm
export default CreateClientApiKey