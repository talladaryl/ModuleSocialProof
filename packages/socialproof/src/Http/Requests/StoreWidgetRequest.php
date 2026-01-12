<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWidgetRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'domain' => 'required|string|max:255',
            'settings' => 'sometimes|array',
            'settings.position' => 'sometimes|string|in:bottom-left,bottom-right,top-left,top-right',
            'settings.theme' => 'sometimes|string|in:modern,dark,minimal',
            'settings.animation_duration' => 'sometimes|integer|min:1000|max:10000',
            'settings.display_duration' => 'sometimes|integer|min:1000|max:10000',
            'settings.max_notifications' => 'sometimes|integer|min:1|max:10',
            'settings.enabled_types' => 'sometimes|array',
            'settings.enabled_types.*' => 'string|in:purchase,signup,review,visit',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Widget name is required',
            'domain.required' => 'Domain is required',
            'settings.position.in' => 'Position must be one of: bottom-left, bottom-right, top-left, top-right',
            'settings.theme.in' => 'Theme must be one of: modern, dark, minimal',
        ];
    }
}