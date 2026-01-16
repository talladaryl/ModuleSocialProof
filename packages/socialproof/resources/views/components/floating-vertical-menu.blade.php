@php
    $navigation = \Filament\Facades\Filament::getNavigation();
    $currentUrl = request()->url();
    $user = auth()->user() ?? auth('client')->user();
    $userName = $user?->name ?? 'User';
    $userEmail = $user?->email ?? '';
@endphp

{{-- Top Right Actions (Langue + User) --}}
<div class="top-right-actions">
    @livewire('language-switcher')
    
    {{-- User Avatar Button --}}
    <div x-data="{ open: false }" class="relative">
        <button @click="open = !open" type="button" class="action-btn">
            <span class="text-sm font-semibold">{{ strtoupper(substr($userName, 0, 1)) }}</span>
        </button>
        
        {{-- Dropdown Menu --}}
        <div x-show="open" 
             @click.away="open = false"
             x-transition:enter="transition ease-out duration-100"
             x-transition:enter-start="transform opacity-0 scale-95"
             x-transition:enter-end="transform opacity-100 scale-100"
             x-transition:leave="transition ease-in duration-75"
             x-transition:leave-start="transform opacity-100 scale-100"
             x-transition:leave-end="transform opacity-0 scale-95"
             class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50"
             style="display: none;">
            <form method="POST" action="{{ filament()->getLogoutUrl() }}">
                @csrf
                <button type="submit" class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Déconnexion
                </button>
            </form>
        </div>
    </div>
</div>

{{-- Floating Sidebar --}}
<div class="floating-sidebar" id="floating-sidebar">
    <div class="user-section">
        <div class="flex items-center gap-3">
            <div class="user-avatar">{{ strtoupper(substr($userName, 0, 1)) }}</div>
            <div class="flex-1 min-w-0">
                <div class="user-name truncate">{{ $userName }}</div>
                <div class="user-email truncate">{{ $userEmail }}</div>
            </div>
        </div>
    </div>

    <nav class="flex-1">
        @foreach($navigation as $group)
            <div class="nav-group">
                @if($group->getLabel())
                    <div class="nav-group-label">{{ $group->getLabel() }}</div>
                @endif
                @foreach($group->getItems() as $item)
                    @php $isActive = str_contains($currentUrl, $item->getUrl()); @endphp
                    <a href="{{ $item->getUrl() }}" class="nav-item {{ $isActive ? 'active' : '' }}">
                        @if($item->getIcon())
                            <x-filament::icon :icon="$item->getIcon()" class="nav-item-icon"/>
                        @endif
                        <span class="truncate">{{ $item->getLabel() }}</span>
                        @if($badge = $item->getBadge())
                            <span class="nav-badge">{{ $badge }}</span>
                        @endif
                    </a>
                @endforeach
            </div>
        @endforeach
    </nav>

    <div class="nav-divider"></div>
    <div class="quick-actions">
        <form method="POST" action="{{ filament()->getLogoutUrl() }}" class="w-full">
            @csrf
            <button type="submit" class="nav-item w-full text-left hover:text-red-500">
                <svg class="nav-item-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span>Déconnexion</span>
            </button>
        </form>
    </div>
</div>

<button type="button" class="sidebar-toggle fixed left-4 top-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        onclick="document.getElementById('floating-sidebar').classList.toggle('open')">
    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
</button>
<div class="sidebar-overlay" onclick="document.getElementById('floating-sidebar').classList.remove('open')"></div>
