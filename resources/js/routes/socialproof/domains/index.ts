import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/domains',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::index
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:14
 * @route '/socialproof/domains'
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
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/socialproof/domains/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::create
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:32
 * @route '/socialproof/domains/create'
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
* @see \Packages\SocialProof\Http\Controllers\DomainController::store
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:37
 * @route '/socialproof/domains'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/socialproof/domains',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::store
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:37
 * @route '/socialproof/domains'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::store
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:37
 * @route '/socialproof/domains'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::store
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:37
 * @route '/socialproof/domains'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::store
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:37
 * @route '/socialproof/domains'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
export const show = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/socialproof/domains/{domain}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
show.url = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { domain: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'domain_id' in args) {
            args = { domain: args.domain_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    domain: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        domain: typeof args.domain === 'object'
                ? args.domain.domain_id
                : args.domain,
                }

    return show.definition.url
            .replace('{domain}', parsedArgs.domain.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
show.get = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
show.head = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
    const showForm = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
        showForm.get = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::show
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:49
 * @route '/socialproof/domains/{domain}'
 */
        showForm.head = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
export const edit = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/socialproof/domains/{domain}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
edit.url = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { domain: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'domain_id' in args) {
            args = { domain: args.domain_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    domain: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        domain: typeof args.domain === 'object'
                ? args.domain.domain_id
                : args.domain,
                }

    return edit.definition.url
            .replace('{domain}', parsedArgs.domain.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
edit.get = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
edit.head = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
    const editForm = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
        editForm.get = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::edit
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:62
 * @route '/socialproof/domains/{domain}/edit'
 */
        editForm.head = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
export const update = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/socialproof/domains/{domain}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
update.url = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { domain: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'domain_id' in args) {
            args = { domain: args.domain_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    domain: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        domain: typeof args.domain === 'object'
                ? args.domain.domain_id
                : args.domain,
                }

    return update.definition.url
            .replace('{domain}', parsedArgs.domain.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
update.put = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
update.patch = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
    const updateForm = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
        updateForm.put = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::update
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:71
 * @route '/socialproof/domains/{domain}'
 */
        updateForm.patch = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::destroy
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:82
 * @route '/socialproof/domains/{domain}'
 */
export const destroy = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/socialproof/domains/{domain}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::destroy
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:82
 * @route '/socialproof/domains/{domain}'
 */
destroy.url = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { domain: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'domain_id' in args) {
            args = { domain: args.domain_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    domain: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        domain: typeof args.domain === 'object'
                ? args.domain.domain_id
                : args.domain,
                }

    return destroy.definition.url
            .replace('{domain}', parsedArgs.domain.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::destroy
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:82
 * @route '/socialproof/domains/{domain}'
 */
destroy.delete = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::destroy
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:82
 * @route '/socialproof/domains/{domain}'
 */
    const destroyForm = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::destroy
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:82
 * @route '/socialproof/domains/{domain}'
 */
        destroyForm.delete = (args: { domain: number | { domain_id: number } } | [domain: number | { domain_id: number } ] | number | { domain_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:93
 * @route '/socialproof/domains/bulk-action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/socialproof/domains/bulk-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:93
 * @route '/socialproof/domains/bulk-action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\DomainController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:93
 * @route '/socialproof/domains/bulk-action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:93
 * @route '/socialproof/domains/bulk-action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\DomainController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/DomainController.php:93
 * @route '/socialproof/domains/bulk-action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
const domains = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
bulkAction: Object.assign(bulkAction, bulkAction),
}

export default domains