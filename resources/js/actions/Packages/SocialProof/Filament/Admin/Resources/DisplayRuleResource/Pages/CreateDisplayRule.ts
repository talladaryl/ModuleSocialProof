import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
const CreateDisplayRule = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDisplayRule.url(options),
    method: 'get',
})

CreateDisplayRule.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/display-rules/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
CreateDisplayRule.url = (options?: RouteQueryOptions) => {
    return CreateDisplayRule.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
CreateDisplayRule.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDisplayRule.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
CreateDisplayRule.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDisplayRule.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
    const CreateDisplayRuleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateDisplayRule.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
        CreateDisplayRuleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDisplayRule.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\CreateDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/CreateDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/create'
 */
        CreateDisplayRuleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDisplayRule.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateDisplayRule.form = CreateDisplayRuleForm
export default CreateDisplayRule