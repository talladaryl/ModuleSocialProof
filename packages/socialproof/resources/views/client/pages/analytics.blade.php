<x-filament-panels::page>
    <div class="space-y-6">
        {{-- Sélecteur de période --}}
        <div class="flex justify-end">
            <x-filament::input.wrapper>
                <x-filament::input.select wire:model.live="period">
                    <option value="7">7 derniers jours</option>
                    <option value="30">30 derniers jours</option>
                    <option value="90">90 derniers jours</option>
                </x-filament::input.select>
            </x-filament::input.wrapper>
        </div>

        {{-- Statistiques générales --}}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <x-filament::section>
                <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {{ number_format($stats['total_notifications'] ?? 0) }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Notifications diffusées
                    </div>
                </div>
            </x-filament::section>

            <x-filament::section>
                <div class="text-center">
                    <div class="text-3xl font-bold text-success-600 dark:text-success-400">
                        {{ number_format($stats['total_conversions'] ?? 0) }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Conversions
                    </div>
                </div>
            </x-filament::section>

            <x-filament::section>
                <div class="text-center">
                    <div class="text-3xl font-bold text-warning-600 dark:text-warning-400">
                        {{ number_format($stats['total_events'] ?? 0) }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Événements
                    </div>
                </div>
            </x-filament::section>

            <x-filament::section>
                <div class="text-center">
                    <div class="text-3xl font-bold {{ ($stats['conversion_rate'] ?? 0) > 2 ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400' }}">
                        {{ $stats['conversion_rate'] ?? 0 }}%
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Taux de conversion
                    </div>
                </div>
            </x-filament::section>
        </div>

        {{-- Graphiques --}}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {{-- Graphique Notifications --}}
            <x-filament::section>
                <x-slot name="heading">
                    Notifications par jour
                </x-slot>
                
                <div class="h-64">
                    <canvas id="notificationsChart"></canvas>
                </div>
            </x-filament::section>

            {{-- Graphique Conversions --}}
            <x-filament::section>
                <x-slot name="heading">
                    Conversions par jour
                </x-slot>
                
                <div class="h-64">
                    <canvas id="conversionsChart"></canvas>
                </div>
            </x-filament::section>
        </div>

        {{-- Événements par type --}}
        @if(!empty($chartData['events_by_type']))
        <x-filament::section>
            <x-slot name="heading">
                Répartition des événements par type
            </x-slot>
            
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                @foreach($chartData['events_by_type'] as $type => $count)
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                        <div class="text-xl font-bold text-gray-900 dark:text-white">
                            {{ number_format($count) }}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400 capitalize">
                            {{ $type }}
                        </div>
                    </div>
                @endforeach
            </div>
        </x-filament::section>
        @endif
    </div>

    @push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Graphique Notifications
            const notifCtx = document.getElementById('notificationsChart');
            if (notifCtx) {
                new Chart(notifCtx, {
                    type: 'line',
                    data: {
                        labels: @json($chartData['notifications']['labels'] ?? []),
                        datasets: [{
                            label: 'Notifications',
                            data: @json($chartData['notifications']['data'] ?? []),
                            borderColor: 'rgb(59, 130, 246)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: { beginAtZero: true }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }

            // Graphique Conversions
            const convCtx = document.getElementById('conversionsChart');
            if (convCtx) {
                new Chart(convCtx, {
                    type: 'line',
                    data: {
                        labels: @json($chartData['conversions']['labels'] ?? []),
                        datasets: [{
                            label: 'Conversions',
                            data: @json($chartData['conversions']['data'] ?? []),
                            borderColor: 'rgb(34, 197, 94)',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            fill: true,
                            tension: 0.3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: { beginAtZero: true }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }
        });
    </script>
    @endpush
</x-filament-panels::page>
