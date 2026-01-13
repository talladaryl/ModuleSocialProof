import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
const CreateClient = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})

CreateClient.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
CreateClient.url = (options?: RouteQueryOptions) => {
    return CreateClient.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
CreateClient.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClient.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
CreateClient.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClient.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
    const CreateClientForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClient.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
        CreateClientForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClient.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\CreateClient::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/CreateClient.php:7
 * @route '/admin/socialproof/clients/create'
 */
        CreateClientForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClient.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClient.form = CreateClientForm
export default CreateClient