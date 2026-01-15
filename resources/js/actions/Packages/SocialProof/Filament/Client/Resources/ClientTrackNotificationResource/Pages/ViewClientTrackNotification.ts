import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
const ViewClientTrackNotification = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientTrackNotification.url(args, options),
    method: 'get',
})

ViewClientTrackNotification.definition = {
    methods: ["get","head"],
    url: '/client/client-track-notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
ViewClientTrackNotification.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientTrackNotification.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
ViewClientTrackNotification.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientTrackNotification.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
ViewClientTrackNotification.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientTrackNotification.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
    const ViewClientTrackNotificationForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientTrackNotification.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
        ViewClientTrackNotificationForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientTrackNotification.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ViewClientTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ViewClientTrackNotification.php:7
 * @route '/client/client-track-notifications/{record}'
 */
        ViewClientTrackNotificationForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientTrackNotification.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientTrackNotification.form = ViewClientTrackNotificationForm
export default ViewClientTrackNotification