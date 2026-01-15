import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
const EditClientTeamMember = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientTeamMember.url(args, options),
    method: 'get',
})

EditClientTeamMember.definition = {
    methods: ["get","head"],
    url: '/client/client-team-members/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
EditClientTeamMember.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditClientTeamMember.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
EditClientTeamMember.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditClientTeamMember.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
EditClientTeamMember.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditClientTeamMember.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
    const EditClientTeamMemberForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditClientTeamMember.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
        EditClientTeamMemberForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientTeamMember.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages\EditClientTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientTeamMemberResource/Pages/EditClientTeamMember.php:7
 * @route '/client/client-team-members/{record}/edit'
 */
        EditClientTeamMemberForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditClientTeamMember.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditClientTeamMember.form = EditClientTeamMemberForm
export default EditClientTeamMember