import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::index
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:18
 * @route '/socialproof/widgets'
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::create
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:30
 * @route '/socialproof/widgets/create'
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::store
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:38
 * @route '/socialproof/widgets'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/socialproof/widgets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::store
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:38
 * @route '/socialproof/widgets'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::store
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:38
 * @route '/socialproof/widgets'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::store
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:38
 * @route '/socialproof/widgets'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::store
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:38
 * @route '/socialproof/widgets'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
export const show = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets/{widget}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
show.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return show.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
show.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
show.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
    const showForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
        showForm.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::show
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:50
 * @route '/socialproof/widgets/{widget}'
 */
        showForm.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
export const edit = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets/{widget}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
edit.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return edit.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
edit.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
edit.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
    const editForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
        editForm.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::edit
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:68
 * @route '/socialproof/widgets/{widget}/edit'
 */
        editForm.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
export const update = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/socialproof/widgets/{widget}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
update.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return update.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
update.put = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
update.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
    const updateForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
        updateForm.put = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::update
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:78
 * @route '/socialproof/widgets/{widget}'
 */
        updateForm.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::destroy
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:89
 * @route '/socialproof/widgets/{widget}'
 */
export const destroy = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/socialproof/widgets/{widget}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::destroy
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:89
 * @route '/socialproof/widgets/{widget}'
 */
destroy.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return destroy.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::destroy
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:89
 * @route '/socialproof/widgets/{widget}'
 */
destroy.delete = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::destroy
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:89
 * @route '/socialproof/widgets/{widget}'
 */
    const destroyForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::destroy
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:89
 * @route '/socialproof/widgets/{widget}'
 */
        destroyForm.delete = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
export const script = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: script.url(args, options),
    method: 'get',
})

script.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets/{widget}/script',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
script.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return script.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
script.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: script.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
script.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: script.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
    const scriptForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: script.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
        scriptForm.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: script.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::script
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:100
 * @route '/socialproof/widgets/{widget}/script'
 */
        scriptForm.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: script.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    script.form = scriptForm
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
export const preview = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(args, options),
    method: 'get',
})

preview.definition = {
    methods: ["get","head"],
    url: '/socialproof/widgets/{widget}/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
preview.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return preview.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
preview.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
preview.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preview.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
    const previewForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: preview.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
        previewForm.get = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preview.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::preview
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:110
 * @route '/socialproof/widgets/{widget}/preview'
 */
        previewForm.head = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preview.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    preview.form = previewForm
/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::regenerateKey
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:120
 * @route '/socialproof/widgets/{widget}/regenerate-key'
 */
export const regenerateKey = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateKey.url(args, options),
    method: 'post',
})

regenerateKey.definition = {
    methods: ["post"],
    url: '/socialproof/widgets/{widget}/regenerate-key',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::regenerateKey
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:120
 * @route '/socialproof/widgets/{widget}/regenerate-key'
 */
regenerateKey.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { widget: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    widget: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        widget: typeof args.widget === 'object'
                ? args.widget.id
                : args.widget,
                }

    return regenerateKey.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::regenerateKey
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:120
 * @route '/socialproof/widgets/{widget}/regenerate-key'
 */
regenerateKey.post = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateKey.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::regenerateKey
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:120
 * @route '/socialproof/widgets/{widget}/regenerate-key'
 */
    const regenerateKeyForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: regenerateKey.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\WidgetController::regenerateKey
 * @see packages/socialproof/src/Http/Controllers/WidgetController.php:120
 * @route '/socialproof/widgets/{widget}/regenerate-key'
 */
        regenerateKeyForm.post = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: regenerateKey.url(args, options),
            method: 'post',
        })
    
    regenerateKey.form = regenerateKeyForm
const widgets = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
script: Object.assign(script, script),
preview: Object.assign(preview, preview),
regenerateKey: Object.assign(regenerateKey, regenerateKey),
}

export default widgets