# SkyproWallet

Приложение-кошелек для управления личными расходами. Позволяет регистрироваться, авторизовываться, добавлять и удалять транзакции, а также анализировать траты за выбранный период с помощью интерактивной диаграммы.

# Установка приложени

1. Установите среду разработки (VS Code, Git).
2. Склонируйте репозиторий:
   git clone "url-репозитория"
3. Перейдите в папку проекта и установите зависимости:
   cd SkyproWallet
   npm install
4. Запустите приложение в режиме разработки:
   npm run dev

# Реализованный функционал

1. Регистрация и авторизация
2. Мои расходы: Таблица всех трат пользователя (описание, категория, дата, сумма).
3. Добавление нового расхода через форму с валидацией (минимальная длина описания, положительная сумма, корректная дата).
4. Удаление расхода по кнопке в строке (десктоп) или через выделение строки и плавающую кнопку (мобильная версия).
5. Адаптивная вёрстка
6. Анализ расходов: Календарь с бесконечной прокруткой месяцев, возможностью выбора диапазона дат и динамическая вертикальная диаграмма (агрегация трат по категориям).
7. Адаптивный хедер: На десктопе – ссылки «Мои расходы», «Анализ расходов», «Выйти», а на мобильных устройствах – кнопка с выпадающим меню, текст кнопки меняется в зависимости от открытой страницы (анализ/расходы/форма добавления).

# Используемые технологии и библиотеки

1. React – основа интерфейса.
2. React Router DOM – маршрутизация, защищённые роуты (ProtectedRoute).
3. Styled Components – стилизация компонентов, адаптивные медиа-запросы.
4. Axios – работа с API (авторизация, транзакции, получение данных за период).
5. ESLint (конфигурация по умолчанию) – проверка качества кода.

Примечание: диаграмма реализована вручную на CSS и React (без сторонних библиотек), календарь – полностью самописный с бесконечным скроллом.

# Структура проекта

public/
├── images/ # изображения
│ ├── Arrow-left.svg
│ ├── Arrow.svg
│ ├── Car.svg
│ ├── Del_deep.svg
│ ├── Del.svg
│ ├── Educat.svg
│ ├── House.svg
│ ├── Logo.svg
│ ├── Other.svg
│ ├── Phone.svg
│ └── Plus.svg
src/
├── assets/ # статические файлы (изображения, шрифты) – не обязательна
├── components/ # переиспользуемые компоненты
│ ├── Calendar/ # календарь (выбор диапазона дат)
│ ├── VerticalBarChart/ # вертикальная диаграмма расходов
│ └── styles/ # общие стили (shared.styled.js)
├── context/ # контекст авторизации (AuthContext, AuthProvider)
├── hooks/ # кастомные хуки (useMediaQuery)
├── pages/ # страницы приложения
│ ├── Analysis/ # анализ расходов (календарь + диаграмма)  
│ ├── Expenses/ # мои расходы (таблица + форма)
│ ├── Header/ # шапка сайта
│ ├── Login/ # вход
│ └── Register/ # авторизация
├── Route/ # компоненты маршрутизации
├── services/ # API-запросы (auth, transactions)
├── utils/ # вспомогательные функции
├── App.jsx # корневой компонент с роутингом
├── GlobalStyles.styled.js # глобальные стили
└── main.jsx # рендер корневого компонента App

# Примеры страниц:

1. /login Вход в аккаунт.
2. /register Регистрация нового пользователя.
3. /expenses Таблица расходов и форма добавления. Для мобильных устройств – переключение через параметр ?view=new.
4. /analysis Анализ трат за выбранный период. На мобильных календарь открывается по кнопке.

# Требования к окружению

1. Node.js 18+
2. npm 9+

# Автор Герасимов Дмитрий

Проект выполнен в рамках курса Skypro. За основу взят макет из Figma. API предоставлено учебной платформой.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
