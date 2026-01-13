import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
const CreateBannedIp = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBannedIp.url(options),
    method: 'get',
})

CreateBannedIp.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/banned-ips/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
CreateBannedIp.url = (options?: RouteQueryOptions) => {
    return CreateBannedIp.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
CreateBannedIp.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBannedIp.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
CreateBannedIp.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBannedIp.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
    const CreateBannedIpForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateBannedIp.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
        CreateBannedIpForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBannedIp.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\CreateBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/CreateBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/create'
 */
        CreateBannedIpForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBannedIp.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateBannedIp.form = CreateBannedIpForm
export default CreateBannedIp