import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ListClientWidgets::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ListClientWidgets.php:7
 * @route '/client/client-widgets'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\CreateClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/CreateClientWidget.php:7
 * @route '/client/client-widgets/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\ViewClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/ViewClientWidget.php:7
 * @route '/client/client-widgets/{record}'
 */
        viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/client/client-widgets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages\EditClientWidget::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientWidgetResource/Pages/EditClientWidget.php:7
 * @route '/client/client-widgets/{record}/edit'
 */
        editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const clientWidgets = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
view: Object.assign(view, view),
edit: Object.assign(edit, edit),
}

export default clientWidgets