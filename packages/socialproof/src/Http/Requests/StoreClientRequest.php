<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreClientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:sp_clients,email',
            'password' => ['required', 'confirmed', Password::defaults()],
            'company_name' => 'nullable|string|max:191',
            'phone' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'country' => 'nullable|string|size:2',
            'timezone' => 'nullable|string|max:50',
            'language' => 'nullable|string|max:10',
            'currency' => 'nullable|string|size:3',
            'preferences' => 'nullable|array',
            'billing_info' => 'nullable|array',
            'avatar' => 'nullable|string|max:191',
            'status' => 'nullable|in:active,inactive,suspended,pending',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire.',
            'email.required' => 'L\'email est obligatoire.',
            'email.email' => 'L\'email doit être une adresse email valide.',
            'email.unique' => 'Cette adresse email est déjà utilisée.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'country.size' => 'Le code pays doit faire exactement 2 caractères.',
            'currency.size' => 'Le code devise doit faire exactement 3 caractères.',
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('password')) {
            $this->merge([
                'password' => bcrypt($this->password)
            ]);
        }
    }
}