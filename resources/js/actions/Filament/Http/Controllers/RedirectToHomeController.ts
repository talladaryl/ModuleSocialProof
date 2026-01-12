import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
const RedirectToHomeController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})

RedirectToHomeController.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
RedirectToHomeController.url = (options?: RouteQueryOptions) => {
    return RedirectToHomeController.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
RedirectToHomeController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToHomeController.url(options),
    method: 'get',
})
/**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
RedirectToHomeController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToHomeController.url(options),
    method: 'head',
})

    /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
    const RedirectToHomeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectToHomeController.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
        RedirectToHomeControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectToHomeController.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Http\Controllers\RedirectToHomeController::__invoke
 * @see vendor/filament/filament/src/Http/Controllers/RedirectToHomeController.php:10
 * @route '/socialproof-admin'
 */
        RedirectToHomeControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectToHomeController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectToHomeController.form = RedirectToHomeControllerForm
export default RedirectToHomeController