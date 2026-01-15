import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
const CreateClientSite = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientSite.url(options),
    method: 'get',
})

CreateClientSite.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
CreateClientSite.url = (options?: RouteQueryOptions) => {
    return CreateClientSite.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
CreateClientSite.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientSite.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
CreateClientSite.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientSite.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
    const CreateClientSiteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientSite.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
        CreateClientSiteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientSite.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
        CreateClientSiteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientSite.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientSite.form = CreateClientSiteForm
export default CreateClientSite