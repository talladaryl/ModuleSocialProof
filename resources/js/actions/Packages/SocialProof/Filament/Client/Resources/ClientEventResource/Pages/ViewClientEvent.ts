import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
const ViewClientEvent = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientEvent.url(args, options),
    method: 'get',
})

ViewClientEvent.definition = {
    methods: ["get","head"],
    url: '/client/client-events/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
ViewClientEvent.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientEvent.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
ViewClientEvent.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientEvent.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
ViewClientEvent.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientEvent.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
    const ViewClientEventForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientEvent.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
        ViewClientEventForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientEvent.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ViewClientEvent::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ViewClientEvent.php:7
 * @route '/client/client-events/{record}'
 */
        ViewClientEventForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientEvent.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientEvent.form = ViewClientEventForm
export default ViewClientEvent