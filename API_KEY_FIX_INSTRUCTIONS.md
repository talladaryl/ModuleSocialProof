# Correction des colonnes manquantes dans sp_api_keys

## 🔍 Problème détecté

La table `sp_api_keys` a des colonnes différentes entre :
- **La migration initiale** : `rate_limit_per_minute`, `status`, `total_requests`, `allowed_ips`, `allowed_domains`
- **Le modèle ApiKey.php** : `rate_limit`, `is_active`, `usage_count`, `ip_whitelist`, `domain_whitelist`

## ✅ Solution créée

J'ai créé la migration `2024_01_01_000054_fix_sp_api_keys_columns.php` qui va :

1. **Ajouter les colonnes manquantes** :
   - `rate_limit` (integer, default 1000)
   - `is_active` (boolean, default true)
   - `usage_count` (bigint, default 0)
   - `ip_whitelist` (json, nullable)
   - `domain_whitelist` (json, nullable)

2. **Migrer les données existantes** :
   - `is_active` ← `status` (active = true, autres = false)
   - `usage_count` ← `total_requests`
   - `ip_whitelist` ← `allowed_ips`
   - `domain_whitelist` ← `allowed_domains`

## 🚀 Exécution

### Option 1 : Exécuter la migration (RECOMMANDÉ)

```bash
php artisan migrate
```

### Option 2 : Correction manuelle dans phpMyAdmin

Si la migration échoue, exécutez ces commandes SQL :

```sql
-- Ajouter les colonnes manquantes
ALTER TABLE sp_api_keys 
ADD COLUMN rate_limit INT DEFAULT 1000 AFTER permissions,
ADD COLUMN is_active TINYINT(1) DEFAULT 1 AFTER rate_limit,
ADD COLUMN usage_count BIGINT DEFAULT 0 AFTER is_active,
ADD COLUMN ip_whitelist J;

-- Mip_whitelistULL AFTER i JSON N_whitelistN domainCOLUMunt,
ADD TER usage_coSON NULL AF