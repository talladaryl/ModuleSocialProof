import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
export const index = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/socialproof/widget/{apiKey}/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
index.url = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
index.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
index.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
    const indexForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
        indexForm.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::index
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:19
 * @route '/api/socialproof/widget/{apiKey}/notifications'
 */
        indexForm.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::markDisplayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
export const markDisplayed = (args: { apiKey: string | number, notification: string | { id: string } } | [apiKey: string | number, notification: string | { id: string } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markDisplayed.url(args, options),
    method: 'post',
})

markDisplayed.definition = {
    methods: ["post"],
    url: '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::markDisplayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
markDisplayed.url = (args: { apiKey: string | number, notification: string | { id: string } } | [apiKey: string | number, notification: string | { id: string } ], options?: RouteQueryOptions) => {
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

    return markDisplayed.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::markDisplayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
markDisplayed.post = (args: { apiKey: string | number, notification: string | { id: string } } | [apiKey: string | number, notification: string | { id: string } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markDisplayed.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::markDisplayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
    const markDisplayedForm = (args: { apiKey: string | number, notification: string | { id: string } } | [apiKey: string | number, notification: string | { id: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markDisplayed.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\NotificationController::markDisplayed
 * @see packages/socialproof/src/Http/Controllers/Api/NotificationController.php:46
 * @route '/api/socialproof/widget/{apiKey}/notifications/{notification}/displayed'
 */
        markDisplayedForm.post = (args: { apiKey: string | number, notification: string | { id: string } } | [apiKey: string | number, notification: string | { id: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markDisplayed.url(args, options),
            method: 'post',
        })
    
    markDisplayed.form = markDisplayedForm
const NotificationController = { index, markDisplayed }

export default NotificationController