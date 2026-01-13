import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
const EditDisplayRule = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDisplayRule.url(args, options),
    method: 'get',
})

EditDisplayRule.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/display-rules/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
EditDisplayRule.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDisplayRule.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
EditDisplayRule.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDisplayRule.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
EditDisplayRule.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDisplayRule.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
    const EditDisplayRuleForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditDisplayRule.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
        EditDisplayRuleForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditDisplayRule.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages\EditDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DisplayRuleResource/Pages/EditDisplayRule.php:7
 * @route '/admin/socialproof/display-rules/{record}/edit'
 */
        EditDisplayRuleForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditDisplayRule.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditDisplayRule.form = EditDisplayRuleForm
export default EditDisplayRule