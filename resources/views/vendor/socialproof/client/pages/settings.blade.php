<x-filament-panels::page>
    <div class="space-y-6">
        {{-- Formulaire Profil --}}
        <x-filament::section>
            <x-slot name="heading">
                Informations personnelles
            </x-slot>
            
            <form wire:submit="saveProfile">
                {{ $this->profileForm }}
                
                <div class="mt-4">
                    <x-filament::button type="submit">
                        Sauvegarder le profil
                    </x-filament::button>
                </div>
            </form>
        </x-filament::section>

        {{-- Formulaire Branding --}}
        <x-filament::section>
            <x-slot name="heading">
                Branding & Personnalisation
            </x-slot>
            
            <form wire:submit="saveBranding">
                {{ $this->brandingForm }}
                
                <div class="mt-4">
                    <x-filament::button type="submit">
                        Sauvegarder le branding
                    </x-filament::button>
                </div>
            </form>
        </x-filament::section>

        {{-- Formulaire Sécurité --}}
        <x-filament::section>
            <x-slot name="heading">
                Sécurité
            </x-slot>
            
            <form wire:submit="changePassword">
                {{ $this->securityForm }}
                
                <div class="mt-4">
                    <x-filament::button type="submit" color="danger">
                        Changer le mot de passe
                    </x-filament::button>
                </div>
            </form>
        </x-filament::section>
    </div>
</x-filament-panels::page>
