import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
const EditTeamMember = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamMember.url(args, options),
    method: 'get',
})

EditTeamMember.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
EditTeamMember.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTeamMember.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
EditTeamMember.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTeamMember.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
EditTeamMember.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTeamMember.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
    const EditTeamMemberForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditTeamMember.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
        EditTeamMemberForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditTeamMember.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\EditTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/EditTeamMember.php:7
 * @route '/admin/socialproof/team-members/{record}/edit'
 */
        EditTeamMemberForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditTeamMember.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditTeamMember.form = EditTeamMemberForm
export default EditTeamMember