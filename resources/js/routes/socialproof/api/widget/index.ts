import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
export const config = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: config.url(args, options),
    method: 'get',
})

config.definition = {
    methods: ["get","head"],
    url: '/api/socialproof/widget/{apiKey}/config',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
config.url = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return config.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
config.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: config.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
config.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: config.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
    const configForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: config.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
        configForm.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: config.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::config
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:16
 * @route '/api/socialproof/widget/{apiKey}/config'
 */
        configForm.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: config.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    config.form = configForm
/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
export const stats = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/socialproof/widget/{apiKey}/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
stats.url = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stats.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
stats.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
stats.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
    const statsForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stats.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
        statsForm.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\Api\WidgetController::stats
 * @see packages/socialproof/src/Http/Controllers/Api/WidgetController.php:29
 * @route '/api/socialproof/widget/{apiKey}/stats'
 */
        statsForm.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stats.form = statsForm
const widget = {
    config: Object.assign(config, config),
stats: Object.assign(stats, stats),
}

export default widget