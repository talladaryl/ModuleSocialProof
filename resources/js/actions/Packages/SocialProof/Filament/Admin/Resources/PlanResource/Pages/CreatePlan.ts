import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
const CreatePlan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePlan.url(options),
    method: 'get',
})

CreatePlan.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/plans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
CreatePlan.url = (options?: RouteQueryOptions) => {
    return CreatePlan.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
CreatePlan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePlan.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
CreatePlan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePlan.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
    const CreatePlanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreatePlan.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
        CreatePlanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePlan.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages\CreatePlan::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/PlanResource/Pages/CreatePlan.php:7
 * @route '/admin/socialproof/plans/create'
 */
        CreatePlanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePlan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreatePlan.form = CreatePlanForm
export default CreatePlan