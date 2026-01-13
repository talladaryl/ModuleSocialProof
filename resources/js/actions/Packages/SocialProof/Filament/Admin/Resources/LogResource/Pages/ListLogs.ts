import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
const ListLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLogs.url(options),
    method: 'get',
})

ListLogs.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
ListLogs.url = (options?: RouteQueryOptions) => {
    return ListLogs.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
ListLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLogs.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
ListLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListLogs.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
    const ListLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListLogs.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
        ListLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListLogs.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ListLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ListLogs.php:7
 * @route '/admin/socialproof/logs'
 */
        ListLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListLogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListLogs.form = ListLogsForm
export default ListLogs