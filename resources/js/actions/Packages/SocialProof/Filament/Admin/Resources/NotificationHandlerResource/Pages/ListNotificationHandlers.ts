import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
const ListNotificationHandlers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationHandlers.url(options),
    method: 'get',
})

ListNotificationHandlers.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/notification-handlers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
ListNotificationHandlers.url = (options?: RouteQueryOptions) => {
    return ListNotificationHandlers.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
ListNotificationHandlers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationHandlers.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
ListNotificationHandlers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationHandlers.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
    const ListNotificationHandlersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListNotificationHandlers.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
        ListNotificationHandlersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListNotificationHandlers.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\ListNotificationHandlers::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/ListNotificationHandlers.php:7
 * @route '/admin/socialproof/notification-handlers'
 */
        ListNotificationHandlersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListNotificationHandlers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListNotificationHandlers.form = ListNotificationHandlersForm
export default ListNotificationHandlers