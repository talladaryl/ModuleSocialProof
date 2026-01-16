<x-filament-panels::page>
    <div class="space-y-6">
        <x-filament::section>
            <x-slot name="heading">
                Widget Builder
            </x-slot>
            <x-slot name="description">
                Créez et personnalisez vos widgets de social proof en temps réel.
            </x-slot>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {{-- Panneau de configuration --}}
                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                        Configuration
                    </h3>
                    
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <p class="text-gray-500 dark:text-gray-400">
                            Le Widget Builder interactif sera disponible prochainement.
                        </p>
                        <p class="text-gray-500 dark:text-gray-400 mt-2">
                            En attendant, vous pouvez créer vos widgets depuis la section 
                            <a href="{{ route('filament.client.resources.client-widgets.index') }}" class="text-primary-600 hover:text-primary-500">
                                Widgets
                            </a>.
                        </p>
                    </div>
                </div>

                {{-- Panneau de prévisualisation --}}
                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                        Prévisualisation
                    </h3>
                    
                    <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                        <div class="text-center text-gray-400">
                            <x-heroicon-o-eye class="w-12 h-12 mx-auto mb-2" />
                            <p>La prévisualisation apparaîtra ici</p>
                        </div>
                    </div>
                </div>
            </div>
        </x-filament::section>

        {{-- Templates disponibles --}}
        <x-filament::section>
            <x-slot name="heading">
                Templates disponibles
            </x-slot>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                @php
                    $templates = [
                        ['name' => 'Notification Achat', 'type' => 'notification', 'icon' => 'heroicon-o-shopping-cart'],
                        ['name' => 'Popup Inscription', 'type' => 'popup', 'icon' => 'heroicon-o-user-plus'],
                        ['name' => 'Bannière Promo', 'type' => 'banner', 'icon' => 'heroicon-o-megaphone'],
                        ['name' => 'Toast Avis', 'type' => 'toast', 'icon' => 'heroicon-o-star'],
                        ['name' => 'Compteur Live', 'type' => 'counter', 'icon' => 'heroicon-o-users'],
                        ['name' => 'Personnalisé', 'type' => 'custom', 'icon' => 'heroicon-o-cog-6-tooth'],
                    ];
                @endphp

                @foreach($templates as $template)
                    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="flex items-center space-x-3">
                            <div class="flex-shrink-0">
                                <x-dynamic-component :component="$template['icon']" class="w-8 h-8 text-primary-500" />
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900 dark:text-white">
                                    {{ $template['name'] }}
                                </h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Type: {{ $template['type'] }}
                                </p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </x-filament::section>
    </div>
</x-filament-panels::page>
