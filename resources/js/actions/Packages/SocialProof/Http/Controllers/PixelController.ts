import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
export const index = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/pixel/{pixel_key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
index.url = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pixel_key: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pixel_key: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pixel_key: args.pixel_key,
                }

    return index.definition.url
            .replace('{pixel_key}', parsedArgs.pixel_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
index.get = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
index.head = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
    const indexForm = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
        indexForm.get = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::index
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
        indexForm.head = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\PixelController::track
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:75
 * @route '/socialproof/pixel/track'
 */
export const track = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(options),
    method: 'post',
})

track.definition = {
    methods: ["post"],
    url: '/socialproof/pixel/track',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::track
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:75
 * @route '/socialproof/pixel/track'
 */
track.url = (options?: RouteQueryOptions) => {
    return track.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::track
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:75
 * @route '/socialproof/pixel/track'
 */
track.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::track
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:75
 * @route '/socialproof/pixel/track'
 */
    const trackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: track.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::track
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:75
 * @route '/socialproof/pixel/track'
 */
        trackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: track.url(options),
            method: 'post',
        })
    
    track.form = trackForm
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::conversion
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:112
 * @route '/socialproof/pixel/conversion'
 */
export const conversion = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: conversion.url(options),
    method: 'post',
})

conversion.definition = {
    methods: ["post"],
    url: '/socialproof/pixel/conversion',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::conversion
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:112
 * @route '/socialproof/pixel/conversion'
 */
conversion.url = (options?: RouteQueryOptions) => {
    return conversion.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::conversion
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:112
 * @route '/socialproof/pixel/conversion'
 */
conversion.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: conversion.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::conversion
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:112
 * @route '/socialproof/pixel/conversion'
 */
    const conversionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: conversion.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::conversion
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:112
 * @route '/socialproof/pixel/conversion'
 */
        conversionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: conversion.url(options),
            method: 'post',
        })
    
    conversion.form = conversionForm
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::webhook
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:148
 * @route '/socialproof/pixel/{pixel_key}/webhook'
 */
export const webhook = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(args, options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/socialproof/pixel/{pixel_key}/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::webhook
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:148
 * @route '/socialproof/pixel/{pixel_key}/webhook'
 */
webhook.url = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pixel_key: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pixel_key: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pixel_key: args.pixel_key,
                }

    return webhook.definition.url
            .replace('{pixel_key}', parsedArgs.pixel_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::webhook
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:148
 * @route '/socialproof/pixel/{pixel_key}/webhook'
 */
webhook.post = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::webhook
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:148
 * @route '/socialproof/pixel/{pixel_key}/webhook'
 */
    const webhookForm = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: webhook.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::webhook
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:148
 * @route '/socialproof/pixel/{pixel_key}/webhook'
 */
        webhookForm.post = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: webhook.url(args, options),
            method: 'post',
        })
    
    webhook.form = webhookForm
const PixelController = { index, track, conversion, webhook }

export default PixelController