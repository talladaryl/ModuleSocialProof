import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
const ListClientNotifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientNotifications.url(options),
    method: 'get',
})

ListClientNotifications.definition = {
    methods: ["get","head"],
    url: '/client/client-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
ListClientNotifications.url = (options?: RouteQueryOptions) => {
    return ListClientNotifications.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
ListClientNotifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientNotifications.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
ListClientNotifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientNotifications.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
    const ListClientNotificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientNotifications.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
        ListClientNotificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientNotifications.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\ListClientNotifications::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/ListClientNotifications.php:7
 * @route '/client/client-notifications'
 */
        ListClientNotificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientNotifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientNotifications.form = ListClientNotificationsForm
export default ListClientNotifications