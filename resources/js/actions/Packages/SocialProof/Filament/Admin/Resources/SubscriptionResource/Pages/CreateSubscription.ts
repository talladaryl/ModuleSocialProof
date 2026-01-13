import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
const CreateSubscription = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSubscription.url(options),
    method: 'get',
})

CreateSubscription.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/subscriptions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
CreateSubscription.url = (options?: RouteQueryOptions) => {
    return CreateSubscription.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
CreateSubscription.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSubscription.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
CreateSubscription.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSubscription.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
    const CreateSubscriptionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateSubscription.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
        CreateSubscriptionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateSubscription.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\CreateSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/CreateSubscription.php:7
 * @route '/admin/socialproof/subscriptions/create'
 */
        CreateSubscriptionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateSubscription.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateSubscription.form = CreateSubscriptionForm
export default CreateSubscription