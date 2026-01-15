<x-filament-widgets::widget>
    <x-filament::section>
        <x-slot name="heading">
            Utilisation des quotas
        </x-slot>

        @if($plan)
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                @foreach($quotas as $key => $quota)
                    <div class="bg-gray-50 dark:bg-white/5 rounded-lg p-4 border border-gray-100 dark:border-white/10">
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                            {{ $quota['label'] }}
                        </div>
                        
                        @if($quota['unlimited'])
                            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                {{ number_format($quota['used']) }}
                            </div>
                            <div class="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-1 font-semibold">
                                Illimité
                            </div>
                        @else
                            @php
                                // On récupère le pourcentage déjà calculé en PHP ou on le sécurise ici
                                $perc = $quota['percentage'] ?? 0;
                                // Choix dynamique de la couleur selon le pourcentage
                                $colorClass = $perc >= 90 ? 'bg-danger-600' : ($perc >= 70 ? 'bg-warning-500' : 'bg-success-500');
                            @endphp
                            
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">
                                {{ number_format($quota['used']) }}
                                <span class="text-xs font-normal text-gray-400">/ {{ number_format($quota['limit']) }}</span>
                            </div>
                            
                            <div class="mt-2">
                                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div class="{{ $colorClass }} h-1.5 rounded-full transition-all duration-500" 
                                         style="width: {{ $perc }}%">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-[10px] text-gray-400 dark:text-gray-500 mt-1 font-medium">
                                {{ $perc }}% utilisé
                            </div>
                        @endif
                    </div>
                @endforeach
            </div>
            
            <div class="mt-6 pt-4 border-t border-gray-100 dark:border-white/10">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <x-heroicon-m-check-badge class="w-5 h-5 text-primary-500" />
                        <span class="text-sm text-gray-500 dark:text-gray-400">Plan actuel :</span>
                        <span class="font-bold text-gray-900 dark:text-white">{{ $plan->name }}</span>
                    </div>
                    
                    {{-- Utilisation de l'URL de la ressource corrigée précédemment --}}
                    <x-filament::link 
                        href="{{ \Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource::getUrl('index') }}" 
                        icon="heroicon-m-arrow-right" 
                        icon-position="after"
                        size="sm"
                    >
                        Gérer l'abonnement
                    </x-filament::link>
                </div>
            </div>
        @else
            <div class="text-center py-8">
                <div class="flex justify-center mb-4">
                    <div class="p-3 bg-warning-50 dark:bg-warning-500/10 rounded-full">
                        <x-heroicon-o-exclamation-triangle class="w-10 h-10 text-warning-500" />
                    </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Aucun abonnement actif
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs mx-auto">
                    Souscrivez à un plan pour commencer à booster vos conversions.
                </p>
                <x-filament::button 
                    tag="a" 
                    href="{{ url('client/billing') }}" 
                    color="primary"
                >
                    Voir les offres
                </x-filament::button>
            </div>
        @endif
    </x-filament::section>
</x-filament-widgets::widget>