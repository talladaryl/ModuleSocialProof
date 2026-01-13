import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
const CreateNotificationHandler = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationHandler.url(options),
    method: 'get',
})

CreateNotificationHandler.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/notification-handlers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
CreateNotificationHandler.url = (options?: RouteQueryOptions) => {
    return CreateNotificationHandler.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
CreateNotificationHandler.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateNotificationHandler.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
CreateNotificationHandler.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateNotificationHandler.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
    const CreateNotificationHandlerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateNotificationHandler.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
        CreateNotificationHandlerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateNotificationHandler.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\CreateNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/CreateNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/create'
 */
        CreateNotificationHandlerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateNotificationHandler.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateNotificationHandler.form = CreateNotificationHandlerForm
export default CreateNotificationHandler