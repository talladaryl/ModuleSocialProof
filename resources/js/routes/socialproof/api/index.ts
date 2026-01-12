import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import widget from './widget'
import events from './events'
import notifications1ce82a from './notifications'
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
export const notifications = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(args, options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/api/socialproof/widget/{apiKey}/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
notifications.url = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    apiKey: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        apiKey: args.apiKey,
                }

    return notifications.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
notifications.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
notifications.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
    const notificationsForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notifications.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
        notificationsForm.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::notifications
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
        notificationsForm.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notifications.form = notificationsForm
const api = {
    widget: Object.assign(widget, widget),
events: Object.assign(events, events),
notifications: Object.assign(notifications, notifications1ce82a),
}

export default api