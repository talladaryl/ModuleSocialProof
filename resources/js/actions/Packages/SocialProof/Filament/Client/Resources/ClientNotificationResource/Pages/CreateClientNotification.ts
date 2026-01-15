import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
const CreateClientNotification = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientNotification.url(options),
    method: 'get',
})

CreateClientNotification.definition = {
    methods: ["get","head"],
    url: '/client/client-notifications/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
CreateClientNotification.url = (options?: RouteQueryOptions) => {
    return CreateClientNotification.definition.url + queryParams(options)
}

/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
CreateClientNotification.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateClientNotification.url(options),
    method: 'get',
})
/**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
CreateClientNotification.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateClientNotification.url(options),
    method: 'head',
})

    /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
    const CreateClientNotificationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateClientNotification.url(options),
        method: 'get',
    })

            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
        CreateClientNotificationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientNotification.url(options),
            method: 'get',
        })
            /**
* @see \Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages\CreateClientNotification::__invoke
 * @see packages/socialproof/src/Filament/Client/Resources/ClientNotificationResource/Pages/CreateClientNotification.php:7
 * @route '/client/client-notifications/create'
 */
        CreateClientNotificationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateClientNotification.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateClientNotification.form = CreateClientNotificationForm
export default CreateClientNotification