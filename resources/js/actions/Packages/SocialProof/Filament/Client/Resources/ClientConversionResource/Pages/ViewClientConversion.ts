import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
const ViewClientConversion = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientConversion.url(args, options),
    method: 'get',
})

ViewClientConversion.definition = {
    methods: ["get","head"],
    url: '/client/client-conversions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
ViewClientConversion.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientConversion.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
ViewClientConversion.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientConversion.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
ViewClientConversion.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientConversion.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
    const ViewClientConversionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientConversion.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
        ViewClientConversionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientConversion.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ViewClientConversion::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ViewClientConversion.php:7
 * @route '/client/client-conversions/{record}'
 */
        ViewClientConversionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientConversion.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientConversion.form = ViewClientConversionForm
export default ViewClientConversion