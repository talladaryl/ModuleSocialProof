import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/admin/logout'
 */
const LogoutController0bf9725898bf54069779505e96ede62a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

LogoutController0bf9725898bf54069779505e96ede62a.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/admin/logout'
 */
LogoutController0bf9725898bf54069779505e96ede62a.url = (options?: RouteQueryOptions) => {
    return LogoutController0bf9725898bf54069779505e96ede62a.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/admin/logout'
 */
LogoutController0bf9725898bf54069779505e96ede62a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
    method: 'post',
})

    /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/admin/logout'
 */
    const LogoutController0bf9725898bf54069779505e96ede62aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
        method: 'post',
    })

            /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/admin/logout'
 */
        LogoutController0bf9725898bf54069779505e96ede62aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: LogoutController0bf9725898bf54069779505e96ede62a.url(options),
            method: 'post',
        })
    
    LogoutController0bf9725898bf54069779505e96ede62a.form = LogoutController0bf9725898bf54069779505e96ede62aForm
    /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/socialproof-admin/logout'
 */
const LogoutControllerdc30b516b027e04d940de64e83e824a6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutControllerdc30b516b027e04d940de64e83e824a6.url(options),
    method: 'post',
})

LogoutControllerdc30b516b027e04d940de64e83e824a6.definition = {
    methods: ["post"],
    url: '/socialproof-admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/socialproof-admin/logout'
 */
LogoutControllerdc30b516b027e04d940de64e83e824a6.url = (options?: RouteQueryOptions) => {
    return LogoutControllerdc30b516b027e04d940de64e83e824a6.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/socialproof-admin/logout'
 */
LogoutControllerdc30b516b027e04d940de64e83e824a6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LogoutControllerdc30b516b027e04d940de64e83e824a6.url(options),
    method: 'post',
})

    /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/socialproof-admin/logout'
 */
    const LogoutControllerdc30b516b027e04d940de64e83e824a6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: LogoutControllerdc30b516b027e04d940de64e83e824a6.url(options),
        method: 'post',
    })

            /**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
 * @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
 * @route '/socialproof-admin/logout'
 */
        LogoutControllerdc30b516b027e04d940de64e83e824a6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: LogoutControllerdc30b516b027e04d940de64e83e824a6.url(options),
            method: 'post',
        })
    
    LogoutControllerdc30b516b027e04d940de64e83e824a6.form = LogoutControllerdc30b516b027e04d940de64e83e824a6Form

const LogoutController = {
    '/admin/logout': LogoutController0bf9725898bf54069779505e96ede62a,
    '/socialproof-admin/logout': LogoutControllerdc30b516b027e04d940de64e83e824a6,
}

export default LogoutController