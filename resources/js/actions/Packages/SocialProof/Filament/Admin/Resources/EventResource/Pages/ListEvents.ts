import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
const ListEvents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEvents.url(options),
    method: 'get',
})

ListEvents.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
ListEvents.url = (options?: RouteQueryOptions) => {
    return ListEvents.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
ListEvents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEvents.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
ListEvents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEvents.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
    const ListEventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListEvents.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
        ListEventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListEvents.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages\ListEvents::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/EventResource/Pages/ListEvents.php:7
 * @route '/admin/socialproof/events'
 */
        ListEventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListEvents.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListEvents.form = ListEventsForm
export default ListEvents