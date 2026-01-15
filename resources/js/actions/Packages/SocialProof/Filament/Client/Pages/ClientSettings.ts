import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
const ClientSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientSettings.url(options),
    method: 'get',
})

ClientSettings.definition = {
    methods: ["get","head"],
    url: '/client/client-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
ClientSettings.url = (options?: RouteQueryOptions) => {
    return ClientSettings.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
ClientSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientSettings.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
ClientSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClientSettings.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
    const ClientSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ClientSettings.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
        ClientSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientSettings.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
        ClientSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientSettings.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ClientSettings.form = ClientSettingsForm
export default ClientSettings