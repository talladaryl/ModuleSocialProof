import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import auth from './auth'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
const socialproof = {
    auth: Object.assign(auth, auth),
home: Object.assign(home, home),
}

export default socialproof