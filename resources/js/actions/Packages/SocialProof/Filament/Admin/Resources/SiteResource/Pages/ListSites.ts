import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
const ListSites = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSites.url(options),
    method: 'get',
})

ListSites.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/sites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
ListSites.url = (options?: RouteQueryOptions) => {
    return ListSites.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
ListSites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSites.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
ListSites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSites.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
    const ListSitesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListSites.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
        ListSitesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListSites.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ListSites::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ListSites.php:7
 * @route '/admin/socialproof/sites'
 */
        ListSitesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListSites.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListSites.form = ListSitesForm
export default ListSites