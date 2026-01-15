import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
const ClientBilling = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientBilling.url(options),
    method: 'get',
})

ClientBilling.definition = {
    methods: ["get","head"],
    url: '/client/client-billing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
ClientBilling.url = (options?: RouteQueryOptions) => {
    return ClientBilling.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
ClientBilling.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ClientBilling.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
ClientBilling.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ClientBilling.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
    const ClientBillingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ClientBilling.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
        ClientBillingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientBilling.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
        ClientBillingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ClientBilling.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ClientBilling.form = ClientBillingForm
export default ClientBilling