<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;

class UpdateClientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        $clientId = $this->route('client')->client_id;

        return [
            'name' => 'sometimes|required|string|max:191',
            'email' => [
                'sometimes',
                'required',
                'email',
                'max:191',
                Rule::unique('sp_clients', 'email')->ignore($clientId, 'client_id')
            ],
            'password' => ['sometimes', 'confirmed', Password::defaults()],
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
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'country.size' => 'Le code pays doit faire exactement 2 caractères.',
            'currency.size' => 'Le code devise doit faire exactement 3 caractères.',
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('password') && $this->password) {
            $this->merge([
                'password' => bcrypt($this->password)
            ]);
        }
    }
}