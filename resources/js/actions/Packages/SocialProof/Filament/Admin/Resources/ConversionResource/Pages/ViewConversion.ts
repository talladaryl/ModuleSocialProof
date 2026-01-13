import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
const ViewConversion = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversion.url(args, options),
    method: 'get',
})

ViewConversion.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/conversions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
ViewConversion.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewConversion.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
ViewConversion.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewConversion.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
ViewConversion.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewConversion.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
    const ViewConversionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewConversion.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
        ViewConversionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewConversion.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages\ViewConversion::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ConversionResource/Pages/ViewConversion.php:7
 * @route '/admin/socialproof/conversions/{record}'
 */
        ViewConversionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewConversion.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewConversion.form = ViewConversionForm
export default ViewConversion