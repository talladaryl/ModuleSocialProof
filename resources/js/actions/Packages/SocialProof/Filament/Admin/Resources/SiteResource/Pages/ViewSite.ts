import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
const ViewSite = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSite.url(args, options),
    method: 'get',
})

ViewSite.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/sites/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
ViewSite.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSite.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
ViewSite.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSite.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
ViewSite.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSite.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
    const ViewSiteForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewSite.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
        ViewSiteForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewSite.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\ViewSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/ViewSite.php:7
 * @route '/admin/socialproof/sites/{record}'
 */
        ViewSiteForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewSite.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewSite.form = ViewSiteForm
export default ViewSite