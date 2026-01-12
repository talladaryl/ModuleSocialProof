<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePlanRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        $planId = $this->route('plan')->plan_id;

        return [
            'name' => 'sometimes|required|string|max:100',
            'slug' => [
                'sometimes',
                'required',
                'string',
                'max:100',
                Rule::unique('sp_plans', 'slug')->ignore($planId, 'plan_id')
            ],
            'description' => 'nullable|string',
            'price_monthly' => 'sometimes|required|numeric|min:0|max:999999.99',
            'price_yearly' => 'sometimes|required|numeric|min:0|max:999999.99',
            'currency' => 'sometimes|required|string|size:3',
            'trial_days' => 'sometimes|required|integer|min:0|max:365',
            
            // Limites du plan
            'max_sites' => 'sometimes|required|integer|min:1|max:1000',
            'max_widgets' => 'sometimes|required|integer|min:1|max:1000',
            'max_notifications' => 'sometimes|required|integer|min:1|max:10000',
            'max_monthly_events' => 'sometimes|required|integer|min:1000|max:999999999',
            'max_team_members' => 'sometimes|required|integer|min:1|max:100',
            'max_api_keys' => 'sometimes|required|integer|min:1|max:50',
            
            // Fonctionnalités
            'features' => 'nullable|array',
            'notification_types' => 'nullable|array',
            
            // Configuration
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer|min:0',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom du plan est obligatoire.',
            'slug.required' => 'Le slug est obligatoire.',
            'slug.unique' => 'Ce slug est déjà utilisé.',
            'price_monthly.required' => 'Le prix mensuel est obligatoire.',
            'price_yearly.required' => 'Le prix annuel est obligatoire.',
            'currency.required' => 'La devise est obligatoire.',
            'currency.size' => 'La devise doit faire exactement 3 caractères.',
            'trial_days.required' => 'Le nombre de jours d\'essai est obligatoire.',
            'max_sites.required' => 'Le nombre maximum de sites est obligatoire.',
            'max_widgets.required' => 'Le nombre maximum de widgets est obligatoire.',
            'max_notifications.required' => 'Le nombre maximum de notifications est obligatoire.',
            'max_monthly_events.required' => 'Le nombre maximum d\'événements mensuels est obligatoire.',
            'max_team_members.required' => 'Le nombre maximum de membres d\'équipe est obligatoire.',
            'max_api_keys.required' => 'Le nombre maximum de clés API est obligatoire.',
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('slug')) {
            $this->merge([
                'slug' => \Str::slug($this->slug)
            ]);
        }
    }
}