import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
const ListAuditLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAuditLogs.url(options),
    method: 'get',
})

ListAuditLogs.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/audit-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
ListAuditLogs.url = (options?: RouteQueryOptions) => {
    return ListAuditLogs.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
ListAuditLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListAuditLogs.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
ListAuditLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListAuditLogs.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
    const ListAuditLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListAuditLogs.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
        ListAuditLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListAuditLogs.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
        ListAuditLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListAuditLogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListAuditLogs.form = ListAuditLogsForm
export default ListAuditLogs