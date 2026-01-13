import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
const CreateQuotaUsage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateQuotaUsage.url(options),
    method: 'get',
})

CreateQuotaUsage.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/quota-usages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
CreateQuotaUsage.url = (options?: RouteQueryOptions) => {
    return CreateQuotaUsage.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
CreateQuotaUsage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateQuotaUsage.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
CreateQuotaUsage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateQuotaUsage.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
    const CreateQuotaUsageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateQuotaUsage.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
        CreateQuotaUsageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateQuotaUsage.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\CreateQuotaUsage::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/CreateQuotaUsage.php:7
 * @route '/admin/socialproof/quota-usages/create'
 */
        CreateQuotaUsageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateQuotaUsage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateQuotaUsage.form = CreateQuotaUsageForm
export default CreateQuotaUsage