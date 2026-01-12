<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubscriptionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'client_id' => 'sometimes|required|exists:sp_clients,client_id',
            'plan_id' => 'sometimes|required|exists:sp_plans,plan_id',
            'status' => 'sometimes|required|in:active,canceled,expired,trial,past_due,suspended',
            'billing_cycle' => 'sometimes|required|in:monthly,yearly',
            'amount' => 'sometimes|required|numeric|min:0|max:999999.99',
            'currency' => 'sometimes|required|string|size:3',
            
            // Dates
            'trial_starts_at' => 'nullable|date',
            'trial_ends_at' => 'nullable|date|after:trial_starts_at',
            'starts_at' => 'sometimes|required|date',
            'ends_at' => 'nullable|date|after:starts_at',
            'canceled_at' => 'nullable|date',
            'next_billing_at' => 'nullable|date',
            
            // Paiement
            'payment_provider' => 'nullable|string|max:50',
            'payment_provider_id' => 'nullable|string|max:191',
            'payment_method_id' => 'nullable|string|max:191',
            'payment_metadata' => 'nullable|array',
            
            // Usage
            'current_period_events' => 'integer|min:0',
            'usage_reset_at' => 'nullable|date',
            
            // Métadonnées
            'metadata' => 'nullable|array',
            'cancellation_reason' => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'client_id.required' => 'Le client est obligatoire.',
            'client_id.exists' => 'Le client sélectionné n\'existe pas.',
            'plan_id.required' => 'Le plan est obligatoire.',
            'plan_id.exists' => 'Le plan sélectionné n\'existe pas.',
            'status.required' => 'Le statut est obligatoire.',
            'status.in' => 'Le statut doit être l\'une des valeurs suivantes : active, canceled, expired, trial, past_due, suspended.',
            'billing_cycle.required' => 'Le cycle de facturation est obligatoire.',
            'billing_cycle.in' => 'Le cycle de facturation doit être mensuel ou annuel.',
            'amount.required' => 'Le montant est obligatoire.',
            'amount.numeric' => 'Le montant doit être un nombre.',
            'currency.required' => 'La devise est obligatoire.',
            'currency.size' => 'La devise doit faire exactement 3 caractères.',
            'starts_at.required' => 'La date de début est obligatoire.',
            'trial_ends_at.after' => 'La fin de l\'essai doit être après le début de l\'essai.',
            'ends_at.after' => 'La date de fin doit être après la date de début.',
        ];
    }
}