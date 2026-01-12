<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Template;
use SocialProof\Http\Requests\StoreTemplateRequest;
use SocialProof\Http\Requests\UpdateTemplateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class TemplateController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $templates = Template::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%");
            })
            ->when($request->type, function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->category, function ($query, $category) {
                $query->where('category', $category);
            })
            ->when($request->has('is_active'), function ($query) use ($request) {
                $query->where('is_active', $request->boolean('is_active'));
            })
            ->when($request->has('is_premium'), function ($query) use ($request) {
                $query->where('is_premium', $request->boolean('is_premium'));
            })
            ->orderBy($request->get('sort', 'sort_order'), $request->get('direction', 'asc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($templates);
        }

        return view('socialproof::admin.templates.index', compact('templates'));
    }

    public function show(Template $template): View|JsonResponse
    {
        if (request()->expectsJson()) {
            return response()->json($template);
        }

        return view('socialproof::admin.templates.show', compact('template'));
    }

    public function create(): View
    {
        return view('socialproof::admin.templates.create');
    }

    public function store(StoreTemplateRequest $request): JsonResponse
    {
        $template = Template::create($request->validated());

        return response()->json([
            'message' => 'Template créé avec succès',
            'template' => $template
        ], 201);
    }

    public function edit(Template $template): View
    {
        return view('socialproof::admin.templates.edit', compact('template'));
    }

    public function update(UpdateTemplateRequest $request, Template $template): JsonResponse
    {
        $template->update($request->validated());

        return response()->json([
            'message' => 'Template mis à jour avec succès',
            'template' => $template->fresh()
        ]);
    }

    public function destroy(Template $template): JsonResponse
    {
        // Vérifier si le template est utilisé
        if ($template->widgets()->exists()) {
            return response()->json([
                'message' => 'Impossible de supprimer un template utilisé par des widgets'
            ], 422);
        }

        $template->delete();

        return response()->json([
            'message' => 'Template supprimé avec succès'
        ]);
    }

    public function duplicate(Template $template): JsonResponse
    {
        $newTemplate = $template->replicate();
        $newTemplate->name = $template->name . ' (Copie)';
        $newTemplate->slug = $template->slug . '-copy-' . time();
        $newTemplate->is_active = false;
        $newTemplate->save();

        return response()->json([
            'message' => 'Template dupliqué avec succès',
            'template' => $newTemplate
        ]);
    }

    public function updateStatus(Request $request, Template $template): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean'
        ]);

        $template->update(['is_active' => $request->is_active]);

        return response()->json([
            'message' => 'Statut du template mis à jour avec succès',
            'template' => $template->fresh()
        ]);
    }

    public function reorder(Request $request): JsonResponse
    {
        $request->validate([
            'templates' => 'required|array',
            'templates.*.id' => 'required|exists:sp_templates,template_id',
            'templates.*.sort_order' => 'required|integer|min:0'
        ]);

        foreach ($request->templates as $templateData) {
            Template::where('template_id', $templateData['id'])
                ->update(['sort_order' => $templateData['sort_order']]);
        }

        return response()->json([
            'message' => 'Ordre des templates mis à jour avec succès'
        ]);
    }

    public function preview(Template $template): JsonResponse
    {
        return response()->json([
            'html' => $template->html_content,
            'css' => $template->css_content,
            'js' => $template->js_content,
            'preview_data' => $template->preview_data
        ]);
    }
}