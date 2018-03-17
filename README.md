# React Starter Kit

[![Build Status][build-badge]][build]
[![Coverage Status][coverage-badge]][coverage]
[![Dependencies Status][dependencies-badge]][dependencies]
[![Styled with prettier][prettier-badge]][prettier]

[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
[build-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/react-starter-kit
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/react-starter-kit.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/react-starter-kit

A simple boilerplate for starting new React projects.

## Get Started

```
git clone https://github.com/xiaofan2406/react-starter-kit.git
yarn
yarn dev
```

## Features

* [Flow](https://flow.org/en/)
* [Emotion](https://github.com/tkh44/emotion)
* [React Router v4](https://reacttraining.com/react-router)
* [Jest](https://facebook.github.io/jest)
* [CSS reset](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)
* [Predictable long term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader/)

## Branches

* [Redux Integration](https://github.com/xiaofan2406/react-starter-kit/tree/redux)
* [Mobx Integration](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)
* [Electron Integration](https://github.com/xiaofan2406/react-starter-kit/tree/electron)

## Commands

##### Development

```
yarn dev
```

##### Testing

```
yarn test
```

##### Production

* Create minified production build
  ```
  yarn build
  ```
* Start a local server to test the production build
  ```
  yarn start
  ```

## Project Structure

| Path                | Import Alias | Description                                               |
| ------------------- | ------------ | --------------------------------------------------------- |
| **config/**         |              | Project tooling configurations                            |
| **src/**            | `src`        | Project source files                                      |
| src/**assets/**     | `assets`     | Common static file assets                                 |
| src/**components/** | `components` | Appp components                                           |
| src/**factories/**  | `factories`  | Utility components that help create/render new components |
| src/**styles/**     | `styles`     | Global CSS files and css-in-jss setup/configs             |
| src/**utils/**      | `utils`      | Utility helper functions                                  |
| src/**widgets/**    | `widgets`    | Share pure presentational UI components                   |
