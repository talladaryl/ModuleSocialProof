# SocialProof Admin Dashboard

## 🚀 Accès aux Dashboards

### Panel Admin Principal (Complet)
```
http://votre-domaine.com/admin/socialproof
```
Ce panel contient toutes les ressources admin avec navigation groupée.

### Panel SocialProof (Simplifié)
```
http://votre-domaine.com/socialproof-admin
```
Panel simplifié avec les ressources de base.

### Authentification
Le panel admin utilise le guard `web` de Laravel. Vous devez être connecté avec un utilisateur Laravel standard.

---

## 📋 Commandes à exécuter

### 1. Générer la clé d'application (si pas encore fait)
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

### 4. Créer un utilisateur admin
```bash
php artisan tinker
```
Puis dans tinker :
```php
\App\Models\User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
    'email_verified_at' => now(),
]);
```

### 5. Publier les assets Filament (si nécessaire)
```bash
php artisan filament:assets
```

### 6. Vider le cache
```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear
```

### 7. Lancer le serveur
```bash
php artisan serve
```

---

## 🗂️ Structure du Dashboard Admin

### Navigation

| Groupe | Ressources |
|--------|------------|
| **Dashboard** | Vue d'ensemble avec statistiques |
| **Clients & Abonnements** | Clients, Abonnements, Plans |
| **Sites & Teams** | Sites, Teams, Membres, Domaines |
| **Social Proof** | Widgets, Campagnes, Notifications, Handlers |
| **Templates & Règles** | Templates, Règles d'affichage |
| **Tracking & Analytics** | Événements, Track Notifications, Conversions, Logs |
| **API & Sécurité** | Clés API, IPs Bannies |
| **Système** | Audit Logs, Quotas |

---

## 📊 Widgets du Dashboard

1. **Stats Overview** - Clients actifs, MRR, Events du jour, Widgets actifs, Conversions, API Keys
2. **Revenue Chart** - Graphique des revenus sur 12 mois
3. **Top Clients** - Liste des meilleurs clients
4. **Recent Events** - Événements récents

---

## 🔧 Configuration

### Fichier de configuration
Le panel est configuré dans :
```
packages/socialproof/src/Filament/Admin/AdminPanelProvider.php
```

### Personnalisation des couleurs
```php
->colors([
    'primary' => Color::Indigo,
    'danger' => Color::Rose,
    'success' => Color::Emerald,
    'warning' => Color::Amber,
    'info' => Color::Sky,
])
```

### Groupes de navigation
```php
->navigationGroups([
    'Dashboard',
    'Clients & Abonnements',
    'Sites & Teams',
    'Social Proof',
    'Templates & Règles',
    'Tracking & Analytics',
    'API & Sécurité',
    'Système',
])
```

---

## 🛡️ Sécurité

### Middleware appliqués
- Authentification Laravel standard
- CSRF Protection
- Session encryption

### Pour ajouter une restriction super_admin
Modifiez `AdminPanelProvider.php` :
```php
->authMiddleware([
    Authenticate::class,
])
// Ajoutez après :
->authorization(fn () => auth()->user()?->is_super_admin)
```

---

## 📝 Ressources disponibles

| Table | Resource | Actions |
|-------|----------|---------|
| sp_clients | ClientResource | CRUD + Suspend/Activate |
| sp_subscriptions | SubscriptionResource | CRUD + Cancel |
| sp_plans | PlanResource | CRUD + Duplicate |
| sp_sites | SiteResource | CRUD + Verify |
| sp_teams | TeamResource | CRUD + Members |
| sp_team_members | TeamMemberResource | CRUD + Activate |
| sp_widgets | WidgetResource | CRUD + Activate/Pause |
| sp_campaigns | CampaignResource | CRUD + Activate |
| sp_notifications_extended | NotificationExtendedResource | CRUD + Activate/Pause |
| sp_templates | TemplateResource | CRUD + Duplicate |
| sp_display_rules | DisplayRuleResource | CRUD + Toggle |
| sp_events | EventResource | View + Delete + Cleanup |
| sp_track_notifications | TrackNotificationResource | View + Delete |
| sp_track_conversions | ConversionResource | View + Delete |
| sp_track_logs | LogResource | View + Delete + Cleanup |
| sp_api_keys | ApiKeyResource | CRUD + Revoke |
| sp_domains | DomainResource | CRUD + Verify |
| sp_notification_handlers | NotificationHandlerResource | CRUD + Test |
| sp_audit_logs | AuditLogResource | View + Cleanup |
| sp_quotas_usage | QuotaUsageResource | CRUD + Reset |
| sp_banned_ips | BannedIpResource | CRUD + Unban |

---

## 🔄 Actions Business disponibles

- **Clients** : Activation, Suspension
- **Abonnements** : Annulation
- **Plans** : Duplication
- **Sites** : Vérification de domaine
- **Widgets** : Activation, Mise en pause
- **Templates** : Duplication, Mise en avant
- **API Keys** : Révocation
- **IPs** : Bannissement, Débannissement
- **Quotas** : Reset
- **Logs** : Nettoyage automatique (30/90 jours)

---

## ⚡ Filament 4

Ce dashboard utilise Filament 4 avec :
- `Filament\Schemas\Schema` pour les formulaires
- `Filament\Schemas\Components\Section` pour les sections
- Actions modernes avec `Filament\Actions\*`
- Support des badges de navigation
- Notifications en base de données

---

## 🐛 Dépannage

### Le panel ne s'affiche pas
1. Vérifiez que le ServiceProvider est enregistré
2. Vérifiez les routes : `php artisan route:list | grep socialproof`
3. Vérifiez le cache : `php artisan config:clear`

### Erreur de namespace
Assurez-vous que le namespace dans `composer.json` est correct :
```json
"autoload": {
    "psr-4": {
        "Packages\\SocialProof\\": "packages/socialproof/src/"
    }
}
```
Puis : `composer dump-autoload`

### Erreur de migration
```bash
php artisan migrate:fresh --path=packages/socialproof/database/migrations
```
