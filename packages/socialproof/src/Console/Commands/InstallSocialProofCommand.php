<?php

namespace Packages\SocialProof\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class InstallSocialProofCommand extends Command
{
    protected $signature = 'socialproof:install {--force : Overwrite existing files}';
    protected $description = 'Install the SocialProof package';

    public function handle()
    {
        $this->info('Installing SocialProof package...');

        // Publish configuration
        $this->call('vendor:publish', [
            '--tag' => 'socialproof-config',
            '--force' => $this->option('force'),
        ]);

        // Publish migrations
        $this->call('vendor:publish', [
            '--tag' => 'socialproof-migrations',
            '--force' => $this->option('force'),
        ]);

        // Publish views
        $this->call('vendor:publish', [
            '--tag' => 'socialproof-views',
            '--force' => $this->option('force'),
        ]);

        // Publish assets
        $this->call('vendor:publish', [
            '--tag' => 'socialproof-assets',
            '--force' => $this->option('force'),
        ]);

        // Run migrations
        if ($this->confirm('Do you want to run the migrations now?')) {
            $this->call('migrate');
        }

        // Create storage directories
        $this->createStorageDirectories();

        // Add to .env if not exists
        $this->updateEnvironmentFile();

        $this->info('SocialProof package installed successfully!');
        $this->line('');
        $this->line('Next steps:');
        $this->line('1. Configure your settings in config/socialproof.php');
        $this->line('2. Add SOCIALPROOF_ENABLED=true to your .env file');
        $this->line('3. Visit /socialproof to start creating campaigns');
    }

    protected function createStorageDirectories()
    {
        $directories = [
            storage_path('app/public/socialproof'),
            storage_path('app/public/socialproof/uploads'),
            storage_path('app/public/socialproof/images'),
            storage_path('app/public/socialproof/audio'),
        ];

        foreach ($directories as $directory) {
            if (!File::exists($directory)) {
                File::makeDirectory($directory, 0755, true);
                $this->line("Created directory: {$directory}");
            }
        }
    }

    protected function updateEnvironmentFile()
    {
        $envPath = base_path('.env');
        
        if (!File::exists($envPath)) {
            return;
        }

        $envContent = File::get($envPath);
        $envVars = [
            'SOCIALPROOF_ENABLED' => 'true',
            'SOCIALPROOF_PIXEL_CACHE' => '3600',
            'SOCIALPROOF_BOT_DETECTION' => 'true',
            'SOCIALPROOF_TRACKING_ENABLED' => 'true',
            'SOCIALPROOF_ANONYMIZE_IP' => 'true',
        ];

        $updated = false;
        foreach ($envVars as $key => $value) {
            if (!str_contains($envContent, $key)) {
                $envContent .= "\n{$key}={$value}";
                $updated = true;
                $this->line("Added {$key} to .env file");
            }
        }

        if ($updated) {
            File::put($envPath, $envContent);
        }
    }
}