import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
const CreateClientDisplayRule = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientDisplayRule.url(options),
    method: 'get',
})

CreateClientDisplayRule.definition = {
    methods: ["get","head"],
    url: '/client/client-display-rules/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
CreateClientDisplayRule.url = (options?: RouteQueryOptions) => {
    return CreateClientDisplayRule.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
CreateClientDisplayRule.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientDisplayRule.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
CreateClientDisplayRule.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientDisplayRule.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
    const CreateClientDisplayRuleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientDisplayRule.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
        CreateClientDisplayRuleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientDisplayRule.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages\CreateClientDisplayRule::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientDisplayRuleResource/Pages/CreateClientDisplayRule.php:7
 * @route '/client/client-display-rules/create'
 */
        CreateClientDisplayRuleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientDisplayRule.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientDisplayRule.form = CreateClientDisplayRuleForm
export default CreateClientDisplayRule