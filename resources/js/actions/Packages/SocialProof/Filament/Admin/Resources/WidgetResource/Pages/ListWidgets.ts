import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
const ListWidgets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWidgets.url(options),
    method: 'get',
})

ListWidgets.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/widgets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
ListWidgets.url = (options?: RouteQueryOptions) => {
    return ListWidgets.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
ListWidgets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWidgets.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
ListWidgets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWidgets.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
    const ListWidgetsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListWidgets.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
        ListWidgetsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListWidgets.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages\ListWidgets::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/WidgetResource/Pages/ListWidgets.php:7
 * @route '/admin/socialproof/widgets'
 */
        ListWidgetsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListWidgets.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListWidgets.form = ListWidgetsForm
export default ListWidgets