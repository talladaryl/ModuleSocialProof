<?php

namespace Packages\SocialProof\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageSwitcher extends Component
{
    public string $currentLocale;

    public array $locales = [
        'fr' => ['name' => 'Français', 'flag' => '🇫🇷'],
        'en' => ['name' => 'English', 'flag' => '🇬🇧'],
    ];

    public function mount(): void
    {
        $this->currentLocale = Session::get('locale', config('app.locale', 'fr'));
    }

    public function switchLocale(string $locale): void
    {
        if (array_key_exists($locale, $this->locales)) {
            Session::put('locale', $locale);
            App::setLocale($locale);
            
            // Mettre à jour la langue de l'utilisateur si connecté
            $user = auth()->user() ?? auth('client')->user();
            if ($user && method_exists($user, 'update')) {
                $user->update(['language' => $locale]);
            }
            
            $this->currentLocale = $locale;
            $this->redirect(request()->header('Referer', '/'));
        }
    }

    public function render()
    {
        return view('socialproof::components.language-switcher');
    }
}
