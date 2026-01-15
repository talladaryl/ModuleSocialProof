import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
const ViewClientWidget = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientWidget.url(args, options),
    method: 'get',
})

ViewClientWidget.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
ViewClientWidget.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientWidget.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
ViewClientWidget.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientWidget.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
ViewClientWidget.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientWidget.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
    const ViewClientWidgetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientWidget.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
        ViewClientWidgetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientWidget.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
        ViewClientWidgetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientWidget.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientWidget.form = ViewClientWidgetForm
export default ViewClientWidget