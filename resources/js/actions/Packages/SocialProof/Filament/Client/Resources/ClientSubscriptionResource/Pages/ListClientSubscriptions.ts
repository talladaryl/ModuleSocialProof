import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
const ListClientSubscriptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientSubscriptions.url(options),
    method: 'get',
})

ListClientSubscriptions.definition = {
    methods: ["get","head"],
    url: '/client/client-subscriptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
ListClientSubscriptions.url = (options?: RouteQueryOptions) => {
    return ListClientSubscriptions.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
ListClientSubscriptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientSubscriptions.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
ListClientSubscriptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientSubscriptions.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
    const ListClientSubscriptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientSubscriptions.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
        ListClientSubscriptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientSubscriptions.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ListClientSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ListClientSubscriptions.php:7
 * @route '/client/client-subscriptions'
 */
        ListClientSubscriptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientSubscriptions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientSubscriptions.form = ListClientSubscriptionsForm
export default ListClientSubscriptions