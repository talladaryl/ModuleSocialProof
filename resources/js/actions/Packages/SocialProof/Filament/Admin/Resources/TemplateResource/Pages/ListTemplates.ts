import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
const ListTemplates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTemplates.url(options),
    method: 'get',
})

ListTemplates.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
ListTemplates.url = (options?: RouteQueryOptions) => {
    return ListTemplates.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
ListTemplates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTemplates.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
ListTemplates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTemplates.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
    const ListTemplatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListTemplates.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
        ListTemplatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTemplates.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\ListTemplates::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/ListTemplates.php:7
 * @route '/admin/socialproof/templates'
 */
        ListTemplatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListTemplates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListTemplates.form = ListTemplatesForm
export default ListTemplates