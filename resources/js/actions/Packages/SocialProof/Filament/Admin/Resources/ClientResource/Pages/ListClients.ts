import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
const ListClients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})

ListClients.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
ListClients.url = (options?: RouteQueryOptions) => {
    return ListClients.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
ListClients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClients.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
ListClients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClients.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
    const ListClientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClients.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
        ListClientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClients.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages\ListClients::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/ClientResource/Pages/ListClients.php:7
 * @route '/admin/socialproof/clients'
 */
        ListClientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClients.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClients.form = ListClientsForm
export default ListClients