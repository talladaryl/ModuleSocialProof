import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/socialproof/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::index
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:22
 * @route '/socialproof/campaigns'
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/socialproof/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::create
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:42
 * @route '/socialproof/campaigns/create'
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::store
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:51
 * @route '/socialproof/campaigns'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/socialproof/campaigns',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::store
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:51
 * @route '/socialproof/campaigns'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::store
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:51
 * @route '/socialproof/campaigns'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::store
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:51
 * @route '/socialproof/campaigns'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::store
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:51
 * @route '/socialproof/campaigns'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
export const show = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/socialproof/campaigns/{campaign}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
show.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return show.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
show.get = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
show.head = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
    const showForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
        showForm.get = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::show
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:63
 * @route '/socialproof/campaigns/{campaign}'
 */
        showForm.head = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
export const edit = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/socialproof/campaigns/{campaign}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
edit.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return edit.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
edit.get = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
edit.head = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
    const editForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
        editForm.get = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::edit
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:108
 * @route '/socialproof/campaigns/{campaign}/edit'
 */
        editForm.head = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
export const update = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/socialproof/campaigns/{campaign}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
update.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return update.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
update.put = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
update.patch = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
    const updateForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
        updateForm.put = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::update
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:120
 * @route '/socialproof/campaigns/{campaign}'
 */
        updateForm.patch = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::destroy
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:131
 * @route '/socialproof/campaigns/{campaign}'
 */
export const destroy = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/socialproof/campaigns/{campaign}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::destroy
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:131
 * @route '/socialproof/campaigns/{campaign}'
 */
destroy.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return destroy.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::destroy
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:131
 * @route '/socialproof/campaigns/{campaign}'
 */
destroy.delete = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::destroy
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:131
 * @route '/socialproof/campaigns/{campaign}'
 */
    const destroyForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::destroy
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:131
 * @route '/socialproof/campaigns/{campaign}'
 */
        destroyForm.delete = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Packages\SocialProof\Http\Controllers\CampaignController::duplicate
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:142
 * @route '/socialproof/campaigns/{campaign}/duplicate'
 */
export const duplicate = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

duplicate.definition = {
    methods: ["post"],
    url: '/socialproof/campaigns/{campaign}/duplicate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::duplicate
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:142
 * @route '/socialproof/campaigns/{campaign}/duplicate'
 */
duplicate.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return duplicate.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::duplicate
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:142
 * @route '/socialproof/campaigns/{campaign}/duplicate'
 */
duplicate.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::duplicate
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:142
 * @route '/socialproof/campaigns/{campaign}/duplicate'
 */
    const duplicateForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: duplicate.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::duplicate
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:142
 * @route '/socialproof/campaigns/{campaign}/duplicate'
 */
        duplicateForm.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: duplicate.url(args, options),
            method: 'post',
        })
    
    duplicate.form = duplicateForm
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::regeneratePixelKey
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:153
 * @route '/socialproof/campaigns/{campaign}/regenerate-pixel-key'
 */
export const regeneratePixelKey = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regeneratePixelKey.url(args, options),
    method: 'post',
})

regeneratePixelKey.definition = {
    methods: ["post"],
    url: '/socialproof/campaigns/{campaign}/regenerate-pixel-key',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::regeneratePixelKey
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:153
 * @route '/socialproof/campaigns/{campaign}/regenerate-pixel-key'
 */
regeneratePixelKey.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return regeneratePixelKey.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::regeneratePixelKey
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:153
 * @route '/socialproof/campaigns/{campaign}/regenerate-pixel-key'
 */
regeneratePixelKey.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regeneratePixelKey.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::regeneratePixelKey
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:153
 * @route '/socialproof/campaigns/{campaign}/regenerate-pixel-key'
 */
    const regeneratePixelKeyForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: regeneratePixelKey.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::regeneratePixelKey
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:153
 * @route '/socialproof/campaigns/{campaign}/regenerate-pixel-key'
 */
        regeneratePixelKeyForm.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: regeneratePixelKey.url(args, options),
            method: 'post',
        })
    
    regeneratePixelKey.form = regeneratePixelKeyForm
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:162
 * @route '/socialproof/campaigns/bulk-action'
 */
export const bulkAction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

bulkAction.definition = {
    methods: ["post"],
    url: '/socialproof/campaigns/bulk-action',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:162
 * @route '/socialproof/campaigns/bulk-action'
 */
bulkAction.url = (options?: RouteQueryOptions) => {
    return bulkAction.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:162
 * @route '/socialproof/campaigns/bulk-action'
 */
bulkAction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAction.url(options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:162
 * @route '/socialproof/campaigns/bulk-action'
 */
    const bulkActionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkAction.url(options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::bulkAction
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:162
 * @route '/socialproof/campaigns/bulk-action'
 */
        bulkActionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkAction.url(options),
            method: 'post',
        })
    
    bulkAction.form = bulkActionForm
/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:200
 * @route '/socialproof/campaigns/{campaign}/reset-statistics'
 */
export const resetStatistics = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetStatistics.url(args, options),
    method: 'post',
})

resetStatistics.definition = {
    methods: ["post"],
    url: '/socialproof/campaigns/{campaign}/reset-statistics',
} satisfies RouteDefinition<["post"]>

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:200
 * @route '/socialproof/campaigns/{campaign}/reset-statistics'
 */
resetStatistics.url = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { campaign: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'campaign_id' in args) {
            args = { campaign: args.campaign_id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    campaign: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        campaign: typeof args.campaign === 'object'
                ? args.campaign.campaign_id
                : args.campaign,
                }

    return resetStatistics.definition.url
            .replace('{campaign}', parsedArgs.campaign.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:200
 * @route '/socialproof/campaigns/{campaign}/reset-statistics'
 */
resetStatistics.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetStatistics.url(args, options),
    method: 'post',
})

    /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:200
 * @route '/socialproof/campaigns/{campaign}/reset-statistics'
 */
    const resetStatisticsForm = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resetStatistics.url(args, options),
        method: 'post',
    })

            /**
* @see \Packages\SocialProof\Http\Controllers\CampaignController::resetStatistics
 * @see packages/socialproof/src/Http/Controllers/CampaignController.php:200
 * @route '/socialproof/campaigns/{campaign}/reset-statistics'
 */
        resetStatisticsForm.post = (args: { campaign: number | { campaign_id: number } } | [campaign: number | { campaign_id: number } ] | number | { campaign_id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resetStatistics.url(args, options),
            method: 'post',
        })
    
    resetStatistics.form = resetStatisticsForm
const CampaignController = { index, create, store, show, edit, update, destroy, duplicate, regeneratePixelKey, bulkAction, resetStatistics }

export default CampaignController