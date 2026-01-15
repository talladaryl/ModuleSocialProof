# SocialProof - Documentation d'accès aux Dashboards

## Accès aux Dashboards

### Dashboard Admin
**URL:** `http://votre-domaine.com/admin`

**Authentification:** Guard `web` (utilisateurs Laravel standard)

**Fonctionnalités:**
- Gestion des clients
- Gestion des campagnes
- Gestion des plans d'abonnement
- Statistiques globales (MRR, événements, conversions)
- Monitoring des API Keys

---

### Dashboard Client
**URL:** `http://votre-domaine.com/client`

**Authentification:** Guard `client` (table `clients`)

**Fonctionnalités:**

| Section | URL | Description |
|---------|-----|-------------|
| Dashboard | `/client` | Vue d'ensemble avec statistiques |
| Sites | `/client/client-sites` | Gestion des sites web |
| Widgets | `/client/client-widgets` | Création et gestion des widgets |
| Campagnes | `/client/client-campaigns` | Gestion des campagnes |
| Notifications | `/client/client-notifications` | Configuration des notifications |
| Templates | `/client/client-templates` | Modèles de notifications |
| Règles d'affichage | `/client/client-display-rules` | Conditions d'affichage |
| Événements | `/client/client-events` | Logs des événements trackés |
| Conversions | `/client/client-conversions` | Suivi des conversions |
| Logs Notifications | `/client/client-track-notifications` | Historique des notifications |
| Clés API | `/client/client-api-keys` | Gestion des clés API |
| Équipe | `/client/client-team-members` | Gestion des membres |
| Abonnement | `/client/client-subscriptions` | Détails de l'abonnement |
| Analytics | `/client/analytics` | Statistiques détaillées |
| Widget Builder | `/client/widget-builder` | Constructeur de widgets |
| Paramètres | `/client/settings` | Configuration du compte |
| Facturation | `/client/billing` | Gestion de l'abonnement |

---

## Configuration requise

### 1. Guards d'authentification (`config/auth.php`)

```php
'guards' => [
    'client' => [
        'driver' => 'session',
        'provider' => 'clients',
    ],
],

'providers' => [
    'clients' => [
        'driver' => 'eloquent',
        'model' => Packages\SocialProof\Models\Client::class,
    ],
],
```

### 2. Enregistrement du ServiceProvider

Dans `config/app.php` ou via auto-discovery :
```php
Packages\SocialProof\SocialProofServiceProvider::class,
```

### 3. Publication des assets (optionnel)
```bash
php artisan vendor:publish --tag=socialproof-views
php artisan vendor:publish --tag=socialproof-config
```

---

## Création d'un compte client (pour tests)

```php
use Packages\SocialProof\Models\Client;
use Illuminate\Support\Facades\Hash;

Client::create([
    'name' => 'Test Client',
    'email' => 'client@example.com',
    'password' => Hash::make('password'),
    'status' => 'active',
]);
```

---

## Structure des fichiers

```
packages/socialproof/src/Filament/
├── AdminPanelProvider.php      # Configuration panel Admin
├── ClientPanelProvider.php     # Configuration panel Client
├── Admin/
│   ├── Pages/
│   ├── Resources/
│   └── Widgets/
└── Client/
    ├── Pages/
    ├── Resources/
    └── Widgets/
```
