import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
const EditBannedIp = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBannedIp.url(args, options),
    method: 'get',
})

EditBannedIp.definition = {
    methods: ["get","head"],
    url: '/admin/socialproof/banned-ips/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
EditBannedIp.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBannedIp.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
EditBannedIp.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBannedIp.url(args, options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
EditBannedIp.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBannedIp.url(args, options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
    const EditBannedIpForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditBannedIp.url(args, options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
        EditBannedIpForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditBannedIp.url(args, options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages\EditBannedIp::__invoke
 * @see packages/socialproof/src/Filament/Admin/Resources/BannedIpResource/Pages/EditBannedIp.php:7
 * @route '/admin/socialproof/banned-ips/{record}/edit'
 */
        EditBannedIpForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditBannedIp.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditBannedIp.form = EditBannedIpForm
export default EditBannedIp