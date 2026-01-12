# Laravel SocialProof Package

Un package Laravel autonome pour créer et gérer des notifications de preuve sociale en temps réel.

## Fonctionnalités

- 🚀 **Autonome** - Fonctionne indépendamment dans n'importe quel projet Laravel
- 📊 **Dashboard** - Interface d'administration pour gérer les widgets et notifications
- 🎯 **API REST** - Endpoints pour tracker les événements et récupérer les notifications
- 🎨 **Widget JavaScript** - Widget autonome à intégrer sur n'importe quel site
- 🔄 **Temps réel** - Notifications en temps réel avec polling automatique
- 🎭 **Thèmes** - Thèmes personnalisables (clair/sombre)
- 📱 **Responsive** - Compatible mobile et desktop
- 🔒 **Sécurisé** - Validation des domaines et clés API

## Installation

### 1. Installation via Composer

```bash
composer require yourcompany/laravel-socialproof
```

### 2. Installation du package

```bash
php artisan socialproof:install
```

Cette commande va :
- Publier la configuration
- Publier les migrations
- Publier les assets
- Exécuter les migrations

### 3. Configuration

Modifiez le fichier `config/socialproof.php` selon vos besoins :

```php
return [
    'enabled' => true,
    'widget' => [
        'default_position' => 'bottom-left',
        'default_theme' => 'modern',
        'animation_duration' => 5000,
        'display_duration' => 4000,
        'max_notifications' => 5,
    ],
    // ...
];
```

## Utilisation

### 1. Créer un Widget

Accédez au dashboard : `/socialproof`

Créez un nouveau widget en spécifiant :
- Nom du widget
- Domaine autorisé
- Configuration (position, thème, etc.)

### 2. Intégrer le Widget

Copiez le script généré et ajoutez-le à votre site :

```html
<script>
window.socialProofConfig = {
    "apiKey": "sp_your_api_key_here",
    "apiEndpoint": "https://yoursite.com/api/socialproof",
    "position": "bottom-left",
    "theme": "modern"
};
</script>
<script src="https://yoursite.com/vendor/socialproof/js/widget.js" async></script>
```

### 3. Tracker des Événements

#### Via JavaScript (côté client)

```javascript
// Tracker un achat
socialProofWidget.track('purchase', {
    customer_name: 'John Doe',
    product_name: 'iPhone 15',
    customer_location: 'Paris, France'
});

// Tracker une inscription
socialProofWidget.track('signup', {
    customer_name: 'Jane Smith',
    customer_location: 'Lyon, France'
});

// Tracker un avis
socialProofWidget.track('review', {
    customer_name: 'Bob Wilson',
    rating: 5,
    customer_location: 'Marseille, France'
});
```

#### Via API (côté serveur)

```php
use YourCompany\SocialProof\Services\EventEngine;

$eventEngine = app(EventEngine::class);

$eventEngine->trackEvent($widget, 'purchase', [
    'customer_name' => 'John Doe',
    'product_name' => 'iPhone 15',
    'customer_location' => 'Paris, France'
]);
```

## API Endpoints

### Événements

```
POST /api/socialproof/widget/{apiKey}/events
GET  /api/socialproof/widget/{apiKey}/events
```

### Notifications

```
GET  /api/socialproof/widget/{apiKey}/notifications
POST /api/socialproof/widget/{apiKey}/notifications/{id}/displayed
```

### Configuration

```
GET /api/socialproof/widget/{apiKey}/config
GET /api/socialproof/widget/{apiKey}/stats
```

## Types d'Événements

- **purchase** - Achat effectué
- **signup** - Nouvelle inscription
- **review** - Nouvel avis client
- **visit** - Visite de page

## Structure du Package

```
packages/socialproof/
├── src/
│   ├── Models/           # Modèles Eloquent
│   ├── Services/         # Services métier
│   ├── Http/
│   │   ├── Controllers/  # Contrôleurs API et Web
│   │   └── Requests/     # Validation des requêtes
│   ├── Jobs/            # Jobs en arrière-plan
│   └── Console/         # Commandes Artisan
├── config/              # Configuration
├── database/
│   └── migrations/      # Migrations de base de données
├── routes/              # Routes API et Web
├── resources/
│   └── views/           # Vues Blade
├── public/
│   └── js/              # Widget JavaScript
└── tests/               # Tests
```

## Développement

### Tests

```bash
composer test
```

### Linting

```bash
composer lint
```

## Licence

MIT License