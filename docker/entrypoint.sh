#!/bin/bash

# If the storage/logs directory doesn't exist (likely a fresh volume), copy default structure
if [ ! -d "/var/www/html/storage/logs" ]; then
    echo "Storage directory missing — copying default Laravel storage directory..."
    cp -r /var/www/html/storage-default/* /var/www/html/storage/
fi

# Ensure correct permissions
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Ensure symlink
php artisan storage:link || true

# Start supervisord
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf