import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::index
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:22
 * @route '/socialproof/notifications'
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/socialproof/notifications/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::create
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:51
 * @route '/socialproof/notifications/create'
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:64
 * @route '/socialproof/notifications'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/socialproof/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:64
 * @route '/socialproof/notifications'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:64
 * @route '/socialproof/notifications'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:64
 * @route '/socialproof/notifications'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::store
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:64
 * @route '/socialproof/notifications'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
export const show = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/socialproof/notifications/{notification}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
show.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return show.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
show.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
show.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
    const showForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
        showForm.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::show
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:76
 * @route '/socialproof/notifications/{notification}'
 */
        showForm.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
export const edit = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/socialproof/notifications/{notification}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
edit.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return edit.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
edit.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
edit.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
    const editForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
        editForm.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::edit
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:128
 * @route '/socialproof/notifications/{notification}/edit'
 */
        editForm.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
export const update = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/socialproof/notifications/{notification}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
update.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return update.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
update.put = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
update.patch = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
    const updateForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
        updateForm.put = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::update
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:143
 * @route '/socialproof/notifications/{notification}'
 */
        updateForm.patch = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:154
 * @route '/socialproof/notifications/{notification}'
 */
export const destroy = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/socialproof/notifications/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:154
 * @route '/socialproof/notifications/{notification}'
 */
destroy.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return destroy.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:154
 * @route '/socialproof/notifications/{notification}'
 */
destroy.delete = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:154
 * @route '/socialproof/notifications/{notification}'
 */
    const destroyForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::destroy
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:154
 * @route '/socialproof/notifications/{notification}'
 */
        destroyForm.delete = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::duplicate
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:165
 * @route '/socialproof/notifications/{notification}/duplicate'
 */
export const duplicate = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

duplicate.definition = {
    methods: ["post"],
    url: '/socialproof/notifications/{notification}/duplicate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::duplicate
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:165
 * @route '/socialproof/notifications/{notification}/duplicate'
 */
duplicate.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return duplicate.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::duplicate
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:165
 * @route '/socialproof/notifications/{notification}/duplicate'
 */
duplicate.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::duplicate
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:165
 * @route '/socialproof/notifications/{notification}/duplicate'
 */
    const duplicateForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: duplicate.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::duplicate
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:165
 * @route '/socialproof/notifications/{notification}/duplicate'
 */
        duplicateForm.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: duplicate.url(args, options),
            method: 'post',
        })
    
    duplicate.form = duplicateForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:176
 * @route '/socialproof/notifications/bulk-action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/socialproof/notifications/bulk-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:176
 * @route '/socialproof/notifications/bulk-action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:176
 * @route '/socialproof/notifications/bulk-action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:176
 * @route '/socialproof/notifications/bulk-action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:176
 * @route '/socialproof/notifications/bulk-action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:214
 * @route '/socialproof/notifications/{notification}/reset-statistics'
 */
export const resetStatistics = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetStatistics.url(args, options),
    method: 'post',
})

resetStatistics.definition = {
    methods: ["post"],
    url: '/socialproof/notifications/{notification}/reset-statistics',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:214
 * @route '/socialproof/notifications/{notification}/reset-statistics'
 */
resetStatistics.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return resetStatistics.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:214
 * @route '/socialproof/notifications/{notification}/reset-statistics'
 */
resetStatistics.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetStatistics.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:214
 * @route '/socialproof/notifications/{notification}/reset-statistics'
 */
    const resetStatisticsForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resetStatistics.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:214
 * @route '/socialproof/notifications/{notification}/reset-statistics'
 */
        resetStatisticsForm.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resetStatistics.url(args, options),
            method: 'post',
        })
    
    resetStatistics.form = resetStatisticsForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::importData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:232
 * @route '/socialproof/notifications/{notification}/import-data'
 */
export const importData = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importData.url(args, options),
    method: 'post',
})

importData.definition = {
    methods: ["post"],
    url: '/socialproof/notifications/{notification}/import-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::importData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:232
 * @route '/socialproof/notifications/{notification}/import-data'
 */
importData.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return importData.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::importData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:232
 * @route '/socialproof/notifications/{notification}/import-data'
 */
importData.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importData.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::importData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:232
 * @route '/socialproof/notifications/{notification}/import-data'
 */
    const importDataForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importData.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::importData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:232
 * @route '/socialproof/notifications/{notification}/import-data'
 */
        importDataForm.post = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importData.url(args, options),
            method: 'post',
        })
    
    importData.form = importDataForm
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
export const exportData = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportData.url(args, options),
    method: 'get',
})

exportData.definition = {
    methods: ["get","head"],
    url: '/socialproof/notifications/{notification}/export-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
exportData.url = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'notification_id' in args) {
            args = { notification: args.notification_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.notification_id
                : args.notification,
                }

    return exportData.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
exportData.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportData.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
exportData.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportData.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
    const exportDataForm = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportData.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
        exportDataForm.get = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportData.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\NotificationExtendedController::exportData
 * @see packages/socialproof/src/Http/Controllers/NotificationExtendedController.php:248
 * @route '/socialproof/notifications/{notification}/export-data'
 */
        exportDataForm.head = (args: { notification: number | { notification_id: number } } | [notification: number | { notification_id: number } ] | number | { notification_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportData.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportData.form = exportDataForm
const NotificationExtendedController = { index, create, store, show, edit, update, destroy, duplicate, bulkAction, resetStatistics, importData, exportData }

export default NotificationExtendedController