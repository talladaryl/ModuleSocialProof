import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
export const adminDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminDashboard.url(options),
    method: 'get',
})

adminDashboard.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
adminDashboard.url = (options?: RouteQueryOptions) => {
    return adminDashboard.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
adminDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminDashboard.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
adminDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminDashboard.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
    const adminDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: adminDashboard.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
        adminDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminDashboard.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Pages\AdminDashboard::__invoke
 * @see packages/socialproof/src/Filament/Admin/Pages/AdminDashboard.php:7
 * @route '/admin/socialproof'
 */
        adminDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    adminDashboard.form = adminDashboardForm
const pages = {
    adminDashboard: Object.assign(adminDashboard, adminDashboard),
}

export default pages