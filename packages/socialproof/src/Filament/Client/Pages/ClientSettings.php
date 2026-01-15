<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Forms;
use Filament\Forms\Form;
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
        
        $this->profileForm->fill([
            'name' => $client->name,
            'email' => $client->email,
            'phone' => $client->phone,
            'company' => $client->company,
            'website' => $client->website,
            'country' => $client->country,
            'timezone' => $client->timezone,
            'language' => $client->language,
        ]);

        $this->brandingForm->fill([
            'logo' => $client->settings['logo'] ?? null,
            'primary_color' => $client->settings['primary_color'] ?? '#3b82f6',
            'secondary_color' => $client->settings['secondary_color'] ?? '#6b7280',
            'custom_css' => $client->settings['custom_css'] ?? '',
        ]);
    }

    protected function getForms(): array
    {
        return [
            'profileForm',
            'brandingForm',
            'securityForm',
        ];
    }

    public function profileForm(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations personnelles')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom complet')
                            ->required()
                            ->maxLength(255),
                            
                        Forms\Components\TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                            
                        Forms\Components\TextInput::make('phone')
                            ->label('Téléphone')
                            ->tel()
                            ->maxLength(20),
                            
                        Forms\Components\TextInput::make('company')
                            ->label('Entreprise')
                            ->maxLength(255),
                            
                        Forms\Components\TextInput::make('website')
                            ->label('Site web')
                            ->url()
                            ->maxLength(255),
                    ])
                    ->columns(2),
                    
                Forms\Components\Section::make('Localisation')
                    ->schema([
                        Forms\Components\Select::make('country')
                            ->label('Pays')
                            ->options([
                                'FR' => 'France',
                                'BE' => 'Belgique',
                                'CH' => 'Suisse',
                                'CA' => 'Canada',
                                'US' => 'États-Unis',
                            ])
                            ->searchable(),
                            
                        Forms\Components\Select::make('timezone')
                            ->label('Fuseau horaire')
                            ->options([
                                'Europe/Paris' => 'Europe/Paris',
                                'Europe/Brussels' => 'Europe/Brussels',
                                'Europe/Zurich' => 'Europe/Zurich',
                                'America/Montreal' => 'America/Montreal',
                                'America/New_York' => 'America/New_York',
                            ])
                            ->default('Europe/Paris'),
                            
                        Forms\Components\Select::make('language')
                            ->label('Langue')
                            ->options([
                                'fr' => 'Français',
                                'en' => 'English',
                            ])
                            ->default('fr'),
                    ])
                    ->columns(3),
            ])
            ->statePath('profileData');
    }

    public function brandingForm(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Branding')
                    ->schema([
                        Forms\Components\FileUpload::make('logo')
                            ->label('Logo')
                            ->image()
                            ->maxSize(2048)
                            ->directory('client-logos'),
                            
                        Forms\Components\ColorPicker::make('primary_color')
                            ->label('Couleur principale'),
                            
                        Forms\Components\ColorPicker::make('secondary_color')
                            ->label('Couleur secondaire'),
                            
                        Forms\Components\Textarea::make('custom_css')
                            ->label('CSS personnalisé')
                            ->rows(10)
                            ->helperText('CSS qui sera appliqué à vos widgets'),
                    ]),
            ])
            ->statePath('brandingData');
    }

    public function securityForm(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Changer le mot de passe')
                    ->schema([
                        Forms\Components\TextInput::make('current_password')
                            ->label('Mot de passe actuel')
                            ->password()
                            ->required()
                            ->currentPassword('client'),
                            
                        Forms\Components\TextInput::make('password')
                            ->label('Nouveau mot de passe')
                            ->password()
                            ->required()
                            ->minLength(8)
                            ->confirmed(),
                            
                        Forms\Components\TextInput::make('password_confirmation')
                            ->label('Confirmer le mot de passe')
                            ->password()
                            ->required(),
                    ]),
            ])
            ->statePath('securityData');
    }

    public function saveProfile(): void
    {
        $data = $this->profileForm->getState();
        $client = Auth::guard('client')->user();
        
        $client->update($data);
        
        Notification::make()
            ->title('Profil mis à jour')
            ->success()
            ->send();
    }

    public function saveBranding(): void
    {
        $data = $this->brandingForm->getState();
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
        $data = $this->securityForm->getState();
        $client = Auth::guard('client')->user();
        
        $client->update([
            'password' => Hash::make($data['password'])
        ]);
        
        $this->securityForm->fill([]);
        
        Notification::make()
            ->title('Mot de passe changé')
            ->success()
            ->send();
    }
}
