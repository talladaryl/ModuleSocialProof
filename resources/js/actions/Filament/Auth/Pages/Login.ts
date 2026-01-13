import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
const Login047f8ce2fdeb7128b2677a1dd45b96b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})

Login047f8ce2fdeb7128b2677a1dd45b96b8.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
Login047f8ce2fdeb7128b2677a1dd45b96b8.url = (options?: RouteQueryOptions) => {
    return Login047f8ce2fdeb7128b2677a1dd45b96b8.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
Login047f8ce2fdeb7128b2677a1dd45b96b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
Login047f8ce2fdeb7128b2677a1dd45b96b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'head',
})

    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
    const Login047f8ce2fdeb7128b2677a1dd45b96b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
        Login047f8ce2fdeb7128b2677a1dd45b96b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/login'
 */
        Login047f8ce2fdeb7128b2677a1dd45b96b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Login047f8ce2fdeb7128b2677a1dd45b96b8.form = Login047f8ce2fdeb7128b2677a1dd45b96b8Form
    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
const Loginf092ba29ebf50e4f7ea82a636d21e1df = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf092ba29ebf50e4f7ea82a636d21e1df.url(options),
    method: 'get',
})

Loginf092ba29ebf50e4f7ea82a636d21e1df.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
Loginf092ba29ebf50e4f7ea82a636d21e1df.url = (options?: RouteQueryOptions) => {
    return Loginf092ba29ebf50e4f7ea82a636d21e1df.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
Loginf092ba29ebf50e4f7ea82a636d21e1df.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf092ba29ebf50e4f7ea82a636d21e1df.url(options),
    method: 'get',
})
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
Loginf092ba29ebf50e4f7ea82a636d21e1df.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginf092ba29ebf50e4f7ea82a636d21e1df.url(options),
    method: 'head',
})

    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
    const Loginf092ba29ebf50e4f7ea82a636d21e1dfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Loginf092ba29ebf50e4f7ea82a636d21e1df.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
        Loginf092ba29ebf50e4f7ea82a636d21e1dfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Loginf092ba29ebf50e4f7ea82a636d21e1df.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/socialproof-admin/login'
 */
        Loginf092ba29ebf50e4f7ea82a636d21e1dfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Loginf092ba29ebf50e4f7ea82a636d21e1df.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Loginf092ba29ebf50e4f7ea82a636d21e1df.form = Loginf092ba29ebf50e4f7ea82a636d21e1dfForm
    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
const Loginf2aa6934689eb84168f3e9cf7fdacf6f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url(options),
    method: 'get',
})

Loginf2aa6934689eb84168f3e9cf7fdacf6f.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
Loginf2aa6934689eb84168f3e9cf7fdacf6f.url = (options?: RouteQueryOptions) => {
    return Loginf2aa6934689eb84168f3e9cf7fdacf6f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
Loginf2aa6934689eb84168f3e9cf7fdacf6f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url(options),
    method: 'get',
})
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
Loginf2aa6934689eb84168f3e9cf7fdacf6f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url(options),
    method: 'head',
})

    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
    const Loginf2aa6934689eb84168f3e9cf7fdacf6fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
        Loginf2aa6934689eb84168f3e9cf7fdacf6fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/admin/socialproof/login'
 */
        Loginf2aa6934689eb84168f3e9cf7fdacf6fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Loginf2aa6934689eb84168f3e9cf7fdacf6f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Loginf2aa6934689eb84168f3e9cf7fdacf6f.form = Loginf2aa6934689eb84168f3e9cf7fdacf6fForm

const Login = {
    '/admin/login': Login047f8ce2fdeb7128b2677a1dd45b96b8,
    '/socialproof-admin/login': Loginf092ba29ebf50e4f7ea82a636d21e1df,
    '/admin/socialproof/login': Loginf2aa6934689eb84168f3e9cf7fdacf6f,
}

export default Login