# Installation du Package SocialProof

## 📋 Résumé

Le package Laravel SocialProof a été créé et intégré dans votre projet. Il est maintenant prêt à être utilisé !

## 🚀 Étapes d'installation

### 1. Autoloader mis à jour
Le package a été ajouté à l'autoloader de Composer dans `composer.json`.

### 2. Service Provider enregistré
Le `SocialProofServiceProvider` a été ajouté dans `bootstrap/providers.php`.

### 3. Structure créée
```
packages/socialproof/
├── src/
│   ├── Models/              # Widget, Event, Notification
│   ├── Services/            # EventEngine, NotificationService, WidgetService
│   ├── Http/Controllers/    # API et Dashboard
│   ├── Jobs/               # ProcessEventJob
│   └── Console/            # InstallSocialProofCommand
├── config/                 # Configuration du package
├── database/migrations/    # Tables sp_widgets, sp_events, sp_notifications
├── routes/                 # API et Web routes
├── resources/views/        # Templates Blade
└── public/js/             # Widget JavaScript
```

## 🔧 Prochaines étapes

### 1. Régénérer l'autoloader
```bash
composer dump-autoload
```

### 2. Installer le package
```bash
php artisan socialproof:install
```

### 3. Exécuter les migrations
```bash
php artisan migrate
```

### 4. Publier les assets
```bash
php artisan vendor:publish --tag=socialproof-assets
```

## 🎯 Utilisation

### 1. Accéder au Dashboard
Visitez `/socialproof` pour créer et gérer vos widgets.

### 2. Créer un Widget
- Nom : "Mon Widget E-commerce"
- Domaine : "monsite.com" ou "*.monsite.com"
- Configuration : position, thème, etc.

### 3. Intégrer le Widget
Copiez le script généré et ajoutez-le à votre site :

```html
<script>
window.socialProofConfig = {
    "apiKey": "sp_your_generated_api_key",
    "apiEndpoint": "/api/socialproof",
    "position": "bottom-left",
    "theme": "modern"
};
</script>
<script src="/vendor/socialproof/js/widget.js" async></script>
```

### 4. Tracker des Événements

#### Via JavaScript (frontend)
```javascript
// Achat
socialProofWidget.track('purchase', {
    customer_name: 'John Doe',
    product_name: 'iPhone 15',
    customer_location: 'Paris, France'
});

// Inscription
socialProofWidget.track('signup', {
    customer_name: 'Jane Smith'
});
```

#### Via PHP (backend)
```php
use YourCompany\SocialProof\Services\EventEngine;

$eventEngine = app(EventEngine::class);
$widget = $widgetService->findByApiKey('sp_your_api_key');

$eventEngine->trackEvent($widget, 'purchase', [
    'customer_name' => 'John Doe',
    'product_name' => 'iPhone 15'
]);
```

## 🔗 Exemples d'intégration

Des routes d'exemple ont été créées dans `routes/socialproof-examples.php` :

```bash
POST /examples/socialproof/track/purchase
POST /examples/socialproof/track/signup  
POST /examples/socialproof/track/review
```

## 📊 API Endpoints

### Widget
- `GET /api/socialproof/widget/{apiKey}/config`
- `GET /api/socialproof/widget/{apiKey}/stats`

### Événements
- `POST /api/socialproof/widget/{apiKey}/events`
- `GET /api/socialproof/widget/{apiKey}/events`

### Notifications
- `GET /api/socialproof/widget/{apiKey}/notifications`
- `POST /api/socialproof/widget/{apiKey}/notifications/{id}/displayed`

## 🎨 Types d'Événements Supportés

- **purchase** : Achat effectué
- **signup** : Nouvelle inscription
- **review** : Nouvel avis client
- **visit** : Visite de page (automatique)

## ⚙️ Configuration

Modifiez `config/socialproof.php` pour personnaliser :
- Durée d'affichage des notifications
- Position par défaut
- Thèmes disponibles
- Types d'événements activés
- Configuration de la queue

## 🔒 Sécurité

- Validation des domaines autorisés
- Clés API uniques par widget
- Rate limiting sur les API
- Validation des données d'entrée

## 📱 Widget JavaScript

Le widget est autonome et inclut :
- Polling automatique des notifications
- Animations fluides
- Thèmes responsive
- Gestion des erreurs
- API publique pour tracking

Le package est maintenant prêt à être utilisé ! 🎉