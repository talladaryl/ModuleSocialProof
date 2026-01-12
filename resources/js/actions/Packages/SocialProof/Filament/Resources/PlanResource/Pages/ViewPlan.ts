import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
const ViewPlan = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPlan.url(args, options),
    method: 'get',
})

ViewPlan.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/plans/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
ViewPlan.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return ViewPlan.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
ViewPlan.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPlan.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
ViewPlan.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewPlan.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
    const ViewPlanForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewPlan.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
        ViewPlanForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewPlan.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\PlanResource\Pages\ViewPlan::__invoke
 * @see packages/socialproof/src/Filament/Resources/PlanResource/Pages/ViewPlan.php:7
 * @route '/socialproof-admin/plans/{record}'
 */
        ViewPlanForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewPlan.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewPlan.form = ViewPlanForm
export default ViewPlan