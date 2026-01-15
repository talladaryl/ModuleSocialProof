import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
const WidgetBuilder = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WidgetBuilder.url(options),
    method: 'get',
})

WidgetBuilder.definition = {
    methods: ["get","head"],
    url: '/client/widget-builder',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
WidgetBuilder.url = (options?: RouteQueryOptions) => {
    return WidgetBuilder.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
WidgetBuilder.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WidgetBuilder.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
WidgetBuilder.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: WidgetBuilder.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
    const WidgetBuilderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: WidgetBuilder.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
        WidgetBuilderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: WidgetBuilder.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
        WidgetBuilderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: WidgetBuilder.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    WidgetBuilder.form = WidgetBuilderForm
export default WidgetBuilder