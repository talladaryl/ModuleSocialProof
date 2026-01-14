<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Models\Template;

class WidgetBuilder extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-wrench-screwdriver';
    protected static string $view = 'socialproof::client.pages.widget-builder';
    protected static ?string $navigationLabel = 'Widget Builder';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 3;

    public ?array $data = [];
    public string $previewHtml = '';

    public function mount(): void
    {
        $this->form->fill([
            'template_id' => null,
            'site_id' => null,
            'position' => 'bottom-right',
            'primary_color' => '#3b82f6',
            'text_color' => '#ffffff',
            'show_close_button' => true,
            'auto_hide' => true,
            'display_duration' => 5,
            'delay' => 3,
            'frequency' => 30,
        ]);
    }

    public function form(Form $form): Form
    {
        $clientId = Auth::guard('client')->user()->client_id;
        
        return $form
            ->schema([
                Forms\Components\Section::make('Configuration de base')
                    ->schema([
                        Forms\Components\Select::make('template_id')
                            ->label('Template')
                            ->options(Template::pluck('name', 'id'))
                            ->required()
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\Select::make('site_id')
                            ->label('Site')
                            ->options(Site::where('client_id', $clientId)->pluck('name', 'id'))
                            ->required()
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                    ])
                    ->columns(2),
                    
                Forms\Components\Section::make('Apparence')
                    ->schema([
                        Forms\Components\Select::make('position')
                            ->label('Position')
                            ->options([
                                'bottom-left' => 'Bas gauche',
                                'bottom-right' => 'Bas droite',
                                'top-left' => 'Haut gauche',
                                'top-right' => 'Haut droite',
                            ])
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\ColorPicker::make('primary_color')
                            ->label('Couleur principale')
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\ColorPicker::make('text_color')
                            ->label('Couleur du texte')
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                    ])
                    ->columns(3),
                    
                Forms\Components\Section::make('Comportement')
                    ->schema([
                        Forms\Components\Toggle::make('show_close_button')
                            ->label('Bouton fermer')
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\Toggle::make('auto_hide')
                            ->label('Masquage automatique')
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\TextInput::make('display_duration')
                            ->label('Durée d\'affichage (sec)')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(60)
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\TextInput::make('delay')
                            ->label('Délai avant affichage (sec)')
                            ->numeric()
                            ->minValue(0)
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                            
                        Forms\Components\TextInput::make('frequency')
                            ->label('Fréquence (sec)')
                            ->numeric()
                            ->minValue(5)
                            ->live()
                            ->afterStateUpdated(fn () => $this->updatePreview()),
                    ])
                    ->columns(3),
            ])
            ->statePath('data');
    }

    public function updatePreview(): void
    {
        $data = $this->form->getState();
        
        // Générer l'aperçu HTML basé sur les données du formulaire
        $this->previewHtml = $this->generatePreviewHtml($data);
    }

    private function generatePreviewHtml(array $data): string
    {
        if (!isset($data['template_id']) || !$data['template_id']) {
            return '<div class="text-gray-500 text-center p-8">Sélectionnez un template pour voir l\'aperçu</div>';
        }

        $template = Template::find($data['template_id']);
        if (!$template) {
            return '<div class="text-red-500 text-center p-8">Template non trouvé</div>';
        }

        // Simuler des données de notification
        $sampleData = [
            'customer_name' => 'Jean Dupont',
            'product_name' => 'Formation Laravel',
            'amount' => '99.00',
            'currency' => 'EUR',
            'time_ago' => '2 minutes',
            'location' => 'Paris, France',
        ];

        // Remplacer les variables dans le template
        $html = $template->html_content;
        foreach ($sampleData as $key => $value) {
            $html = str_replace('{{' . $key . '}}', $value, $html);
        }

        // Appliquer les styles personnalisés
        $styles = [
            '--primary-color' => $data['primary_color'] ?? '#3b82f6',
            '--text-color' => $data['text_color'] ?? '#ffffff',
        ];

        $styleString = '';
        foreach ($styles as $property => $value) {
            $styleString .= $property . ': ' . $value . '; ';
        }

        return '<div class="widget-preview" style="' . $styleString . '">' . $html . '</div>';
    }

    public function createWidget(): void
    {
        $data = $this->form->getState();
        
        // Rediriger vers la création de widget avec les données pré-remplies
        redirect()->route('filament.client.resources.client-widgets.create', [
            'template_id' => $data['template_id'],
            'site_id' => $data['site_id'],
            'settings' => [
                'position' => $data['position'],
                'primary_color' => $data['primary_color'],
                'text_color' => $data['text_color'],
                'show_close_button' => $data['show_close_button'],
                'auto_hide' => $data['auto_hide'],
                'display_duration' => $data['display_duration'],
                'delay' => $data['delay'],
                'frequency' => $data['frequency'],
            ],
        ]);
    }
}