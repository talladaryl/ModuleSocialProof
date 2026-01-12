import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import api from './api'
import widgets from './widgets'
import campaigns from './campaigns'
import notifications from './notifications'
import domains from './domains'
import notificationHandlers from './notification-handlers'
import pixel22b03d from './pixel'
/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/socialproof',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::dashboard
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
export const pixel = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pixel.url(args, options),
    method: 'get',
})

pixel.definition = {
    methods: ["get","head"],
    url: '/socialproof/pixel/{pixel_key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
pixel.url = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pixel.definition.url
            .replace('{pixel_key}', parsedArgs.pixel_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
pixel.get = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pixel.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
pixel.head = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pixel.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
    const pixelForm = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pixel.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
        pixelForm.get = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pixel.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\PixelController::pixel
 * @see packages/socialproof/src/Http/Controllers/PixelController.php:19
 * @route '/socialproof/pixel/{pixel_key}'
 */
        pixelForm.head = (args: { pixel_key: string | number } | [pixel_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pixel.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pixel.form = pixelForm
const socialproof = {
    api: Object.assign(api, api),
dashboard: Object.assign(dashboard, dashboard),
widgets: Object.assign(widgets, widgets),
campaigns: Object.assign(campaigns, campaigns),
notifications: Object.assign(notifications, notifications),
domains: Object.assign(domains, domains),
notificationHandlers: Object.assign(notificationHandlers, notificationHandlers),
pixel: Object.assign(pixel, pixel22b03d),
}

export default socialproof