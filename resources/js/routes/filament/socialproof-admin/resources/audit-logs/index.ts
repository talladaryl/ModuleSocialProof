import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/audit-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ListAuditLogs::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ListAuditLogs.php:7
 * @route '/admin/socialproof/audit-logs'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/audit-logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages\ViewAuditLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/AuditLogResource/Pages/ViewAuditLog.php:7
 * @route '/admin/socialproof/audit-logs/{record}'
 */
        viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
const auditLogs = {
    index: Object.assign(index, index),
view: Object.assign(view, view),
}

export default auditLogs