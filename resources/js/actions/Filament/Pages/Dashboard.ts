import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
const Dashboard35f58437d9250c39f332f5e8e70440b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

Dashboard35f58437d9250c39f332f5e8e70440b7.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
Dashboard35f58437d9250c39f332f5e8e70440b7.url = (options?: RouteQueryOptions) => {
    return Dashboard35f58437d9250c39f332f5e8e70440b7.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
Dashboard35f58437d9250c39f332f5e8e70440b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
Dashboard35f58437d9250c39f332f5e8e70440b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'head',
})

    /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
    const Dashboard35f58437d9250c39f332f5e8e70440b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
        Dashboard35f58437d9250c39f332f5e8e70440b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboard35f58437d9250c39f332f5e8e70440b7.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/admin'
 */
        Dashboard35f58437d9250c39f332f5e8e70440b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboard35f58437d9250c39f332f5e8e70440b7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Dashboard35f58437d9250c39f332f5e8e70440b7.form = Dashboard35f58437d9250c39f332f5e8e70440b7Form
    /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
const Dashboardb621c2b1f64f3dbd26e799b582e9bd8b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url(options),
    method: 'get',
})

Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url = (options?: RouteQueryOptions) => {
    return Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url(options),
    method: 'get',
})
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url(options),
    method: 'head',
})

    /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
    const Dashboardb621c2b1f64f3dbd26e799b582e9bd8bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
        Dashboardb621c2b1f64f3dbd26e799b582e9bd8bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/socialproof-admin'
 */
        Dashboardb621c2b1f64f3dbd26e799b582e9bd8bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Dashboardb621c2b1f64f3dbd26e799b582e9bd8b.form = Dashboardb621c2b1f64f3dbd26e799b582e9bd8bForm

const Dashboard = {
    '/admin': Dashboard35f58437d9250c39f332f5e8e70440b7,
    '/socialproof-admin': Dashboardb621c2b1f64f3dbd26e799b582e9bd8b,
}

export default Dashboard