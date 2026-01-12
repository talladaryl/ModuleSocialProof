import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
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
const pages = {
    dashboard: Object.assign(dashboard, dashboard),
}

export default pages