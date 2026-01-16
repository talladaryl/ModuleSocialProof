<x-filament-panels::page>
    <div class="space-y-6">
        {{-- Abonnement actuel --}}
        @if($currentSubscription)
            <x-filament::section>
                <x-slot name="heading">
                    Abonnement actuel
                </x-slot>

                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                            {{ $currentSubscription->plan->name }}
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">
                            {{ number_format($currentSubscription->plan->price, 2) }} € / mois
                        </p>
                    </div>
                    <div class="text-right">
                        <x-filament::badge :color="$currentSubscription->status === 'active' ? 'success' : 'warning'">
                            {{ ucfirst($currentSubscription->status) }}
                        </x-filament::badge>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Prochaine facturation: {{ $currentSubscription->current_period_end?->format('d/m/Y') ?? 'N/A' }}
                        </p>
                    </div>
                </div>

                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <x-filament::button color="danger" wire:click="cancelSubscription" wire:confirm="Êtes-vous sûr de vouloir annuler votre abonnement ?">
                        Annuler l'abonnement
                    </x-filament::button>
                </div>
            </x-filament::section>
        @endif

        {{-- Plans disponibles --}}
        <x-filament::section>
            <x-slot name="heading">
                Plans disponibles
            </x-slot>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                @foreach($plans as $plan)
                    <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 
                        {{ $currentSubscription && $currentSubscription->plan_id === $plan->plan_id ? 'border-primary-500' : 'border-gray-200 dark:border-gray-700' }}
                        p-6 hover:shadow-lg transition-shadow">
                        
                        @if($currentSubscription && $currentSubscription->plan_id === $plan->plan_id)
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span class="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Plan actuel
                                </span>
                            </div>
                        @endif

                        <div class="text-center">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                                {{ $plan->name }}
                            </h3>
                            <div class="mt-4">
                                <span class="text-4xl font-extrabold text-gray-900 dark:text-white">
                                    {{ number_format($plan->price, 0) }}€
                                </span>
                                <span class="text-gray-500 dark:text-gray-400">/mois</span>
                            </div>
                        </div>

                        <ul class="mt-6 space-y-3">
                            <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <x-heroicon-o-check class="w-5 h-5 text-success-500 mr-2" />
                                {{ $plan->max_sites === -1 ? 'Sites illimités' : $plan->max_sites . ' sites' }}
                            </li>
                            <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <x-heroicon-o-check class="w-5 h-5 text-success-500 mr-2" />
                                {{ $plan->max_widgets === -1 ? 'Widgets illimités' : $plan->max_widgets . ' widgets' }}
                            </li>
                            <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <x-heroicon-o-check class="w-5 h-5 text-success-500 mr-2" />
                                {{ $plan->max_monthly_events === -1 ? 'Événements illimités' : number_format($plan->max_monthly_events) . ' événements/mois' }}
                            </li>
                            <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <x-heroicon-o-check class="w-5 h-5 text-success-500 mr-2" />
                                {{ $plan->max_team_members === -1 ? 'Membres illimités' : $plan->max_team_members . ' membres' }}
                            </li>
                        </ul>

                        <div class="mt-6">
                            @if($currentSubscription && $currentSubscription->plan_id === $plan->plan_id)
                                <x-filament::button color="gray" disabled class="w-full">
                                    Plan actuel
                                </x-filament::button>
                            @else
                                <x-filament::button wire:click="selectPlan({{ $plan->plan_id }})" class="w-full">
                                    Choisir ce plan
                                </x-filament::button>
                            @endif
                        </div>
                    </div>
                @endforeach
            </div>
        </x-filament::section>

        {{-- Historique des factures --}}
        @if($invoices->count() > 0)
            <x-filament::section>
                <x-slot name="heading">
                    Historique des factures
                </x-slot>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Plan</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Montant</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($invoices as $invoice)
                                <tr class="border-b border-gray-100 dark:border-gray-800">
                                    <td class="py-3 px-4 text-gray-900 dark:text-white">
                                        {{ $invoice->created_at->format('d/m/Y') }}
                                    </td>
                                    <td class="py-3 px-4 text-gray-900 dark:text-white">
                                        {{ $invoice->plan->name ?? 'N/A' }}
                                    </td>
                                    <td class="py-3 px-4 text-gray-900 dark:text-white">
                                        {{ number_format($invoice->plan->price ?? 0, 2) }} €
                                    </td>
                                    <td class="py-3 px-4">
                                        <x-filament::badge :color="$invoice->status === 'active' ? 'success' : ($invoice->status === 'canceled' ? 'danger' : 'warning')">
                                            {{ ucfirst($invoice->status) }}
                                        </x-filament::badge>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </x-filament::section>
        @endif
    </div>
</x-filament-panels::page>
