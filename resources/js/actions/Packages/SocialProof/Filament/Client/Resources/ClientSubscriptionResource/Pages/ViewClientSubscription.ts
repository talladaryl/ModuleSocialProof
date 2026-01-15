import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
const ViewClientSubscription = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientSubscription.url(args, options),
    method: 'get',
})

ViewClientSubscription.definition = {
    methods: ["get","head"],
    url: '/client/client-subscriptions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
ViewClientSubscription.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientSubscription.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
ViewClientSubscription.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientSubscription.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
ViewClientSubscription.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientSubscription.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
    const ViewClientSubscriptionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientSubscription.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
        ViewClientSubscriptionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientSubscription.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages\ViewClientSubscription::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSubscriptionResource/Pages/ViewClientSubscription.php:7
 * @route '/client/client-subscriptions/{record}'
 */
        ViewClientSubscriptionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientSubscription.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientSubscription.form = ViewClientSubscriptionForm
export default ViewClientSubscription