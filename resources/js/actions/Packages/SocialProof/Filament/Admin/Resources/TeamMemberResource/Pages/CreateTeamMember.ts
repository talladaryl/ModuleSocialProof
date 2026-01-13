import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
const CreateTeamMember = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamMember.url(options),
    method: 'get',
})

CreateTeamMember.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/team-members/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
CreateTeamMember.url = (options?: RouteQueryOptions) => {
    return CreateTeamMember.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
CreateTeamMember.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTeamMember.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
CreateTeamMember.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTeamMember.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
    const CreateTeamMemberForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateTeamMember.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
        CreateTeamMemberForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTeamMember.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages\CreateTeamMember::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/TeamMemberResource/Pages/CreateTeamMember.php:7
 * @route '/admin/socialproof/team-members/create'
 */
        CreateTeamMemberForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateTeamMember.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateTeamMember.form = CreateTeamMemberForm
export default CreateTeamMember