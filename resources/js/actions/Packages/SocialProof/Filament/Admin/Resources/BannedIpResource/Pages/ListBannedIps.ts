import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
const ListBannedIps = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBannedIps.url(options),
    method: 'get',
})

ListBannedIps.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/banned-ips',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
ListBannedIps.url = (options?: RouteQueryOptions) => {
    return ListBannedIps.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
ListBannedIps.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBannedIps.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
ListBannedIps.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBannedIps.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
    const ListBannedIpsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListBannedIps.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
        ListBannedIpsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListBannedIps.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\ListBannedIps::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/ListBannedIps.php:7
 * @route '/admin/socialproof/banned-ips'
 */
        ListBannedIpsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListBannedIps.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListBannedIps.form = ListBannedIpsForm
export default ListBannedIps