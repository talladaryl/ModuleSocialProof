<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApiKeyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'client_id' => 'required|exists:sp_clients,client_id',
            'site_id' => 'nullable|exists:sp_sites,site_id',
            'name' => 'required|string|max:191',
            'description' => 'nullable|string|max:1000',
            'permissions' => 'nullable|array',
            'permissions.*' => 'string|in:read,write,delete,admin',
            'rate_limit' => 'nullable|integer|min:1|max:10000',
            'allowed_ips' => 'nullable|array',
            'allowed_ips.*' => 'ip',
            'allowed_domains' => 'nullable|array',
            'allowed_domains.*' => 'string|max:191',
            'expires_at' => 'nullable|date|after:now',
            'is_active' => 'boolean',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'client_id.required' => 'Le client est obligatoire.',
            'client_id.exists' => 'Le client sélectionné n\'existe pas.',
            'site_id.exists' => 'Le site sélectionné n\'existe pas.',
            'name.required' => 'Le nom de la clé API est obligatoire.',
            'name.max' => 'Le nom ne peut pas dépasser 191 caractères.',
            'permissions.array' => 'Les permissions doivent être un tableau.',
            'permissions.*.in' => 'Les permissions doivent être : read, write, delete ou admin.',
            'rate_limit.integer' => 'La limite de taux doit être un nombre entier.',
            'rate_limit.min' => 'La limite de taux doit être au minimum 1.',
            'rate_limit.max' => 'La limite de taux ne peut pas dépasser 10000.',
            'allowed_ips.array' => 'Les IPs autorisées doivent être un tableau.',
            'allowed_ips.*.ip' => 'Chaque IP doit être une adresse IP valide.',
            'allowed_domains.array' => 'Les domaines autorisés doivent être un tableau.',
            'expires_at.after' => 'La date d\'expiration doit être dans le futur.',
        ];
    }

    protected function prepareForValidation(): void
    {
        // Nettoyer les domaines autorisés
        if ($this->has('allowed_domains') && is_array($this->allowed_domains)) {
            $cleanDomains = array_map(function ($domain) {
                return strtolower(trim($domain));
            }, $this->allowed_domains);
            
            $this->merge(['allowed_domains' => array_filter($cleanDomains)]);
        }

        // Définir des permissions par défaut si non spécifiées
        if (!$this->has('permissions')) {
            $this->merge(['permissions' => ['read']]);
        }
    }
}