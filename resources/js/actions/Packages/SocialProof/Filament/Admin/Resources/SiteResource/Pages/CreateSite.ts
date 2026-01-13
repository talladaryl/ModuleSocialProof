import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
const CreateSite = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSite.url(options),
    method: 'get',
})

CreateSite.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/sites/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
CreateSite.url = (options?: RouteQueryOptions) => {
    return CreateSite.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
CreateSite.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSite.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
CreateSite.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSite.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
    const CreateSiteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateSite.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
        CreateSiteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateSite.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\CreateSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/CreateSite.php:7
 * @route '/admin/socialproof/sites/create'
 */
        CreateSiteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateSite.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateSite.form = CreateSiteForm
export default CreateSite