import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
const CreateApiKey = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateApiKey.url(options),
    method: 'get',
})

CreateApiKey.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
CreateApiKey.url = (options?: RouteQueryOptions) => {
    return CreateApiKey.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
CreateApiKey.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateApiKey.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
CreateApiKey.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateApiKey.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
    const CreateApiKeyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateApiKey.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
        CreateApiKeyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateApiKey.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
        CreateApiKeyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateApiKey.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateApiKey.form = CreateApiKeyForm
export default CreateApiKey