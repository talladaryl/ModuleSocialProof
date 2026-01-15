import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
export const clientDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientDashboard.url(options),
    method: 'get',
})

clientDashboard.definition = {
    methods: ["get","head"],
    url: '/client',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
clientDashboard.url = (options?: RouteQueryOptions) => {
    return clientDashboard.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
clientDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientDashboard.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
clientDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clientDashboard.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
    const clientDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: clientDashboard.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
        clientDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientDashboard.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientDashboard::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientDashboard.php:7
 * @route '/client'
 */
        clientDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    clientDashboard.form = clientDashboardForm
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
export const clientAnalytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientAnalytics.url(options),
    method: 'get',
})

clientAnalytics.definition = {
    methods: ["get","head"],
    url: '/client/client-analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
clientAnalytics.url = (options?: RouteQueryOptions) => {
    return clientAnalytics.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
clientAnalytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientAnalytics.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
clientAnalytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clientAnalytics.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
    const clientAnalyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: clientAnalytics.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
        clientAnalyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientAnalytics.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientAnalytics::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientAnalytics.php:7
 * @route '/client/client-analytics'
 */
        clientAnalyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientAnalytics.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    clientAnalytics.form = clientAnalyticsForm
/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
export const widgetBuilder = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: widgetBuilder.url(options),
    method: 'get',
})

widgetBuilder.definition = {
    methods: ["get","head"],
    url: '/client/widget-builder',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
widgetBuilder.url = (options?: RouteQueryOptions) => {
    return widgetBuilder.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
widgetBuilder.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: widgetBuilder.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
widgetBuilder.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: widgetBuilder.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
    const widgetBuilderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: widgetBuilder.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
        widgetBuilderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: widgetBuilder.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\WidgetBuilder::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/WidgetBuilder.php:7
 * @route '/client/widget-builder'
 */
        widgetBuilderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: widgetBuilder.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    widgetBuilder.form = widgetBuilderForm
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
export const clientSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientSettings.url(options),
    method: 'get',
})

clientSettings.definition = {
    methods: ["get","head"],
    url: '/client/client-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
clientSettings.url = (options?: RouteQueryOptions) => {
    return clientSettings.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
clientSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientSettings.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
clientSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clientSettings.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
    const clientSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: clientSettings.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
        clientSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientSettings.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientSettings::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientSettings.php:7
 * @route '/client/client-settings'
 */
        clientSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientSettings.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    clientSettings.form = clientSettingsForm
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
export const clientBilling = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientBilling.url(options),
    method: 'get',
})

clientBilling.definition = {
    methods: ["get","head"],
    url: '/client/client-billing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
clientBilling.url = (options?: RouteQueryOptions) => {
    return clientBilling.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
clientBilling.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientBilling.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
clientBilling.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clientBilling.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
    const clientBillingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: clientBilling.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
        clientBillingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientBilling.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Pages\ClientBilling::__invoke
 * @see packages/socialproof/src/Filament/Client/Pages/ClientBilling.php:7
 * @route '/client/client-billing'
 */
        clientBillingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clientBilling.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    clientBilling.form = clientBillingForm
const pages = {
    clientDashboard: Object.assign(clientDashboard, clientDashboard),
clientAnalytics: Object.assign(clientAnalytics, clientAnalytics),
widgetBuilder: Object.assign(widgetBuilder, widgetBuilder),
clientSettings: Object.assign(clientSettings, clientSettings),
clientBilling: Object.assign(clientBilling, clientBilling),
}

export default pages