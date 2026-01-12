import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
const ViewClient = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClient.url(args, options),
    method: 'get',
})

ViewClient.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/clients/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
ViewClient.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClient.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
ViewClient.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClient.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
ViewClient.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClient.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
    const ViewClientForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClient.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
        ViewClientForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClient.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\ViewClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/ViewClient.php:7
 * @route '/socialproof-admin/clients/{record}'
 */
        ViewClientForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClient.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClient.form = ViewClientForm
export default ViewClient