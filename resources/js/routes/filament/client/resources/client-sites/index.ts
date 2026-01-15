import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/client/client-sites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ListClientSites::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ListClientSites.php:7
 * @route '/client/client-sites'
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
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\CreateClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/CreateClientSite.php:7
 * @route '/client/client-sites/create'
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
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
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
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\ViewClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/ViewClientSite.php:7
 * @route '/client/client-sites/{record}'
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
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/client/client-sites/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
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
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages\EditClientSite::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientSiteResource/Pages/EditClientSite.php:7
 * @route '/client/client-sites/{record}/edit'
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
const clientSites = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
view: Object.assign(view, view),
edit: Object.assign(edit, edit),
}

export default clientSites