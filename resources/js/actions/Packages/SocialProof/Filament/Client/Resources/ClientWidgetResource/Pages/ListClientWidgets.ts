import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
const ListClientWidgets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientWidgets.url(options),
    method: 'get',
})

ListClientWidgets.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
ListClientWidgets.url = (options?: RouteQueryOptions) => {
    return ListClientWidgets.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
ListClientWidgets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientWidgets.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
ListClientWidgets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientWidgets.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
    const ListClientWidgetsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientWidgets.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
        ListClientWidgetsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientWidgets.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
        ListClientWidgetsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientWidgets.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientWidgets.form = ListClientWidgetsForm
export default ListClientWidgets