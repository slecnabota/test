# TopTom Storybook

## Описание проекта

TopTom Storybook - это интерактивная библиотека компонентов UI, разработанная с использованием Nuxt.js, TypeScript, SCSS, и Vite. Этот проект предоставляет разработчикам удобный способ просмотра и тестирования различных компонентов UI перед их интеграцией в приложения. С помощью Storybook вы можете легко настраивать свойства компонентов и наблюдать за изменениями в реальном времени.

## Содержание

- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Установка](#установка)
- [Примеры использования компонентов](#примеры-использования-компонентов)

## Технологии

Проект использует следующие ключевые технологии:

- Nuxt.js
- TypeScript
- SCSS
- Vite

## Начало работы

Для начала работы с проектом убедитесь, что у вас установлены Node.js и npm...

## Установка

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## Quick Setup

1. Add `my-module` dependency to your project

```bash
# Using pnpm
pnpm add -D my-module

# Using yarn
yarn add --dev my-module

# Using npm
npm install --save-dev my-module
```

2. Add `my-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'my-module'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨
