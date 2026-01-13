import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
const ListQuotaUsages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListQuotaUsages.url(options),
    method: 'get',
})

ListQuotaUsages.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/quota-usages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
ListQuotaUsages.url = (options?: RouteQueryOptions) => {
    return ListQuotaUsages.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
ListQuotaUsages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListQuotaUsages.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
ListQuotaUsages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListQuotaUsages.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
    const ListQuotaUsagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListQuotaUsages.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
        ListQuotaUsagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListQuotaUsages.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages\ListQuotaUsages::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/QuotaUsageResource/Pages/ListQuotaUsages.php:7
 * @route '/admin/socialproof/quota-usages'
 */
        ListQuotaUsagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListQuotaUsages.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListQuotaUsages.form = ListQuotaUsagesForm
export default ListQuotaUsages