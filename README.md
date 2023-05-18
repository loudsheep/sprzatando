# Sprzatando 🧹

Platforma łącząca ludzi posiadający srogie hacjendy z ludźmi mającymi ręce i minimum zdolności manualnych, żeby posprzątać.

Sprzątando is a school project that connects people who need cleaning services with those who can provide them. The project aims to improve group work skills by providing students with a real-world problem to solve.

-------
## Installation 💻

#### Requirements:

- PHP and MySQL 🐘🗄️
- [Composer](https://getcomposer.org/) - A Dependency Manager for PHP 🎵
- [Node.js](https://nodejs.org/) - JavaScript runtime environment 🌐


#### To run this project follow these steps:

- Clone the repository to your local machine. 📥
```bash
  git clone https://github.com/loudsheep/sprzatando.git
```

- Install the required dependencies by running the command 📦
```bash
  composer install
```

- Create empty database in your MySQL server. 🏗️

- Copy the ```.env.example``` file to ```.env``` and set the database connection details in the .env file. 📝
```bash
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=created_database_name
  DB_USERNAME=username
  DB_PASSWORD=password
```

- Configure Laravel using commands: ⚙️
```bash
  php artisan key:generate
  php artisan storage:link
  php artisan migrate
```

- Install the front-end dependencies by running the command ```npm install```. If some errors occur run ```npm install --force``` instead. 📥

-------


## Run Locally ▶️

Build the front-end assets

```bash
  npm run build
```

Start the local development server using the command

```bash
  php artisan serve
```

Navigate to http://localhost:8000 in your web browser to view the application. 🔍

-------

## Tech Stack 🛠️

**Client:** React, Inertia.js, styled-components, MUI ⚛️💅

**Server:** PHP, Laravel, MySQL 🐘🔥

-------

## Authors 👥

- [@Enigmo13](https://github.com/Enigmo13)
- [@Kuzdra24](https://github.com/Kuzdra24)
- [@loudsheep](https://www.github.com/loudsheep)
- [@zandalJ](https://github.com/zandalJ)

