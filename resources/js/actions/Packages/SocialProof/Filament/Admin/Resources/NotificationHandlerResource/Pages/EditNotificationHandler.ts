import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
const EditNotificationHandler = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationHandler.url(args, options),
    method: 'get',
})

EditNotificationHandler.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/notification-handlers/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
EditNotificationHandler.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditNotificationHandler.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
EditNotificationHandler.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditNotificationHandler.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
EditNotificationHandler.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditNotificationHandler.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
    const EditNotificationHandlerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditNotificationHandler.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
        EditNotificationHandlerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditNotificationHandler.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages\EditNotificationHandler::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/NotificationHandlerResource/Pages/EditNotificationHandler.php:7
 * @route '/admin/socialproof/notification-handlers/{record}/edit'
 */
        EditNotificationHandlerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditNotificationHandler.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditNotificationHandler.form = EditNotificationHandlerForm
export default EditNotificationHandler