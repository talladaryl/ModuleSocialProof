import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
const AdminDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminDashboard.url(options),
    method: 'get',
})

AdminDashboard.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
AdminDashboard.url = (options?: RouteQueryOptions) => {
    return AdminDashboard.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
AdminDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminDashboard.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
AdminDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AdminDashboard.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
    const AdminDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: AdminDashboard.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
        AdminDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminDashboard.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
        AdminDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    AdminDashboard.form = AdminDashboardForm
export default AdminDashboard