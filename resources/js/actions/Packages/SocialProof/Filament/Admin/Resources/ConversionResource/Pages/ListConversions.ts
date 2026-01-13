import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
const ListConversions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversions.url(options),
    method: 'get',
})

ListConversions.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/conversions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
ListConversions.url = (options?: RouteQueryOptions) => {
    return ListConversions.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
ListConversions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListConversions.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
ListConversions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListConversions.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
    const ListConversionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListConversions.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
        ListConversionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListConversions.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ListConversions::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ListConversions.php:7
 * @route '/admin/socialproof/conversions'
 */
        ListConversionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListConversions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListConversions.form = ListConversionsForm
export default ListConversions