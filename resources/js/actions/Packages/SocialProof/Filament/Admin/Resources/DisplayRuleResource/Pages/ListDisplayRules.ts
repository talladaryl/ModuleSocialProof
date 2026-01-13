import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
const ListDisplayRules = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDisplayRules.url(options),
    method: 'get',
})

ListDisplayRules.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/display-rules',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
ListDisplayRules.url = (options?: RouteQueryOptions) => {
    return ListDisplayRules.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
ListDisplayRules.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDisplayRules.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
ListDisplayRules.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDisplayRules.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
    const ListDisplayRulesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListDisplayRules.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
        ListDisplayRulesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDisplayRules.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\ListDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/ListDisplayRules.php:7
 * @route '/admin/socialproof/display-rules'
 */
        ListDisplayRulesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDisplayRules.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListDisplayRules.form = ListDisplayRulesForm
export default ListDisplayRules