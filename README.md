# Starter Kit - Symfony - React

## Presentation

This starter kit is here to easily start a repository for the projects React - Symfony.

It's symfony website-skeleton project with some additionals library (vite-bundle, symfony UX React, fixtures) and tools to validate code standards.

- GrumPHP, as pre-commit hook, will run 2 tools when `git commit` is run :

  - PHP_CodeSniffer to check PSR12
  - PHPStan focuses on finding errors in your code (without actually running it)
  - PHPmd will check if you follow PHP best practices

  If tests fail, the commit is canceled and a warning message is displayed to developper.

- Github Action as Continuous Integration will be run when a branch with active pull request is updated on github. It will run :

  - Tasks to check if vendor, .idea, env.local are not versionned,
  - PHP_CodeSniffer, PHPStan and PHPmd with same configuration as GrumPHP.

## If you use Docker

### Prerequisites

Check docker is installed

### Install

Clone this project

### Working

Run app in watch mode:

```
make run-dev
```

```
make vite-dev
```

In parallel, follow log output with:

```
make logs-dev
```

## If you don't use Docker

### Prerequisites

1. Check composer is installed
2. Check yarn & node are installed

### Install

1. Clone this project
2. Run `composer install`
3. Run `yarn install`

### Working

1. Run `symfony server:start` to launch your local php web server
2. Run `yarn dev` to launch your local server for assets

### Testing

1. Run `php ./vendor/bin/phpcs` to launch PHP code sniffer
2. Run `php ./vendor/bin/phpstan analyse src --level max` to launch PHPStan
3. Run `php ./vendor/bin/phpmd src text phpmd.xml` to launch PHP Mess Detector
4. Run `./node_modules/.bin/eslint assets/js` to launch ESLint JS linter

### Windows Users

If you develop on Windows, you should edit you git configuration to change your end of line rules with this command:

`git config --global core.autocrlf true`

The `.editorconfig` file in root directory do this for you. You probably need `EditorConfig` extension if your IDE is VSCode.
