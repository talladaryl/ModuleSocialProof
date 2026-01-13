import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
const EditTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTemplate.url(args, options),
    method: 'get',
})

EditTemplate.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
EditTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
EditTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTemplate.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
EditTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTemplate.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
    const EditTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditTemplate.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
        EditTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditTemplate.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages\EditTemplate::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TemplateResource/Pages/EditTemplate.php:7
 * @route '/admin/socialproof/templates/{record}/edit'
 */
        EditTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditTemplate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditTemplate.form = EditTemplateForm
export default EditTemplate