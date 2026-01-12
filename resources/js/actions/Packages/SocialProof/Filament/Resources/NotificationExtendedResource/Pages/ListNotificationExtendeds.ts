import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
const ListNotificationExtendeds = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationExtendeds.url(options),
    method: 'get',
})

ListNotificationExtendeds.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/notification-extendeds',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
ListNotificationExtendeds.url = (options?: RouteQueryOptions) => {
    return ListNotificationExtendeds.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
ListNotificationExtendeds.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListNotificationExtendeds.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
ListNotificationExtendeds.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListNotificationExtendeds.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
    const ListNotificationExtendedsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListNotificationExtendeds.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
        ListNotificationExtendedsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListNotificationExtendeds.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages\ListNotificationExtendeds::__invoke
 * @see packages/socialproof/src/Filament/Resources/NotificationExtendedResource/Pages/ListNotificationExtendeds.php:7
 * @route '/socialproof-admin/notification-extendeds'
 */
        ListNotificationExtendedsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListNotificationExtendeds.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListNotificationExtendeds.form = ListNotificationExtendedsForm
export default ListNotificationExtendeds