# React Starter Kit
[![Build Status][build-badge]][build] [![Dependencies Status][dependencies-badge]][dependencies]

[build-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/react-starter-kit
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
> A simple boilerplate for starting new React projects.


### Get Started
- Install dependencies
  ```
  npm i
  ```

- Run dev server
  ```
  npm run dev
  ```

- Build for production (build only, no server setup yet)
  ```
  npm run build
  ```


### Details
- ##### [React Router v4](https://react-router.now.sh/)

- ##### JSS
  using [`react-jss`](https://github.com/cssinjs/react-jss)

- ##### CSS
  using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css into one file in production

- ##### Hot Module Replacement
  using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/tree/next)

- ##### Test production build
  ```
  npm i -g pushstate-server
  pushstate-server ./build 9000
  ```


### Branches
- [redux](https://github.com/xiaofan2406/react-starter-kit/tree/redux)
- [mobx](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)
- [electron](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


### Folders
- `config`: webpack configuration files
- `client`: React app source files directory, processed by webpack
