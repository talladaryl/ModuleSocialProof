import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
const EditWidget = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWidget.url(args, options),
    method: 'get',
})

EditWidget.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/widgets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
EditWidget.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditWidget.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
EditWidget.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditWidget.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
EditWidget.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditWidget.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
    const EditWidgetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditWidget.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
        EditWidgetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditWidget.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\EditWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/EditWidget.php:7
 * @route '/socialproof-admin/widgets/{record}/edit'
 */
        EditWidgetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditWidget.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditWidget.form = EditWidgetForm
export default EditWidget