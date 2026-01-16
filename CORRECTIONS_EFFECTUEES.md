# Corrections effectuées sur les modèles et ressources

## Date: 2026-01-16

### 1. Table `sp_subscriptions`
**Problème**: Colonnes manquantes dans la base de données
**Colonnes ajoutées**:
- `payment_method` (VARCHAR 50)
- `provider_subscription_id` (VARCHAR 191)
- `provider_customer_id` (VARCHAR 191)
- `last_payment_at` (TIMESTAMP)
- `next_payment_at` (TIMESTAMP)

**Migration**: `2024_01_01_000049_add_missing_columns_to_sp_subscriptions.php`
**Statut**: ✅ Corrigé

---

### 2. Table `sp_sites`
**Problème**: Colonnes manquantes dans la base de données
**Colonnes ajoutées**:
- `url` (VARCHAR 255)
- `settings` (JSON)
- `tracking_config` (JSON)
- `verified_at` (TIMESTAMP)
- `last_activity_at` (TIMESTAMP)

**Migration**: `2024_01_01_000050_add_missing_columns_to_sp_sites.php`
**Statut**: ✅ Corrigé

---

### 3. Table `sp_teams`
**Problème**: Structure incohérente (id + team_id UUID) et colonnes manquantes
**Corrections**:
- Suppression de la colonne `team_id` UUID
- Renommage de `id` en `team_id` (BIGINT AUTO_INCREMENT)
- Ajout de `plan_id` (BIGINT)
- Ajout de `slug` (VARCHAR 191 UNIQUE)
- Ajout de `subscription_ends_at` (TIMESTAMP)
- Ajout de `trial_ends_at` (TIMESTAMP)

**Migration**: `2024_01_01_000051_fix_sp_teams_table_structure.php`
**Modèle**: Mise à jour de `protected $primaryKey = 'team_id'`
**Statut**: ✅ Corrigé

---

### 4. Table `sp_notifications`
**Problème**: Erreur lors du changement de BIGINT vers UUID
**Correction**: Migration corrigée pour supprimer l'auto-increment avant de changer le type

**Migration**: `2024_01_01_000048_change_id_to_uuid_in_sp_notifications_table.php`
**Statut**: ✅ Corrigé

---

### 5. Ressource `TeamResource` (Admin)
**Problème**: Champ `client_id` manquant dans le formulaire
**Correction**: Ajout du champ Select pour `client_id` (obligatoire)
**Statut**: ✅ Corrigé

---

### 6. Ressource `ClientResource` (Admin)
**Problème**: Champ `password_confirmation` non géré correctement
**Correction**: 
- Password requis uniquement à la création
- Password_confirmation avec `dehydrated(false)`
- Password avec `dehydrated(fn ($state) => filled($state))`
**Statut**: ✅ Corrigé

---

## Ressources vérifiées et conformes

### ✅ ClientResource
- Modèle: `Client`
- Formulaire: Cohérent avec le modèle
- Champs fillable: Tous présents

### ✅ PlanResource
- Modèle: `Plan`
- Formulaire: Cohérent avec le modèle
- Champs fillable: Tous présents

### ✅ SubscriptionResource
- Modèle: `Subscription`
- Formulaire: Cohérent avec le modèle
- Champs fillable: Tous présents (après migration 000049)

### ✅ SiteResource
- Modèle: `Site`
- Formulaire: Cohérent avec le modèle
- Champs fillable: Tous présents (après migration 000050)

### ✅ TeamResource
- Modèle: `Team`
- Formulaire: Cohérent avec le modèle (après ajout client_id)
- Champs fillable: Tous présents (après migration 000051)

---

## Migrations à exécuter

Pour appliquer toutes les corrections, exécutez:

```bash
php artisan migrate
```

Cela exécutera les migrations:
- 000048: Changement ID notifications en UUID
- 000049: Ajout colonnes manquantes sp_subscriptions
- 000050: Ajout colonnes manquantes sp_sites
- 000051: Correction structure sp_teams

---

## Prochaines étapes recommandées

1. Vérifier les autres ressources admin (Widget, Campaign, etc.)
2. Vérifier les ressources du panel client
3. Tester la création d'enregistrements pour chaque ressource
4. Vérifier les relations entre les modèles
