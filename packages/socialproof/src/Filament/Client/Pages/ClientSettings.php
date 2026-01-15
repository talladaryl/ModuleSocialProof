<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Form;
use Filament\Pages\Page;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use BackedEnum;
use UnitEnum;

class ClientSettings extends Page
{
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static string|UnitEnum|null $navigationGroup = 'Account';
    protected static ?string $navigationLabel = 'Paramètres';
    protected static ?int $navigationSort = 3;
    
    protected string $view = 'socialproof::client.pages.settings';

    public ?array $profileData = [];
    public ?array $brandingData = [];
    public ?array $securityData = [];

    public function mount(): void
    {
        $client = Auth::guard('client')->user();
        
        $this->profileData = [
            'name' => $client->name,
            'email' => $client->email,
            'phone' => $client->phone,
            'company' => $client->company,
            'website' => $client->website,
            'country' => $client->country,
            'timezone' => $client->timezone,
            'language' => $client->language,
        ];

        $this->brandingData = [
            'logo' => $client->settings['logo'] ?? null,
            'primary_color' => $client->settings['primary_color'] ?? '#3b82f6',
            'secondary_color' => $client->settings['secondary_color'] ?? '#6b7280',
            'custom_css' => $client->settings['custom_css'] ?? '',
        ];

        $this->securityData = [];
    }

    protected function getForms(): array
    {
        return [
            'profileForm',
            'brandingForm',
            'securityForm',
        ];
    }

    public function profileForm(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nom complet')
                    ->required()
                    ->maxLength(255),
                    
                TextInput::make('email')
                    ->label('Email')
                    ->email()
                    ->required()
                    ->maxLength(255),
                    
                TextInput::make('phone')
                    ->label('Téléphone')
                    ->tel()
                    ->maxLength(20),
                    
                TextInput::make('company')
                    ->label('Entreprise')
                    ->maxLength(255),
                    
                TextInput::make('website')
                    ->label('Site web')
                    ->url()
                    ->maxLength(255),

                Select::make('country')
                    ->label('Pays')
                    ->options([
                        'FR' => 'France',
                        'BE' => 'Belgique',
                        'CH' => 'Suisse',
                        'CA' => 'Canada',
                        'US' => 'États-Unis',
                    ])
                    ->searchable(),
                    
                Select::make('timezone')
                    ->label('Fuseau horaire')
                    ->options([
                        'Europe/Paris' => 'Europe/Paris',
                        'Europe/Brussels' => 'Europe/Brussels',
                        'Europe/Zurich' => 'Europe/Zurich',
                        'America/Montreal' => 'America/Montreal',
                        'America/New_York' => 'America/New_York',
                    ])
                    ->default('Europe/Paris'),
                    
                Select::make('language')
                    ->label('Langue')
                    ->options([
                        'fr' => 'Français',
                        'en' => 'English',
                    ])
                    ->default('fr'),
            ])
            ->columns(2)
            ->statePath('profileData');
    }

    public function brandingForm(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('logo')
                    ->label('Logo')
                    ->image()
                    ->maxSize(2048)
                    ->directory('client-logos'),
                    
                ColorPicker::make('primary_color')
                    ->label('Couleur principale'),
                    
                ColorPicker::make('secondary_color')
                    ->label('Couleur secondaire'),
                    
                Textarea::make('custom_css')
                    ->label('CSS personnalisé')
                    ->rows(6)
                    ->helperText('CSS qui sera appliqué à vos widgets')
                    ->columnSpanFull(),
            ])
            ->columns(2)
            ->statePath('brandingData');
    }

    public function securityForm(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('current_password')
                    ->label('Mot de passe actuel')
                    ->password()
                    ->required(),
                    
                TextInput::make('password')
                    ->label('Nouveau mot de passe')
                    ->password()
                    ->required()
                    ->minLength(8)
                    ->confirmed(),
                    
                TextInput::make('password_confirmation')
                    ->label('Confirmer le mot de passe')
                    ->password()
                    ->required(),
            ])
            ->statePath('securityData');
    }

    public function saveProfile(): void
    {
        $data = $this->profileData;
        $client = Auth::guard('client')->user();
        
        $client->update($data);
        
        Notification::make()
            ->title('Profil mis à jour')
            ->success()
            ->send();
    }

    public function saveBranding(): void
    {
        $data = $this->brandingData;
        $client = Auth::guard('client')->user();
        
        $settings = $client->settings ?? [];
        $settings = array_merge($settings, $data);
        
        $client->update(['settings' => $settings]);
        
        Notification::make()
            ->title('Branding mis à jour')
            ->success()
            ->send();
    }

    public function changePassword(): void
    {
        $data = $this->securityData;
        $client = Auth::guard('client')->user();

        if (!Hash::check($data['current_password'] ?? '', $client->password)) {
            Notification::make()
                ->title('Mot de passe actuel incorrect')
                ->danger()
                ->send();
            return;
        }
        
        $client->update([
            'password' => Hash::make($data['password'])
        ]);
        
        $this->securityData = [];
        
        Notification::make()
            ->title('Mot de passe changé')
            ->success()
            ->send();
    }
}
