import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
const ListTrackNotifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTrackNotifications.url(options),
    method: 'get',
})

ListTrackNotifications.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/track-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
ListTrackNotifications.url = (options?: RouteQueryOptions) => {
    return ListTrackNotifications.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
ListTrackNotifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTrackNotifications.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
ListTrackNotifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTrackNotifications.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
    const ListTrackNotificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListTrackNotifications.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
        ListTrackNotificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTrackNotifications.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
        ListTrackNotificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTrackNotifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListTrackNotifications.form = ListTrackNotificationsForm
export default ListTrackNotifications