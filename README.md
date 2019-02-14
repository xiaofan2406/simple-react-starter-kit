# React Starter Kit

A simple boilerplate for starting new react projects.

[![CI Status][ci-badge]][ci]
[![Coverage Status][coverage-badge]][coverage]
[![Dependencies Status][dependencies-badge]][dependencies]
[![Styled with prettier][prettier-badge]][prettier]

[ci-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[ci]: https://travis-ci.org/xiaofan2406/react-starter-kit/branches
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/react-starter-kit.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/react-starter-kit/branches
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

## Getting started

```shell
git clone https://github.com/xiaofan2406/react-starter-kit.git
cd react-starter-kit
yarn
yarn dev
```

## Developing

### Built With

- [Emotion](https://emotion.sh/docs/introduction)
- [Reach Router](https://reach.tech/router)
- [CSS reset](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)
- [Create React App](https://github.com/facebook/create-react-app)
- [Jest](https://facebook.github.io/jest)

## Commands

##### Development

```shell
yarn dev # start webpack-dev-server with hot reload enabled

yarn format # format all source code with prettier
```

##### Testing

```shell
yarn test # start jest in watch mode

yarn coverage # report coverage
```

##### Production

```shell
yarn build # create a minified production build

yarn start # start a localhost server serving the production build
```

## Project Structure

| Path                | Import Alias | Description                                   |
| ------------------- | ------------ | --------------------------------------------- |
| **config/**         |              | Project tooling configurations                |
| **src/**            | `src`        | Project source files                          |
| src/**assets/**     | `assets`     | Common static file assets                     |
| src/**components/** | `components` | App components                                |
| src/**styles/**     | `styles`     | Global CSS files and css-in-jss setup/configs |
| src/**utils/**      | `utils`      | Utility helper functions                      |
| src/**widgets/**    | `widgets`    | Share pure presentational UI components       |
