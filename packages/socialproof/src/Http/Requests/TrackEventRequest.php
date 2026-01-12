<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TrackEventRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'type' => 'required|string|in:purchase,signup,review,visit',
            'data' => 'sometimes|array',
            'data.customer_name' => 'sometimes|string|max:255',
            'data.customer_email' => 'sometimes|email|max:255',
            'data.customer_location' => 'sometimes|string|max:255',
            'data.product_name' => 'sometimes|string|max:255',
            'data.rating' => 'sometimes|integer|min:1|max:5',
            'data.count' => 'sometimes|integer|min:1',
        ];
    }

    public function messages(): array
    {
        return [
            'type.required' => 'Event type is required',
            'type.in' => 'Event type must be one of: purchase, signup, review, visit',
            'data.customer_email.email' => 'Customer email must be a valid email address',
            'data.rating.between' => 'Rating must be between 1 and 5',
        ];
    }
}