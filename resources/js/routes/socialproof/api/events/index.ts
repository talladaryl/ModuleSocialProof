import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::track
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:19
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
export const track = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(args, options),
    method: 'post',
})

track.definition = {
    methods: ["post"],
    url: '/api/socialproof/widget/{apiKey}/events',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::track
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:19
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
track.url = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return track.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::track
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:19
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
track.post = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::track
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:19
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
    const trackForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: track.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::track
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:19
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
        trackForm.post = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: track.url(args, options),
            method: 'post',
        })
    
    track.form = trackForm
/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
export const index = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/socialproof/widget/{apiKey}/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
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
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
index.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
index.head = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
    const indexForm = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
 */
        indexForm.get = (args: { apiKey: string | number } | [apiKey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\Api\EventController::index
 * @see packages/socialproof/src/Http/Controllers/Api/EventController.php:46
 * @route '/api/socialproof/widget/{apiKey}/events'
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
const events = {
    track: Object.assign(track, track),
index: Object.assign(index, index),
}

export default events