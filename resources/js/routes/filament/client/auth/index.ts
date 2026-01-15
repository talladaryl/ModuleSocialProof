import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/client/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Auth\Pages\Login::__invoke
 * @see vendor/filament/filament/src/Auth/Pages/Login.php:7
 * @route '/client/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/client/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/client/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/client/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/client/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/client/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/client/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const auth = {
    login: Object.assign(login, login),
logout: Object.assign(logout, logout),
}

export default auth