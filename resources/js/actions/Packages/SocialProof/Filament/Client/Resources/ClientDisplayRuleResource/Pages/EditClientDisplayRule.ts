import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
const EditClientDisplayRule = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientDisplayRule.url(args, options),
    method: 'get',
})

EditClientDisplayRule.definition = {
    methods: ["get","head"],
    url: '/client/client-display-rules/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
EditClientDisplayRule.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientDisplayRule.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
EditClientDisplayRule.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientDisplayRule.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
EditClientDisplayRule.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientDisplayRule.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
    const EditClientDisplayRuleForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientDisplayRule.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
        EditClientDisplayRuleForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientDisplayRule.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\EditClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/EditClientDisplayRule.php:7
 * @route '/client/client-display-rules/{record}/edit'
 */
        EditClientDisplayRuleForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientDisplayRule.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientDisplayRule.form = EditClientDisplayRuleForm
export default EditClientDisplayRule