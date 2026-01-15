# Configuration SocialProof

## Configuration de l'environnement

### 1. Fichiers d'environnement disponibles

- `.env` - Configuration de production/staging
- `.env.local` - Configuration de développement local (mysql)
- `.env.example` - Modèle de configuration

### 2. Configuration de la base de données

#### Option A: MySQL (Recommandé pour la production)
```bash
# Dans .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=socialproof
DB_USERNAME=root
DB_PASSWORD=votre_mot_de_passe
```

#### Option B: SQLite (Développement local)
```bash
# Dans .env.local
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

### 3. Configuration SocialProof

Les variables spécifiques à SocialProof :

```bash
# Activation du module
SOCIALPROOF_ENABLED=true

# Configuration de la base de données
SOCIALPROOF_DB_CONNECTION=mysql
SOCIALPROOF_DB_PREFIX=sp_

# Configuration des événements
SOCIALPROOF_QUEUE=default
SOCIALPROOF_RETENTION_DAYS=30

# Configuration API
SOCIALPROOF_API_RATE_LIMIT="60,1"
SOCIALPROOF_BROADCASTING_ENABLED=false

# Configuration business
SOCIALPROOF_DEFAULT_PLAN=free
SOCIALPROOF_TRIAL_DAYS=14
SOCIALPROOF_MAX_NOTIFICATIONS_PER_MINUTE=60
SOCIALPROOF_ANALYTICS_ENABLED=true
```

### 4. Configuration des services externes

#### Stripe (Paiements)
```bash
STRIPE_KEY=pk_test_...
STRIPE_SECRET=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### Mail
```bash
# Développement
MAIL_MAILER=log

# Production
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=587
MAIL_USERNAME=votre_username
MAIL_PASSWORD=votre_password
MAIL_ENCRYPTION=tls
```

#### AWS S3 (Stockage de fichiers)
```bash
AWS_ACCESS_KEY_ID=votre_access_key
AWS_SECRET_ACCESS_KEY=votre_secret_key
AWS_DEFAULT_REGION=eu-west-1
AWS_BUCKET=socialproof-uploads
```

## Installation rapide

### 1. Copier le fichier d'environnement
```bash
# Pour le développement
copy .env.local .env

# Pour la production
copy .env.example .env
# Puis éditer .env avec vos valeurs
```

### 2. Installer les dépendances
```bash
composer install
npm install
```

### 3. Configurer la base de données
```bash
# Exécuter le script de configuration
setup-database.bat

# Ou manuellement :
php artisan migrate
php artisan db:seed
```

### 4. Démarrer le serveur
```bash
php artisan serve
npm run dev
```

## Variables d'environnement importantes

| Variable | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `SOCIALPROOF_ENABLED` | Active/désactive le module | `true` |
| `SOCIALPROOF_DB_PREFIX` | Préfixe des tables | `sp_` |
| `SOCIALPROOF_RETENTION_DAYS` | Durée de rétention des données | `30` |
| `SOCIALPROOF_TRIAL_DAYS` | Durée d'essai gratuit | `14` |
| `SOCIALPROOF_MAX_NOTIFICATIONS_PER_MINUTE` | Limite de notifications | `60` |

## Sécurité

- Toujours générer une nouvelle `APP_KEY` pour chaque environnement
- Ne jamais commiter les fichiers `.env` dans le contrôle de version
- Utiliser des mots de passe forts pour la base de données
- Configurer HTTPS en production