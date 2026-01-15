import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
const ListClientTrackNotifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTrackNotifications.url(options),
    method: 'get',
})

ListClientTrackNotifications.definition = {
    methods: ["get","head"],
    url: '/client/client-track-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
ListClientTrackNotifications.url = (options?: RouteQueryOptions) => {
    return ListClientTrackNotifications.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
ListClientTrackNotifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTrackNotifications.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
ListClientTrackNotifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientTrackNotifications.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
    const ListClientTrackNotificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientTrackNotifications.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
        ListClientTrackNotificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTrackNotifications.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages\ListClientTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTrackNotificationResource/Pages/ListClientTrackNotifications.php:7
 * @route '/client/client-track-notifications'
 */
        ListClientTrackNotificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTrackNotifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientTrackNotifications.form = ListClientTrackNotificationsForm
export default ListClientTrackNotifications