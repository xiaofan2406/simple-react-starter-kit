# React Starter Kit
[![Styled with prettier][prettier-badge]][prettier] [![Dependencies Status][dependencies-badge]][dependencies] [![Build Status][build-badge]][build] [![Coverage Status][coverage-badge]][coverage]

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

##### CSS
  - No PostCSS, SASS or CSS Module setup
  - Using [`emotion`](https://github.com/tkh44/emotion)
  - Includes a Semantic UI [`reset.css`](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)

##### Code Splitting
  - Base on [Predictable long term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
  - Includes a solution for dynamic import that helps async loading

##### Hot Module Replacement
  - Using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/)

##### Component Testing
  - Using [`jest`](https://facebook.github.io/jest) with setup based on [create-react-app](https://github.com/facebookincubator/create-react-app)

##### [React Router v4](https://reacttraining.com/react-router)

##### Redux
  - See [redux branch](https://github.com/xiaofan2406/react-starter-kit/tree/redux)

##### Mobx
  - See [mobx branch](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)

##### Electron
  - See [electron branch](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


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
- Build the project for production
  ```
  yarn build
  ```
- Start a local server to test production build
  ```
  yarn start
  ```


## Project Structure
Path                | Import Alias | Description
------------------- | ------------ | -------------------------------------------------------
**config/**         |              | Project tooling configuration files
**src/**            | `src`        | Project source files directory
src/**assets/**     | `assets`     | Common static assets directory
src/**components/** | `components` | Components directory
src/**hocs/**       | `hocs`       | Higher-order components directory
src/**router/**     |              | React Router setup and route-level components directory
src/**styles/**     | `styles`     | Global CSS directory
src/**utils/**      | `utils`      | Utility functions directory
src/**widgets/**    | `widgets`    | Small non business logic related components directory
