import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
const ViewTrackNotification = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTrackNotification.url(args, options),
    method: 'get',
})

ViewTrackNotification.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/track-notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
ViewTrackNotification.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTrackNotification.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
ViewTrackNotification.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTrackNotification.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
ViewTrackNotification.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTrackNotification.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
    const ViewTrackNotificationForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewTrackNotification.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
        ViewTrackNotificationForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTrackNotification.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
        ViewTrackNotificationForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTrackNotification.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewTrackNotification.form = ViewTrackNotificationForm
export default ViewTrackNotification