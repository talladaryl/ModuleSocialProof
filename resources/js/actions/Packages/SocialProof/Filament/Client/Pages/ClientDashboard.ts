import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
const ClientDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientDashboard.url(options),
    method: 'get',
})

ClientDashboard.definition = {
    methods: ["get","head"],
    url: '/client',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
ClientDashboard.url = (options?: RouteQueryOptions) => {
    return ClientDashboard.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
ClientDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientDashboard.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
ClientDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClientDashboard.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
    const ClientDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ClientDashboard.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
        ClientDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientDashboard.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
        ClientDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ClientDashboard.form = ClientDashboardForm
export default ClientDashboard