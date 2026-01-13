import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
const ViewTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTemplate.url(args, options),
    method: 'get',
})

ViewTemplate.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/templates/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
ViewTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
ViewTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTemplate.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
ViewTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTemplate.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
    const ViewTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewTemplate.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
        ViewTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTemplate.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ViewTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ViewTemplate.php:7
 * @route '/admin/socialproof/templates/{record}'
 */
        ViewTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewTemplate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewTemplate.form = ViewTemplateForm
export default ViewTemplate