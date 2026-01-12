import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::displayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
export const displayed = (args: { apiKey: string | number, notification: number | { id: number } } | [apiKey: string | number, notification: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: displayed.url(args, options),
    method: 'post',
})

displayed.definition = {
    methods: ["post"],
    url: '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::displayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
displayed.url = (args: { apiKey: string | number, notification: number | { id: number } } | [apiKey: string | number, notification: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    apiKey: args[0],
                    notification: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        apiKey: args.apiKey,
                                notification: typeof args.notification === 'object'
                ? args.notification.id
                : args.notification,
                }

    return displayed.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::displayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
displayed.post = (args: { apiKey: string | number, notification: number | { id: number } } | [apiKey: string | number, notification: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: displayed.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::displayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
    const displayedForm = (args: { apiKey: string | number, notification: number | { id: number } } | [apiKey: string | number, notification: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: displayed.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::displayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
        displayedForm.post = (args: { apiKey: string | number, notification: number | { id: number } } | [apiKey: string | number, notification: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: displayed.url(args, options),
            method: 'post',
        })
    
    displayed.form = displayedForm
const notifications = {
    displayed: Object.assign(displayed, displayed),
}

export default notifications