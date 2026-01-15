import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
const CreateClientWidget = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientWidget.url(options),
    method: 'get',
})

CreateClientWidget.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
CreateClientWidget.url = (options?: RouteQueryOptions) => {
    return CreateClientWidget.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
CreateClientWidget.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientWidget.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
CreateClientWidget.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientWidget.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
    const CreateClientWidgetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientWidget.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
        CreateClientWidgetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientWidget.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
        CreateClientWidgetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientWidget.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientWidget.form = CreateClientWidgetForm
export default CreateClientWidget