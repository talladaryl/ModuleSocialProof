<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDomainRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'scheme' => 'required|in:http,https',
            'host' => 'required|string|max:128|unique:sp_domains,host',
            'custom_index_url' => 'nullable|url|max:256',
            'custom_not_found_url' => 'nullable|url|max:256',
            'type' => 'required|integer|in:0,1',
            'is_enabled' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'scheme.required' => 'Scheme is required.',
            'scheme.in' => 'Scheme must be either http or https.',
            'host.required' => 'Host is required.',
            'host.unique' => 'This domain already exists.',
            'host.max' => 'Host cannot exceed 128 characters.',
            'custom_index_url.url' => 'Custom index URL must be a valid URL.',
            'custom_not_found_url.url' => 'Custom not found URL must be a valid URL.',
            'type.required' => 'Domain type is required.',
            'type.in' => 'Invalid domain type selected.',
        ];
    }
}