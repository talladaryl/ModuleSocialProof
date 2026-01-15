<div x-data="{ open: false }" class="relative">
    <button 
        @click="open = !open" 
        type="button"
        class="flex items-center gap-x-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/5"
    >
        <x-heroicon-o-language class="h-5 w-5" />
        <span class="hidden sm:inline">{{ session('locale', config('app.locale', 'fr')) === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
        <x-heroicon-m-chevron-down class="h-4 w-4 transition-transform" ::class="{ 'rotate-180': open }" />
    </button>

    <div 
        x-show="open" 
        @click.away="open = false"
        x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="transform opacity-0 scale-95"
        x-transition:enter-end="transform opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-75"
        x-transition:leave-start="transform opacity-100 scale-100"
        x-transition:leave-end="transform opacity-0 scale-95"
        class="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10"
        style="display: none;"
    >
        <div class="py-1">
            <a 
                href="{{ route('locale.switch', 'fr') }}"
                class="flex w-full items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/5 {{ session('locale', config('app.locale')) === 'fr' ? 'bg-primary-50 dark:bg-primary-500/10' : '' }}"
            >
                <span>🇫🇷</span>
                <span>Français</span>
                @if(session('locale', config('app.locale')) === 'fr')
                    <x-heroicon-m-check class="ml-auto h-4 w-4 text-primary-500" />
                @endif
            </a>
            <a 
                href="{{ route('locale.switch', 'en') }}"
                class="flex w-full items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/5 {{ session('locale', config('app.locale')) === 'en' ? 'bg-primary-50 dark:bg-primary-500/10' : '' }}"
            >
                <span>🇬🇧</span>
                <span>English</span>
                @if(session('locale', config('app.locale')) === 'en')
                    <x-heroicon-m-check class="ml-auto h-4 w-4 text-primary-500" />
                @endif
            </a>
        </div>
    </div>
</div>
