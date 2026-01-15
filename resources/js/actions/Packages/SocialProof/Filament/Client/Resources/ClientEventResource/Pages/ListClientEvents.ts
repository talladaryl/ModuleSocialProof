import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
const ListClientEvents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientEvents.url(options),
    method: 'get',
})

ListClientEvents.definition = {
    methods: ["get","head"],
    url: '/client/client-events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
ListClientEvents.url = (options?: RouteQueryOptions) => {
    return ListClientEvents.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
ListClientEvents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientEvents.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
ListClientEvents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientEvents.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
    const ListClientEventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientEvents.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
        ListClientEventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientEvents.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages\ListClientEvents::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientEventResource/Pages/ListClientEvents.php:7
 * @route '/client/client-events'
 */
        ListClientEventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientEvents.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientEvents.form = ListClientEventsForm
export default ListClientEvents