import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
const ListClientConversions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientConversions.url(options),
    method: 'get',
})

ListClientConversions.definition = {
    methods: ["get","head"],
    url: '/client/client-conversions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
ListClientConversions.url = (options?: RouteQueryOptions) => {
    return ListClientConversions.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
ListClientConversions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientConversions.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
ListClientConversions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientConversions.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
    const ListClientConversionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientConversions.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
        ListClientConversionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientConversions.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages\ListClientConversions::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientConversionResource/Pages/ListClientConversions.php:7
 * @route '/client/client-conversions'
 */
        ListClientConversionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientConversions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientConversions.form = ListClientConversionsForm
export default ListClientConversions