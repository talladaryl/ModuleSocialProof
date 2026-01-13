import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/notification-handlers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:19
 * @route '/socialproof/notification-handlers'
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/socialproof/notification-handlers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:41
 * @route '/socialproof/notification-handlers/create'
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:48
 * @route '/socialproof/notification-handlers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/socialproof/notification-handlers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:48
 * @route '/socialproof/notification-handlers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:48
 * @route '/socialproof/notification-handlers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:48
 * @route '/socialproof/notification-handlers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:48
 * @route '/socialproof/notification-handlers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
export const show = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/socialproof/notification-handlers/{notification_handler}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
show.url = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification_handler: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification_handler: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification_handler: args.notification_handler,
                }

    return show.definition.url
            .replace('{notification_handler}', parsedArgs.notification_handler.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
show.get = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
show.head = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
    const showForm = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
        showForm.get = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:60
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
        showForm.head = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
export const edit = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/socialproof/notification-handlers/{notification_handler}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
edit.url = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification_handler: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification_handler: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification_handler: args.notification_handler,
                }

    return edit.definition.url
            .replace('{notification_handler}', parsedArgs.notification_handler.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
edit.get = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
edit.head = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
    const editForm = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
        editForm.get = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:69
 * @route '/socialproof/notification-handlers/{notification_handler}/edit'
 */
        editForm.head = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
export const update = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/socialproof/notification-handlers/{notification_handler}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
update.url = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification_handler: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification_handler: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification_handler: args.notification_handler,
                }

    return update.definition.url
            .replace('{notification_handler}', parsedArgs.notification_handler.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
update.put = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
update.patch = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
    const updateForm = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
        updateForm.put = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:79
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
        updateForm.patch = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:90
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
export const destroy = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/socialproof/notification-handlers/{notification_handler}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:90
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
destroy.url = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification_handler: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification_handler: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification_handler: args.notification_handler,
                }

    return destroy.definition.url
            .replace('{notification_handler}', parsedArgs.notification_handler.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:90
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
destroy.delete = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:90
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
    const destroyForm = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:90
 * @route '/socialproof/notification-handlers/{notification_handler}'
 */
        destroyForm.delete = (args: { notification_handler: string | number } | [notification_handler: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::test
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:101
 * @route '/socialproof/notification-handlers/{handler}/test'
 */
export const test = (args: { handler: string | number | { notification_handler_id: string | number } } | [handler: string | number | { notification_handler_id: string | number } ] | string | number | { notification_handler_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/socialproof/notification-handlers/{handler}/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::test
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:101
 * @route '/socialproof/notification-handlers/{handler}/test'
 */
test.url = (args: { handler: string | number | { notification_handler_id: string | number } } | [handler: string | number | { notification_handler_id: string | number } ] | string | number | { notification_handler_id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { handler: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_handler_id' in args) {
            args = { handler: args.notification_handler_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    handler: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        handler: typeof args.handler === 'object'
                ? args.handler.notification_handler_id
                : args.handler,
                }

    return test.definition.url
            .replace('{handler}', parsedArgs.handler.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::test
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:101
 * @route '/socialproof/notification-handlers/{handler}/test'
 */
test.post = (args: { handler: string | number | { notification_handler_id: string | number } } | [handler: string | number | { notification_handler_id: string | number } ] | string | number | { notification_handler_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::test
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:101
 * @route '/socialproof/notification-handlers/{handler}/test'
 */
    const testForm = (args: { handler: string | number | { notification_handler_id: string | number } } | [handler: string | number | { notification_handler_id: string | number } ] | string | number | { notification_handler_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: test.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::test
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:101
 * @route '/socialproof/notification-handlers/{handler}/test'
 */
        testForm.post = (args: { handler: string | number | { notification_handler_id: string | number } } | [handler: string | number | { notification_handler_id: string | number } ] | string | number | { notification_handler_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: test.url(args, options),
            method: 'post',
        })
    
    test.form = testForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:120
 * @route '/socialproof/notification-handlers/bulk-action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/socialproof/notification-handlers/bulk-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:120
 * @route '/socialproof/notification-handlers/bulk-action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:120
 * @route '/socialproof/notification-handlers/bulk-action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:120
 * @route '/socialproof/notification-handlers/bulk-action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationHandlerController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationHandlerController.php:120
 * @route '/socialproof/notification-handlers/bulk-action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
const NotificationHandlerController = { index, create, store, show, edit, update, destroy, test, bulkAction }

export default NotificationHandlerController