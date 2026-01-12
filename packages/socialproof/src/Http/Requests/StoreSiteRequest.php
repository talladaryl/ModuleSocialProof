<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSiteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'client_id' => 'required|exists:sp_clients,client_id',
            'name' => 'required|string|max:191',
            'domain' => 'required|string|max:191|unique:sp_sites,domain',
            'url' => 'required|url|max:500',
            'description' => 'nullable|string|max:1000',
            'favicon' => 'nullable|url|max:500',
            'logo' => 'nullable|url|max:500',
            'timezone' => 'nullable|string|max:50',
            'language' => 'nullable|string|max:10',
            'settings' => 'nullable|array',
            'tracking_settings' => 'nullable|array',
            'is_active' => 'boolean',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'client_id.required' => 'Le client est obligatoire.',
            'client_id.exists' => 'Le client sélectionné n\'existe pas.',
            'name.required' => 'Le nom du site est obligatoire.',
            'domain.required' => 'Le domaine est obligatoire.',
            'domain.unique' => 'Ce domaine est déjà utilisé.',
            'url.required' => 'L\'URL est obligatoire.',
            'url.url' => 'L\'URL doit être une URL valide.',
            'favicon.url' => 'Le favicon doit être une URL valide.',
            'logo.url' => 'Le logo doit être une URL valide.',
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('domain')) {
            // Nettoyer le domaine
            $domain = strtolower(trim($this->domain));
            $domain = preg_replace('/^https?:\/\//', '', $domain);
            $domain = preg_replace('/\/.*$/', '', $domain);
            
            $this->merge(['domain' => $domain]);
        }

        if ($this->has('url')) {
            // S'assurer que l'URL a un protocole
            $url = trim($this->url);
            if (!preg_match('/^https?:\/\//', $url)) {
                $url = 'https://' . $url;
            }
            
            $this->merge(['url' => $url]);
        }
    }
}