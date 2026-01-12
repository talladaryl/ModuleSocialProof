import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
const EditClient = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient.url(args, options),
    method: 'get',
})

EditClient.definition = {
    methods: ["get","head"],
    url: '/socialproof-admin/clients/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
EditClient.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClient.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
EditClient.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClient.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
EditClient.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClient.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
    const EditClientForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClient.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
        EditClientForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClient.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Resources\ClientResource\Pages\EditClient::__invoke
 * @see packages/socialproof/src/Filament/Resources/ClientResource/Pages/EditClient.php:7
 * @route '/socialproof-admin/clients/{record}/edit'
 */
        EditClientForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClient.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClient.form = EditClientForm
export default EditClient