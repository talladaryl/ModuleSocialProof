# Instructions pour corriger les erreurs team_id

## ✅ Correction 1: Relations manquantes dans NotificationExtended
**STATUS: CORRIGÉ**

J'ai ajouté les relations manquantes dans le modèle `NotificationExtended.php`:
- `team()` - relation vers Team
- `site()` - relation vers Site

## ⚠️ Correction 2: Structure de la table sp_teams

Les erreurs indiquent que la migration `2024_01_01_000051_fix_sp_teams_table_structure.php` n'a **PAS été exécutée** sur votre base de données.

### Vérification dans phpMyAdmin

1. Ouvrez phpMyAdmin
2. Sélectionnez votre base de données
3. Ouvrez la table `sp_teams`
4. Vérifiez la structure:

**Si vous voyez ces colonnes:**
- `id` (BIGINT, AUTO_INCREMENT, PRIMARY KEY)
- `team_id` (VARCHAR/CHAR UUID)

➡️ **La migration n'a PAS été exécutée**

**Si vous voyez cette colonne:**
- `team_id` (BIGINT, AUTO_INCREMENT, PRIMARY KEY)
- PAS de colonne `id`

➡️ **La migration a été exécutée**

### Solution A: Exécuter la migration (RECOMMANDÉ)

```bash
php artisan migrate
```

Cette commande va:
1. Supprimer la colonne `team_id` UUID
2. Renommer `id` en `team_id`
3. Ajouter les colonnes: `plan_id`, `slug`, `subscription_ends_at`, `trial_ends_at`

### Solution B: Correction manuelle dans phpMyAdmin

Si la migration échoue, suivez ces étapes dans phpMyAdmin:

#### Étape 1: Supprimer la contrainte unique sur team_id
```sql
ALTER TABLE sp_teams DROP INDEX team_id;
```

#### Étape 2: Supprimer la colonne team_id UUID
```sql
ALTER TABLE sp_teams DROP COLUMN team_id;
```

#### Étape 3: Renommer id en team_id
```sql
ALTER TABLE sp_teams CHANGE COLUMN id team_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;
```

#### Étape 4: Ajouter les colonnes manquantes
```sql
ALTER TABLE sp_teams 
ADD COLUMN plan_id BIGINT UNSIGNED NULL AFTER client_id,
ADD COLUMN slug VARCHAR(191) NULL AFTER name,
ADD COLUMN subscription_ends_at TIMESTAMP NULL AFTER settings,
ADD COLUMN trial_ends_at TIMESTAMP NULL AFTER subscription_ends_at;
```

#### Étape 5: Générer des slugs pour les équipes existantes
```sql
UPDATE sp_teams SET slug = LOWER(REPLACE(name, ' ', '-')) WHERE slug IS NULL;
```

#### Étape 6: Rendre slug unique et obligatoire
```sql
ALTER TABLE sp_teams MODIFY slug VARCHAR(191) NOT NULL;
ALTER TABLE sp_teams ADD UNIQUE INDEX unique_slug (slug);
```

#### Étape 7: Ajouter la clé étrangère pour plan_id
```sql
ALTER TABLE sp_teams 
ADD CONSTRAINT fk_sp_teams_plan_id 
FOREIGN KEY (plan_id) REFERENCES sp_plans(plan_id) ON DELETE SET NULL;
```

## 🔍 Vérification finale

Après avoir exécuté la migration ou les commandes SQL, vérifiez que:

1. La table `sp_teams` a une colonne `team_id` (BIGINT, AUTO_INCREMENT)
2. Il n'y a PLUS de colonne `id`
3. Les colonnes `plan_id`, `slug`, `subscription_ends_at`, `trial_ends_at` existent
4. Le slug est unique pour chaque équipe

## 📝 Fichiers modifiés

- ✅ `packages/socialproof/src/Models/NotificationExtended.php` - Ajout des relations team() et site()
- ℹ️ `packages/socialproof/database/migrations/2024_01_01_000051_fix_sp_teams_table_structure.php` - À exécuter

## ⚡ Prochaines étapes

1. Vérifiez la structure de `sp_teams` dans phpMyAdmin
2. Si la migration n'a pas été exécutée, choisissez Solution A ou B
3. Testez la création d'une équipe dans l'interface admin
4. Testez la création d'une notification étendue (le champ Team devrait fonctionner)
