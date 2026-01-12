<?php

namespace Packages\SocialProof\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Carbon\Carbon;

class NotificationExtendedService
{
    public function createNotification(array $data): NotificationExtended
    {
        $data['notification_key'] = $this->generateNotificationKey($data['user_id']);

        return NotificationExtended::create($data);
    }

    public function updateNotification(NotificationExtended $notification, array $data): NotificationExtended
    {
        $notification->update($data);
        return $notification->fresh();
    }

    public function duplicateNotification(NotificationExtended $notification): NotificationExtended
    {
        $newNotification = $notification->replicate();
        $newNotification->name = $notification->name . ' - Copy';
        $newNotification->notification_key = $this->generateNotificationKey($notification->user_id);
        $newNotification->is_enabled = false;
        $newNotification->impressions = 0;
        $newNotification->hovers = 0;
        $newNotification->clicks = 0;
        $newNotification->form_submissions = 0;
        $newNotification->save();

        return $newNotification;
    }

    public function getNotificationStatistics(NotificationExtended $notification, Request $request): array
    {
        $startDate = $request->get('start_date', now()->subDays(30)->format('Y-m-d'));
        $endDate = $request->get('end_date', now()->format('Y-m-d'));

        // Get tracking data
        $trackingData = TrackNotification::forNotification($notification->notification_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->selectRaw('
                type,
                COUNT(*) as total,
                DATE(created_at) as date
            ')
            ->groupBy('type', 'date')
            ->orderBy('date')
            ->get();

        // Process chart data
        $chartData = $this->processChartData($trackingData, $startDate, $endDate);

        // Get totals
        $totals = $this->calculateTotals($trackingData);

        // Get top pages
        $topPages = TrackNotification::forNotification($notification->notification_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->selectRaw('
                path,
                type,
                COUNT(*) as total
            ')
            ->groupBy('path', 'type')
            ->orderByDesc('total')
            ->limit(25)
            ->get();

        return [
            'chart_data' => $chartData,
            'totals' => $totals,
            'top_pages' => $topPages,
            'date_range' => [
                'start_date' => $startDate,
                'end_date' => $endDate,
            ],
        ];
    }

    public function resetNotificationStatistics(NotificationExtended $notification, string $startDate, string $endDate): void
    {
        TrackNotification::forNotification($notification->notification_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->delete();

        // Reset counters
        $notification->update([
            'impressions' => 0,
            'hovers' => 0,
            'clicks' => 0,
            'form_submissions' => 0,
        ]);
    }

    public function importConversionData(NotificationExtended $notification, array $data): void
    {
        foreach ($data as $item) {
            TrackConversion::create([
                'user_id' => $notification->user_id,
                'notification_id' => $notification->notification_id,
                'type' => TrackConversion::TYPE_IMPORTED,
                'data' => json_encode($item),
                'url' => null,
                'page_title' => null,
                'location' => null,
            ]);
        }
    }

    public function exportConversionData(NotificationExtended $notification, string $format = 'json')
    {
        $conversions = TrackConversion::forNotification($notification->notification_id)
            ->orderBy('created_at', 'desc')
            ->get();

        $data = $conversions->map(function ($conversion) {
            return [
                'id' => $conversion->id,
                'type' => $conversion->type,
                'data' => $conversion->data,
                'url' => $conversion->url,
                'page_title' => $conversion->page_title,
                'location' => $conversion->location,
                'created_at' => $conversion->created_at->toISOString(),
            ];
        });

        $filename = 'notification_' . $notification->notification_id . '_conversions_' . now()->format('Y-m-d');

        switch ($format) {
            case 'csv':
                return $this->exportToCsv($data, $filename);
            case 'json':
            default:
                return response()->json($data)
                    ->header('Content-Disposition', 'attachment; filename="' . $filename . '.json"');
        }
    }

    private function generateNotificationKey(int $userId): string
    {
        return md5($userId . time() . Str::random(16));
    }

    private function processChartData($trackingData, string $startDate, string $endDate): array
    {
        $chartData = [];
        $period = Carbon::parse($startDate)->daysUntil(Carbon::parse($endDate));

        // Initialize chart data with zeros
        foreach ($period as $date) {
            $dateKey = $date->format('Y-m-d');
            $chartData[$dateKey] = [
                'impression' => 0,
                'hover' => 0,
                'click' => 0,
                'form_submission' => 0,
                'feedback_emoji_angry' => 0,
                'feedback_emoji_sad' => 0,
                'feedback_emoji_neutral' => 0,
                'feedback_emoji_happy' => 0,
                'feedback_emoji_excited' => 0,
                'feedback_score_1' => 0,
                'feedback_score_2' => 0,
                'feedback_score_3' => 0,
                'feedback_score_4' => 0,
                'feedback_score_5' => 0,
            ];
        }

        // Fill with actual data
        foreach ($trackingData as $data) {
            if (isset($chartData[$data->date])) {
                $chartData[$data->date][$data->type] = $data->total;
            }
        }

        return array_values($chartData);
    }

    private function calculateTotals($trackingData): array
    {
        $totals = [
            'impression' => 0,
            'hover' => 0,
            'click' => 0,
            'form_submission' => 0,
            'ctr' => 0,
            'conversions' => 0,
        ];

        foreach ($trackingData as $data) {
            if (isset($totals[$data->type])) {
                $totals[$data->type] += $data->total;
            }
        }

        // Calculate CTR and conversion rate
        if ($totals['impression'] > 0) {
            $totals['ctr'] = ($totals['click'] / $totals['impression']) * 100;
            $totals['conversions'] = ($totals['form_submission'] / $totals['impression']) * 100;
        }

        return $totals;
    }

    private function exportToCsv($data, string $filename)
    {
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $filename . '.csv"',
        ];

        $callback = function () use ($data) {
            $file = fopen('php://output', 'w');

            // Add CSV headers
            if ($data->isNotEmpty()) {
                fputcsv($file, array_keys($data->first()));
            }

            // Add data rows
            foreach ($data as $row) {
                fputcsv($file, $row);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
}