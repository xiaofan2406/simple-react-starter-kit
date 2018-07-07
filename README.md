# React Starter Kit

A simple boilerplate for starting new React projects.

[![CI Status][ci-badge]][ci]
[![Coverage Status][coverage-badge]][coverage]
[![Dependencies Status][dependencies-badge]][dependencies]
[![Styled with prettier][prettier-badge]][prettier]

[ci-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[ci]: https://travis-ci.org/xiaofan2406/react-starter-kit
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/react-starter-kit.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/react-starter-kit
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

## Installing / Getting started

```shell
git clone https://github.com/xiaofan2406/react-starter-kit.git
cd react-starter-kit
yarn
yarn dev
```

## Developing

### Built With

- [Flow](https://flow.org/en/)
- [Emotion](https://github.com/tkh44/emotion)
- [React Router v4](https://reacttraining.com/react-router)
- [Jest](https://facebook.github.io/jest)
- [CSS reset](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)
- [Predictable long term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader/)

### Prerequisites

- [Install `yarn`](https://yarnpkg.com/lang/en/docs/install/)

- Add `flow-typed`
  ```shell
  yarn global add flow-typed
  ```

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

## Branches

- [Redux Integration](https://github.com/xiaofan2406/react-starter-kit/tree/redux)
- [Mobx Integration](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)
- [Electron Integration](https://github.com/xiaofan2406/react-starter-kit/tree/electron)

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
