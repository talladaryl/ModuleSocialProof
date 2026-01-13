import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ListApiKeys::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ListApiKeys.php:7
 * @route '/admin/socialproof/api-keys'
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
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\CreateApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/CreateApiKey.php:7
 * @route '/admin/socialproof/api-keys/create'
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
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
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
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\ViewApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/ViewApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}'
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
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/api-keys/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
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
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages\EditApiKey::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ApiKeyResource/Pages/EditApiKey.php:7
 * @route '/admin/socialproof/api-keys/{record}/edit'
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
const apiKeys = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
view: Object.assign(view, view),
edit: Object.assign(edit, edit),
}

export default apiKeys