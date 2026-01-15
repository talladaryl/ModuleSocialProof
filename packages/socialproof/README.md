# SocialProof - Guide d'accès aux Dashboards

## 🚀 Accès aux Dashboards

### Dashboard Admin
```
http://votre-domaine.com/admin/socialproof
```
Panel d'administration complet pour gérer tous les clients, abonnements et configurations.

**Guard:** `web` (utilisateurs Laravel standard)

### Dashboard Client
```
http://votre-domaine.com/client
```
Panel client pour gérer ses propres sites, widgets et campagnes.

**Guard:** `client` (table `sp_clients`)

---

## 📋 Commandes à exécuter

### 1. Générer la clé d'application
```bash
php artisan key:generate
```

### 2. Créer la base de données SQLite
```bash
# Windows
type nul > database/database.sqlite

# Linux/Mac
touch database/database.sqlite
```

### 3. Exécuter les migrations
```bash
php artisan migrate
```

### 4. Créer un utilisateur Admin
```bash
php artisan tinker
```
```php
\App\Models\User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
    'email_verified_at' => now(),
]);
```

### 5. Créer un compte Client (pour tester le dashboard client)
```bash
php artisan tinker
```
```php
\Packages\SocialProof\Models\Client::create([
    'name' => 'Client Test',
    'email' => 'client@example.com',
    'password' => bcrypt('password'),
    'status' => 'active',
]);
```

### 6. Publier les assets Filament
```bash
php artisan filament:assets
```

### 7. Vider le cache
```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear
```

### 8. Lancer le serveur
```bash
php artisan serve
```

---

## 🔐 Configuration de l'authentification

Dans `config/auth.php`, ajoutez :

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'client' => [
        'driver' => 'session',
        'provider' => 'clients',
    ],
],

'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],
    'clients' => [
        'driver' => 'eloquent',
        'model' => Packages\SocialProof\Models\Client::class,
    ],
],
```

---

## 🗂️ Structure du Dashboard Admin

| Groupe | Ressources |
|--------|------------|
| **Dashboard** | Vue d'ensemble avec statistiques |
| **Clients & Abonnements** | Clients, Abonnements, Plans |
| **Sites & Teams** | Sites, Teams, Membres |
| **Social Proof** | Widgets, Campagnes, Notifications |
| **Templates & Règles** | Templates, Règles d'affichage |
| **Tracking & Analytics** | Événements, Conversions, Logs |
| **API & Sécurité** | Clés API, IPs Bannies |

---

## 🗂️ Structure du Dashboard Client

| Groupe | Pages/Ressources | URL |
|--------|------------------|-----|
| **Dashboard** | Vue d'ensemble | `/client` |
| **Social Proof** | Sites | `/client/client-sites` |
| | Widgets | `/client/client-widgets` |
| | Campagnes | `/client/client-campaigns` |
| | Notifications | `/client/client-notifications` |
| | Templates | `/client/client-templates` |
| | Règles d'affichage | `/client/client-display-rules` |
| **Design** | Widget Builder | `/client/widget-builder` |
| **Tracking** | Analytics | `/client/analytics` |
| | Événements | `/client/client-events` |
| | Conversions | `/client/client-conversions` |
| | Logs Notifications | `/client/client-track-notifications` |
| **Management** | Clés API | `/client/client-api-keys` |
| | Équipe | `/client/client-team-members` |
| **Account** | Abonnement | `/client/client-subscriptions` |
| | Paramètres | `/client/settings` |
| | Facturation | `/client/billing` |

---

## 📊 Widgets du Dashboard Client

1. **ClientStatsWidget** - Widgets actifs, Notifications, Conversions, Taux de clic, Événements
2. **ClientQuotaWidget** - Utilisation des quotas du plan
3. **ClientConversionsChartWidget** - Graphique des conversions sur 30 jours
4. **ClientRecentEventsWidget** - Événements récents

---

## 🔧 Fichiers de configuration

| Dashboard | Fichier |
|-----------|---------|
| Admin | `packages/socialproof/src/Filament/Admin/AdminPanelProvider.php` |
| Client | `packages/socialproof/src/Filament/ClientPanelProvider.php` |

---

## 🐛 Dépannage

### Le dashboard client ne s'affiche pas
1. Vérifiez que le guard `client` est configuré dans `config/auth.php`
2. Vérifiez les routes : `php artisan route:list | grep client`
3. Vérifiez que le ServiceProvider est enregistré

### Erreur "Guard [client] is not defined"
Ajoutez la configuration du guard dans `config/auth.php` (voir section Configuration)

### Erreur de namespace
```bash
composer dump-autoload
```

### Erreur de migration
```bash
php artisan migrate:fresh --path=packages/socialproof/database/migrations
```

---

## ⚡ Filament 4

Ce package utilise Filament 4 avec :
- `Filament\Schemas\Schema` pour les formulaires
- `Filament\Schemas\Components\Section` pour les sections
- Propriétés non-statiques pour les widgets (`$heading`, `$view`, `$pollingInterval`)
- Support des notifications en base de données
