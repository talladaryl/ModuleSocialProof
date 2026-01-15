import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
const ListClientDisplayRules = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientDisplayRules.url(options),
    method: 'get',
})

ListClientDisplayRules.definition = {
    methods: ["get","head"],
    url: '/client/client-display-rules',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
ListClientDisplayRules.url = (options?: RouteQueryOptions) => {
    return ListClientDisplayRules.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
ListClientDisplayRules.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListClientDisplayRules.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
ListClientDisplayRules.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListClientDisplayRules.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
    const ListClientDisplayRulesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListClientDisplayRules.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
        ListClientDisplayRulesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientDisplayRules.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\ListClientDisplayRules::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/ListClientDisplayRules.php:7
 * @route '/client/client-display-rules'
 */
        ListClientDisplayRulesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListClientDisplayRules.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListClientDisplayRules.form = ListClientDisplayRulesForm
export default ListClientDisplayRules