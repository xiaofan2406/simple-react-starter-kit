# React Starter Kit
[![Build Status][build-badge]][build] [![Dependencies Status][dependencies-badge]][dependencies]

[build-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/react-starter-kit
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
> A simple boilerplate for starting new React projects.


## Get Started
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

## CSS
#### [Read this](https://github.com/oliviertassinari/a-journey-toward-better-style)

#### JSS
  - using [`react-jss`](https://github.com/cssinjs/react-jss)
  - custom setup at `src/styles/index.js`

#### CSS
  using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css into one file in production


## Details
- ##### [React Router v4](https://react-router.now.sh/)

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
path | import alias | description
--- | --- | ---
`config/` |  | project tooling configuration files
`src/` | `app` | React app source files directory, processed by webpack
`src/components/` | `components` | React components folder
`src/hocs/` | `hocs` | Higher-order components folder
`src/router/` |  | React Router setup and route-level components folder
`src/styles/` | `styles` | JSS setup and global CSS folder
`src/utils/` | `utils` | JavaScript helper functions folder
