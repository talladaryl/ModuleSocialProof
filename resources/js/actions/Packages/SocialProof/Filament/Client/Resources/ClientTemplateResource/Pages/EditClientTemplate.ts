import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
const EditClientTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientTemplate.url(args, options),
    method: 'get',
})

EditClientTemplate.definition = {
    methods: ["get","head"],
    url: '/client/client-templates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
EditClientTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
EditClientTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientTemplate.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
EditClientTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientTemplate.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
    const EditClientTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientTemplate.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
        EditClientTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientTemplate.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\EditClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/EditClientTemplate.php:7
 * @route '/client/client-templates/{record}/edit'
 */
        EditClientTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientTemplate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientTemplate.form = EditClientTemplateForm
export default EditClientTemplate