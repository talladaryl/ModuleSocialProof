<?php

require_once 'vendor/autoload.php';

echo "Testing autoload...\n";

try {
    // Test enum
    $group = \Packages\SocialProof\Enums\NavigationGroup::SAAS_MANAGEMENT;
    echo "✓ NavigationGroup enum loaded: " . $group->value . "\n";
    
    // Test service provider
    $provider = new \Packages\SocialProof\SocialProofServiceProvider(app());
    echo "✓ SocialProofServiceProvider loaded\n";
    
    // Test resources
    $teamResource = \Packages\SocialProof\Filament\Resources\TeamResource::class;
    echo "✓ TeamResource loaded: " . $teamResource . "\n";
    
    echo "\n✅ All classes loaded successfully!\n";
    echo "🎉 Autoload is working correctly!\n";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
    echo "📍 File: " . $e->getFile() . ":" . $e->getLine() . "\n";
}