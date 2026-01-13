import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/track-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ListTrackNotifications::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ListTrackNotifications.php:7
 * @route '/admin/socialproof/track-notifications'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/track-notifications/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages\ViewTrackNotification::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TrackNotificationResource/Pages/ViewTrackNotification.php:7
 * @route '/admin/socialproof/track-notifications/{record}'
 */
        viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
const trackNotifications = {
    index: Object.assign(index, index),
view: Object.assign(view, view),
}

export default trackNotifications