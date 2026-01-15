import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
const ViewClientTemplate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientTemplate.url(args, options),
    method: 'get',
})

ViewClientTemplate.definition = {
    methods: ["get","head"],
    url: '/client/client-templates/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
ViewClientTemplate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewClientTemplate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
ViewClientTemplate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewClientTemplate.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
ViewClientTemplate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewClientTemplate.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
    const ViewClientTemplateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewClientTemplate.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
        ViewClientTemplateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientTemplate.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ViewClientTemplate::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ViewClientTemplate.php:7
 * @route '/client/client-templates/{record}'
 */
        ViewClientTemplateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewClientTemplate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewClientTemplate.form = ViewClientTemplateForm
export default ViewClientTemplate