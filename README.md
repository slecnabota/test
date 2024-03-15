# Интерактивная Библиотека Компонентов UI TopTom

## Описание проекта

UI Kit TopTom - это набор готовых компонентов пользовательского интерфейса, созданный для обеспечения разработчиков и дизайнеров инструментами быстрого и эффективного внедрения современных UI элементов в веб-проекты. Базируясь на проверенных технологиях, таких как Nuxt.js, TypeScript, SCSS и Vite, данный UI Kit упрощает процесс разработки, предоставляя высококачественные, легко настраиваемые компоненты.

## Содержание

- [Технологии](#технологии)
- [Установка](#Development)
- [Быстрая Интеграция](#Быстрая Интеграция)
- [Примеры использования компонентов](#примеры-использования-компонентов)

## Технологии

Проект использует следующие технологии:

- Nuxt.js
- TypeScript
- SCSS
- Vite

## Начало Работы

Перед тем, как начать, убедитесь, что у вас установлены Node.js и npm. Эти инструменты необходимы для работы с UI Kit.

## Установка

```bash
# Установка зависимостей
npm install

# Генерация типов и подготовка к разработке
npm run dev:prepare

# Разработка с использованием игровой площадки (playground)
npm run dev

# Сборка для продакшена
npm run dev:build

# Проверка кода с помощью ESLint
npm run lint

# Тестирование с Vitest
npm run test
npm run test:watch

# Выпуск новой версии
npm run release
```

## Быстрая Интеграция

1. Добавьте зависимость @toptom/uikit-nuxt в ваш проект:

```bash
# Используя pnpm
pnpm add -D @toptom/uikit-nuxt

# Используя yarn
yarn add --dev @toptom/uikit-nuxt

# Используя npm
npm install --save-dev @toptom/uikit-nuxt
```

2. Включите @toptom/uikit-nuxt в раздел modules файла nuxt.config.ts вашего проекта:

```js
export default defineNuxtConfig({
  modules: [
    '@toptom/uikit-nuxt'
  ]
})
```

Теперь вы готовы использовать компоненты UI Kit в вашем приложении Nuxt.

## Примеры использования компонентов

AppBadge - отображает информационный бейдж. Настраивается через параметры, такие как размер, статус и стиль:

#### AppBadge

```bash
 <AppBadge size="l" status="info" label="Status text" :isSecondary="true" />
```
![Badge](https://github.com/slecnabota/test/assets/85954194/31d33277-4548-432d-bb64-637ff0dc6098)

#### AppButton

AppButton - создает кнопку с возможностью выбора размера, типа заливки, цвета и надписи:
```bash
 <AppButton size="m" status="fill" color="main" label="Button label" />
```
![Size=M, Status=Accent, Button=Primary](https://github.com/slecnabota/test/assets/85954194/116691f4-a14c-4656-9f4d-af9ff400fae1)

