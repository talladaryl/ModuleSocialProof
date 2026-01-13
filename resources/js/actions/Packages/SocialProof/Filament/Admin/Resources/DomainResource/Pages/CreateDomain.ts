import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
const CreateDomain = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDomain.url(options),
    method: 'get',
})

CreateDomain.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/domains/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
CreateDomain.url = (options?: RouteQueryOptions) => {
    return CreateDomain.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
CreateDomain.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDomain.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
CreateDomain.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDomain.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
    const CreateDomainForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateDomain.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
        CreateDomainForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDomain.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages\CreateDomain::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/DomainResource/Pages/CreateDomain.php:7
 * @route '/admin/socialproof/domains/create'
 */
        CreateDomainForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDomain.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateDomain.form = CreateDomainForm
export default CreateDomain