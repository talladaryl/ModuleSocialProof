import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
const ViewWidget = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWidget.url(args, options),
    method: 'get',
})

ViewWidget.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/widgets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
ViewWidget.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewWidget.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
ViewWidget.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewWidget.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
ViewWidget.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewWidget.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
    const ViewWidgetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewWidget.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
        ViewWidgetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewWidget.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ViewWidget::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ViewWidget.php:7
 * @route '/admin/socialproof/widgets/{record}'
 */
        ViewWidgetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewWidget.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewWidget.form = ViewWidgetForm
export default ViewWidget