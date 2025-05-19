# Stage 1: Build the frontend assets
FROM node:18 AS frontend

WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock* package-lock.json* ./

# Install frontend dependencies
RUN if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; fi

# Copy frontend source files
COPY resources/js ./resources/js
COPY resources/css ./resources/css
COPY vite.config.js tailwind.config.js postcss.config.js ./

# Build frontend assets
RUN npm run build


# Stage 2: Prepare the production image
FROM php:8.2-fpm

# Arguments
ARG APP_ENV=production
ARG APP_DEBUG=false

# Environment variables
ENV APP_ENV=${APP_ENV}
ENV APP_DEBUG=${APP_DEBUG}
ENV APP_URL=${APP_URL}
ENV APP_KEY=${APP_KEY}

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    supervisor \
    nginx \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip \
    && pecl install redis && docker-php-ext-enable redis

# Configure PHP
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" && \
    if [ "$APP_DEBUG" = "true" ]; then \
    sed -i "s/display_errors = Off/display_errors = On/" "$PHP_INI_DIR/php.ini"; \
    fi

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Copy built frontend assets
COPY --from=frontend /app/public/build ./public/build

# Install PHP dependencies (after extensions are available)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Save original Laravel storage dir for later copying
RUN cp -r storage /var/www/html/storage-default

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage \
    && chmod -R 775 /var/www/html/bootstrap/cache

# Optional: generate APP_KEY (only if missing)
# RUN if [ -z "$APP_KEY" ]; then php artisan key:generate; fi

# Laravel optimizations
# RUN php artisan optimize:clear && \
#     php artisan optimize && \
#     php artisan view:cache && \
#     php artisan event:cache

# Copy configuration files
COPY docker/nginx.conf /etc/nginx/sites-available/default
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose HTTP port

COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]