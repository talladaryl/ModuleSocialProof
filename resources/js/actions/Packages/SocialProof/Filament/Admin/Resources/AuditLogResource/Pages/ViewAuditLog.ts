import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
const ViewAuditLog = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAuditLog.url(args, options),
    method: 'get',
})

ViewAuditLog.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/audit-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
ViewAuditLog.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewAuditLog.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
ViewAuditLog.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewAuditLog.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
ViewAuditLog.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewAuditLog.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
    const ViewAuditLogForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewAuditLog.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
        ViewAuditLogForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewAuditLog.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
        ViewAuditLogForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewAuditLog.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewAuditLog.form = ViewAuditLogForm
export default ViewAuditLog