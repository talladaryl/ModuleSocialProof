import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
const EditQuotaUsage = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditQuotaUsage.url(args, options),
    method: 'get',
})

EditQuotaUsage.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/quota-usages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
EditQuotaUsage.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditQuotaUsage.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
EditQuotaUsage.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditQuotaUsage.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
EditQuotaUsage.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditQuotaUsage.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
    const EditQuotaUsageForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditQuotaUsage.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
        EditQuotaUsageForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditQuotaUsage.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\EditQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/EditQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/{record}/edit'
 */
        EditQuotaUsageForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditQuotaUsage.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditQuotaUsage.form = EditQuotaUsageForm
export default EditQuotaUsage