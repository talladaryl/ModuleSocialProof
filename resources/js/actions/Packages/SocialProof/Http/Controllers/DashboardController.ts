import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DashboardController::index
 * @see packages/socialproof/src/Http/Controllers/DashboardController.php:15
 * @route '/socialproof'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const DashboardController = { index }

export default DashboardController