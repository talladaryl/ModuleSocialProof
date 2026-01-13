import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
const ViewLog = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewLog.url(args, options),
    method: 'get',
})

ViewLog.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/logs/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
ViewLog.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewLog.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
ViewLog.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewLog.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
ViewLog.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewLog.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
    const ViewLogForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewLog.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
        ViewLogForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewLog.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages\ViewLog::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/LogResource/Pages/ViewLog.php:7
 * @route '/admin/socialproof/logs/{record}'
 */
        ViewLogForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewLog.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewLog.form = ViewLogForm
export default ViewLog