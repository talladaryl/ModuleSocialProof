import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
const CreateClientTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientTemplate.url(options),
    method: 'get',
})

CreateClientTemplate.definition = {
    methods: ["get","head"],
    url: '/client/client-templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
CreateClientTemplate.url = (options?: RouteQueryOptions) => {
    return CreateClientTemplate.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
CreateClientTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientTemplate.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
CreateClientTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientTemplate.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
    const CreateClientTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientTemplate.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
        CreateClientTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientTemplate.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\CreateClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/CreateClientTemplate.php:7
 * @route '/client/client-templates/create'
 */
        CreateClientTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientTemplate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientTemplate.form = CreateClientTemplateForm
export default CreateClientTemplate