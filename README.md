<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="210" alt="Laravel Logo"></a></p>

## Fudo's Laravel 8 Skeleton
###Features
* [Laravel 8](https://github.com/laravel/laravel/tree/8.x) skeleton
* [BrowserSync](https://browsersync.io/) from the box
* Translation Manager (see below)
* IDE Helper command (see below)
* Migrations without files (migration() method in Models) [(see User model for example)](app/Models/User.php)
* Serve & Watch with concurrently
* SCSS & Media query inline&compressor [(see styles.scss for example)](resources/scss/styles.scss)
* HTTPs/HTTP for localhost
* [helpers.php](app/helpers.php) from the box
* a alias for`php artisan` (only Windows)

### Install
```
npm install
```
```
composer install
```
```
php artisan storage:link
```
```
php artisan migrate:auto
```
### Utils
#### Server & Watch (Laravel Mix):
```
npm run serve
```

#### Run auto migrations:
```
php artisan migrate:auto
```

#### Make model with migration method (Also factory and seeds):
```
a make:amodel
```
All auto migration commands: https://github.com/bastinald/laravel-automatic-migrations

#### IDE Helper generate all (You can also make external tool in PHPStorm and assign bind):
```
npm run ide-helper
```

#### Remake autoloader, and reset other dev cache:
```
composer update
```

### Install to production
* Copy all files to your VDS or hosting machine
* Access by SSH, and run commands from `Install section` (WITHOUT MIGRATIONS!)
* Make .env file and replace `APP_ENV` to `production`
  * Change DB connection and etc
* Run migrations
* Run `npm run prod` for compile js and etc.
* Done!

### Translation manager
Translation manager access at: https://localhost/manage/translations <br>
Config: [config/translation-manager.php](config/translation-manager.php) <br>
By default auth for translations is disabled for LOCAL environment, you can change it in comfig! <br>

All translation manager commands: https://github.com/Tankonyako/laravel-translation-manager/blob/master/readme.md

### Useful stuff
Best collection of useful Laravel packages: https://laravel-news.com/category/packages <br>
Spatie packages (Has MediaLibrary, Comments and other awesome packages): https://spatie.be/docs <br>
One of the best Laravel permission manager library: https://laratrust.santigarcor.me/ <br>
Best phone validator library: https://github.com/Propaganistas/Laravel-Phone <br>
ReCaptcha V2 & V3 validator library: https://github.com/biscolab/laravel-recaptcha <br>
