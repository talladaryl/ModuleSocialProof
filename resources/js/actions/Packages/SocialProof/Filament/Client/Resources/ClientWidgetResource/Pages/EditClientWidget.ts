import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
const EditClientWidget = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientWidget.url(args, options),
    method: 'get',
})

EditClientWidget.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
EditClientWidget.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientWidget.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
EditClientWidget.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientWidget.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
EditClientWidget.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientWidget.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
    const EditClientWidgetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientWidget.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
        EditClientWidgetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientWidget.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
        EditClientWidgetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientWidget.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientWidget.form = EditClientWidgetForm
export default EditClientWidget