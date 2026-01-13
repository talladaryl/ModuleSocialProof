import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
const CreateNotificationExtended = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationExtended.url(options),
    method: 'get',
})

CreateNotificationExtended.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/notification-extendeds/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
CreateNotificationExtended.url = (options?: RouteQueryOptions) => {
    return CreateNotificationExtended.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
CreateNotificationExtended.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationExtended.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
CreateNotificationExtended.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationExtended.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
    const CreateNotificationExtendedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateNotificationExtended.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
        CreateNotificationExtendedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateNotificationExtended.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages\CreateNotificationExtended::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationExtendedResource/Pages/CreateNotificationExtended.php:7
 * @route '/admin/socialproof/notification-extendeds/create'
 */
        CreateNotificationExtendedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateNotificationExtended.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateNotificationExtended.form = CreateNotificationExtendedForm
export default CreateNotificationExtended