import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
const ListSubscriptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSubscriptions.url(options),
    method: 'get',
})

ListSubscriptions.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/subscriptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
ListSubscriptions.url = (options?: RouteQueryOptions) => {
    return ListSubscriptions.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
ListSubscriptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSubscriptions.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
ListSubscriptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSubscriptions.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
    const ListSubscriptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListSubscriptions.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
        ListSubscriptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListSubscriptions.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ListSubscriptions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ListSubscriptions.php:7
 * @route '/admin/socialproof/subscriptions'
 */
        ListSubscriptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListSubscriptions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListSubscriptions.form = ListSubscriptionsForm
export default ListSubscriptions