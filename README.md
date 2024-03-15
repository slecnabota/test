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

## Development

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

1. Add `@toptom/uikit-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @toptom/uikit-nuxt

# Using yarn
yarn add --dev @toptom/uikit-nuxt

# Using npm
npm install --save-dev @toptom/uikit-nuxt
```

2. Add `@toptom/uikit-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@toptom/uikit-nuxt'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨


### Примеры использования компонентов
Компонент AppBadge — это компонент Vue, который отображает бейдж с заданными параметрами, такими как размер, статус, метка и вторичный стиль отображения. Эти параметры настраиваются через пропсы компонента.
Вот простой пример того, как вы можете использовать AppBadge в вашем проекте:
#### AppBadge
```bash
 <AppBadge size="l" status="info" label="Status text" :isSecondary="true" />
```
![image](https://github.com/slecnabota/test/assets/85954194/33854416-7f66-4831-b8c9-286fe6f171bb)


