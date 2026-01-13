import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
const CreateTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTemplate.url(options),
    method: 'get',
})

CreateTemplate.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/templates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
CreateTemplate.url = (options?: RouteQueryOptions) => {
    return CreateTemplate.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
CreateTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTemplate.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
CreateTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTemplate.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
    const CreateTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateTemplate.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
        CreateTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTemplate.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\CreateTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/CreateTemplate.php:7
 * @route '/admin/socialproof/templates/create'
 */
        CreateTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTemplate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateTemplate.form = CreateTemplateForm
export default CreateTemplate