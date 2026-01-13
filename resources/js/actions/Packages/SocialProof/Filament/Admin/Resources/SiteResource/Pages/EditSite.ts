import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
const EditSite = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSite.url(args, options),
    method: 'get',
})

EditSite.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/sites/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
EditSite.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSite.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
EditSite.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSite.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
EditSite.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSite.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
    const EditSiteForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditSite.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
        EditSiteForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditSite.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages\EditSite::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/SiteResource/Pages/EditSite.php:7
 * @route '/admin/socialproof/sites/{record}/edit'
 */
        EditSiteForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditSite.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditSite.form = EditSiteForm
export default EditSite