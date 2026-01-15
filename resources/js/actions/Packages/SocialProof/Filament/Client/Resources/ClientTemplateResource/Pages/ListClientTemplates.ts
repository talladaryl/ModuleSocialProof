import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
const ListClientTemplates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTemplates.url(options),
    method: 'get',
})

ListClientTemplates.definition = {
    methods: ["get","head"],
    url: '/client/client-templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
ListClientTemplates.url = (options?: RouteQueryOptions) => {
    return ListClientTemplates.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
ListClientTemplates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientTemplates.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
ListClientTemplates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientTemplates.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
    const ListClientTemplatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientTemplates.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
        ListClientTemplatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTemplates.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages\ListClientTemplates::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTemplateResource/Pages/ListClientTemplates.php:7
 * @route '/client/client-templates'
 */
        ListClientTemplatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientTemplates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientTemplates.form = ListClientTemplatesForm
export default ListClientTemplates