<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Packages\SocialProof\Models\NotificationExtended;

class StoreNotificationExtendedRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'campaign_id' => 'required|exists:sp_campaigns,campaign_id',
            'name' => 'required|string|max:256',
            'type' => 'required|string|in:' . implode(',', NotificationExtended::getAvailableTypes()),
            'settings' => 'required|array',
            'notifications' => 'nullable|array',
            'is_enabled' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'campaign_id.required' => 'Campaign is required.',
            'campaign_id.exists' => 'Selected campaign does not exist.',
            'name.required' => 'Notification name is required.',
            'name.max' => 'Notification name cannot exceed 256 characters.',
            'type.required' => 'Notification type is required.',
            'type.in' => 'Invalid notification type selected.',
            'settings.required' => 'Notification settings are required.',
        ];
    }
}