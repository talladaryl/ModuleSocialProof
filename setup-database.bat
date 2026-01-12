@echo off
echo Configuration de la base de données SocialProof...

echo.
echo 1. Création de la base de données MySQL...
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS socialproof CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

echo.
echo 2. Exécution des migrations...
php artisan migrate

echo.
echo 3. Exécution des seeders...
php artisan db:seed

echo.
echo 4. Création du lien de stockage...
php artisan storage:link

echo.
echo 5. Optimisation de l'application...
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo.
echo Configuration terminée !
echo Vous pouvez maintenant démarrer le serveur avec: php artisan serve
pause