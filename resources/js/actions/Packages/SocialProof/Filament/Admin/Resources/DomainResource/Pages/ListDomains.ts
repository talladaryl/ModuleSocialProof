import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
const ListDomains = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDomains.url(options),
    method: 'get',
})

ListDomains.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/domains',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
ListDomains.url = (options?: RouteQueryOptions) => {
    return ListDomains.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
ListDomains.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDomains.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
ListDomains.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDomains.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
    const ListDomainsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListDomains.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
        ListDomainsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDomains.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\ListDomains::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/ListDomains.php:7
 * @route '/admin/socialproof/domains'
 */
        ListDomainsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDomains.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListDomains.form = ListDomainsForm
export default ListDomains