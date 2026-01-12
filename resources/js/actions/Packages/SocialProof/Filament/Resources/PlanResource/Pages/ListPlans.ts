import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
const ListPlans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPlans.url(options),
    method: 'get',
})

ListPlans.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/plans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
ListPlans.url = (options?: RouteQueryOptions) => {
    return ListPlans.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
ListPlans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPlans.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
ListPlans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPlans.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
    const ListPlansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListPlans.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
        ListPlansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPlans.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ListPlans::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ListPlans.php:7
 * @route '/socialproof-admin/plans'
 */
        ListPlansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPlans.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListPlans.form = ListPlansForm
export default ListPlans