import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
const CreateWidget = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWidget.url(options),
    method: 'get',
})

CreateWidget.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/widgets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
CreateWidget.url = (options?: RouteQueryOptions) => {
    return CreateWidget.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
CreateWidget.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateWidget.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
CreateWidget.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateWidget.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
    const CreateWidgetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateWidget.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
        CreateWidgetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateWidget.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\WidgetResource\Pages\CreateWidget::__invoke
 * @see packages/socialproof/src/Filament/Resources/WidgetResource/Pages/CreateWidget.php:7
 * @route '/socialproof-admin/widgets/create'
 */
        CreateWidgetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateWidget.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateWidget.form = CreateWidgetForm
export default CreateWidget