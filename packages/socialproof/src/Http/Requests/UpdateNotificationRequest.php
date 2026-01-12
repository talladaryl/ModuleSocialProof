<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNotificationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'widget_id' => 'sometimes|required|exists:sp_widgets,widget_id',
            'campaign_id' => 'nullable|exists:sp_campaigns,campaign_id',
            'type' => 'sometimes|required|in:purchase,signup,visit,custom',
            'title' => 'sometimes|required|string|max:191',
            'message' => 'sometimes|required|string|max:1000',
            'image_url' => 'nullable|url|max:500',
            'link_url' => 'nullable|url|max:500',
            'link_text' => 'nullable|string|max:100',
            'customer_name' => 'nullable|string|max:191',
            'customer_email' => 'nullable|email|max:191',
            'customer_location' => 'nullable|string|max:191',
            'product_name' => 'nullable|string|max:191',
            'product_price' => 'nullable|numeric|min:0',
            'currency' => 'nullable|string|size:3',
            'timestamp' => 'nullable|date',
            'display_duration' => 'nullable|integer|min:1|max:60',
            'priority' => 'nullable|integer|min:1|max:10',
            'targeting_rules' => 'nullable|array',
            'custom_data' => 'nullable|array',
            'is_active' => 'boolean',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'widget_id.required' => 'Le widget est obligatoire.',
            'widget_id.exists' => 'Le widget sélectionné n\'existe pas.',
            'campaign_id.exists' => 'La campagne sélectionnée n\'existe pas.',
            'type.required' => 'Le type de notification est obligatoire.',
            'type.in' => 'Le type doit être : purchase, signup, visit ou custom.',
            'title.required' => 'Le titre est obligatoire.',
            'message.required' => 'Le message est obligatoire.',
            'image_url.url' => 'L\'URL de l\'image doit être valide.',
            'link_url.url' => 'L\'URL du lien doit être valide.',
            'customer_email.email' => 'L\'email du client doit être valide.',
            'product_price.numeric' => 'Le prix du produit doit être un nombre.',
            'currency.size' => 'La devise doit faire exactement 3 caractères.',
            'display_duration.min' => 'La durée d\'affichage doit être au minimum 1 seconde.',
            'display_duration.max' => 'La durée d\'affichage ne peut pas dépasser 60 secondes.',
            'priority.min' => 'La priorité doit être au minimum 1.',
            'priority.max' => 'La priorité ne peut pas dépasser 10.',
        ];
    }
}