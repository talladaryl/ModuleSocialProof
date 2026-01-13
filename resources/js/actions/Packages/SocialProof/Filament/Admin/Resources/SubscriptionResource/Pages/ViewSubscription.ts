import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
const ViewSubscription = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSubscription.url(args, options),
    method: 'get',
})

ViewSubscription.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/subscriptions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
ViewSubscription.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return ViewSubscription.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
ViewSubscription.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSubscription.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
ViewSubscription.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSubscription.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
    const ViewSubscriptionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewSubscription.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
        ViewSubscriptionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewSubscription.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages\ViewSubscription::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SubscriptionResource/Pages/ViewSubscription.php:7
 * @route '/admin/socialproof/subscriptions/{record}'
 */
        ViewSubscriptionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewSubscription.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewSubscription.form = ViewSubscriptionForm
export default ViewSubscription