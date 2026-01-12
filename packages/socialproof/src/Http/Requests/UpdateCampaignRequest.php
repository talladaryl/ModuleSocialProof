<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCampaignRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:256',
            'domain' => 'required|string|max:256',
            'domain_id' => 'nullable|exists:sp_domains,domain_id',
            'branding' => 'nullable|array',
            'branding.name' => 'nullable|string|max:64',
            'branding.url' => 'nullable|url|max:256',
            'email_reports' => 'nullable|array',
            'is_enabled' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Campaign name is required.',
            'name.max' => 'Campaign name cannot exceed 256 characters.',
            'domain.required' => 'Domain is required.',
            'domain.max' => 'Domain cannot exceed 256 characters.',
            'branding.name.max' => 'Branding name cannot exceed 64 characters.',
            'branding.url.url' => 'Branding URL must be a valid URL.',
        ];
    }
}