import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
const ViewNotificationExtended = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotificationExtended.url(args, options),
    method: 'get',
})

ViewNotificationExtended.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/notification-extendeds/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
ViewNotificationExtended.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewNotificationExtended.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
ViewNotificationExtended.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewNotificationExtended.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
ViewNotificationExtended.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewNotificationExtended.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
    const ViewNotificationExtendedForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewNotificationExtended.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
        ViewNotificationExtendedForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewNotificationExtended.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ViewNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ViewNotificationExtended.php:7
 * @route '/socialproof-admin/notification-extendeds/{record}'
 */
        ViewNotificationExtendedForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewNotificationExtended.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewNotificationExtended.form = ViewNotificationExtendedForm
export default ViewNotificationExtended