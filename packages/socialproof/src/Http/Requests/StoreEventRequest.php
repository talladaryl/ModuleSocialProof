<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'site_id' => 'required|exists:sp_sites,site_id',
            'widget_id' => 'nullable|exists:sp_widgets,widget_id',
            'event_type' => 'required|string|max:100',
            'event_name' => 'required|string|max:191',
            'visitor_id' => 'required|string|max:191',
            'session_id' => 'nullable|string|max:191',
            'user_agent' => 'nullable|string|max:500',
            'ip_address' => 'nullable|ip',
            'referrer' => 'nullable|url|max:500',
            'page_url' => 'nullable|url|max:500',
            'page_title' => 'nullable|string|max:191',
            'country' => 'nullable|string|size:2',
            'city' => 'nullable|string|max:100',
            'device_type' => 'nullable|in:desktop,mobile,tablet',
            'browser' => 'nullable|string|max:50',
            'os' => 'nullable|string|max:50',
            'event_data' => 'nullable|array',
            'conversion_value' => 'nullable|numeric|min:0',
            'currency' => 'nullable|string|size:3',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'site_id.required' => 'Le site est obligatoire.',
            'site_id.exists' => 'Le site sélectionné n\'existe pas.',
            'widget_id.exists' => 'Le widget sélectionné n\'existe pas.',
            'event_type.required' => 'Le type d\'événement est obligatoire.',
            'event_name.required' => 'Le nom de l\'événement est obligatoire.',
            'visitor_id.required' => 'L\'ID du visiteur est obligatoire.',
            'ip_address.ip' => 'L\'adresse IP doit être valide.',
            'referrer.url' => 'Le référent doit être une URL valide.',
            'page_url.url' => 'L\'URL de la page doit être valide.',
            'country.size' => 'Le code pays doit faire exactement 2 caractères.',
            'device_type.in' => 'Le type d\'appareil doit être : desktop, mobile ou tablet.',
            'currency.size' => 'La devise doit faire exactement 3 caractères.',
        ];
    }

    protected function prepareForValidation(): void
    {
        // Nettoyer l'IP si elle vient des headers
        if (!$this->has('ip_address') && request()->ip()) {
            $this->merge(['ip_address' => request()->ip()]);
        }

        // Nettoyer le user agent
        if (!$this->has('user_agent') && request()->userAgent()) {
            $this->merge(['user_agent' => request()->userAgent()]);
        }

        // Générer un visitor_id si pas fourni
        if (!$this->has('visitor_id')) {
            $this->merge(['visitor_id' => \Str::uuid()->toString()]);
        }
    }
}