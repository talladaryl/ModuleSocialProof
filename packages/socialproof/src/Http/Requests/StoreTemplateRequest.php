<?php

namespace Packages\SocialProof\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTemplateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustez selon vos besoins d'autorisation
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:191',
            'slug' => 'required|string|max:191|unique:sp_templates,slug',
            'description' => 'nullable|string|max:1000',
            'type' => 'required|in:notification,popup,banner,sidebar,floating,inline',
            'category' => 'required|string|max:100',
            'html_content' => 'required|string',
            'css_content' => 'nullable|string',
            'js_content' => 'nullable|string',
            'preview_image' => 'nullable|url|max:500',
            'preview_data' => 'nullable|array',
            'variables' => 'nullable|array',
            'settings_schema' => 'nullable|array',
            'is_premium' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer|min:0',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50',
            'metadata' => 'nullable|array',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom du template est obligatoire.',
            'slug.required' => 'Le slug est obligatoire.',
            'slug.unique' => 'Ce slug est déjà utilisé.',
            'type.required' => 'Le type de template est obligatoire.',
            'type.in' => 'Le type doit être : notification, popup, banner, sidebar, floating ou inline.',
            'category.required' => 'La catégorie est obligatoire.',
            'html_content.required' => 'Le contenu HTML est obligatoire.',
            'preview_image.url' => 'L\'image de prévisualisation doit être une URL valide.',
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('slug')) {
            $this->merge([
                'slug' => \Str::slug($this->slug)
            ]);
        }

        // Nettoyer les tags
        if ($this->has('tags') && is_array($this->tags)) {
            $cleanTags = array_map(function ($tag) {
                return strtolower(trim($tag));
            }, $this->tags);
            
            $this->merge(['tags' => array_filter($cleanTags)]);
        }
    }
}