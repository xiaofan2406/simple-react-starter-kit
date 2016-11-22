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
  yarn
  ```

- Run dev server
  ```
  yarn run dev
  ```

- Build for production (build only, no server setup yet)
  ```
  yarn run build
  ```

- Test production build
  ```
  yarn global add pushstate-server

  pushstate-server ./build 9000
  ```


## Details

#### [JSS](https://github.com/cssinjs/jss)
  - [Read this](https://github.com/oliviertassinari/a-journey-toward-better-style)
  - Using together with [`react-jss`](https://github.com/cssinjs/react-jss) and [`jss-preset-default`](https://github.com/cssinjs/jss-preset-default)
  - Setup at **src/styles/index.js**
  - Using [classnames](https://github.com/JedWatson/classnames) helper to make conditional class names cleaner

#### CSS
  - Using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css into one file in production
  - No PostCSS, SASS or CSS Module setup
  - Includes a Semantic UI [`reset.css`](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)

#### [React Router v4](https://react-router.now.sh/)
  - Together with [react-router-v4-hocs](https://www.npmjs.com/package/react-router-v4-hocs)

#### Redux
  - See [redux branch](https://github.com/xiaofan2406/react-starter-kit/tree/redux)

#### Mobx
  - See [mobx branch](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)

#### Electron
  - See [electron branch](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


## Development

#### Hot Module Replacement
  - using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/tree/next)
  - JSS, CSS and components are hot reloading

#### ESLint
  - based on [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)


## Folders
Path | Import alias | Description
--- | --- | ---
**config/** |  | project tooling configuration files
**src/** | `app` | React app source files directory, processed by webpack
src/**components/** | `components` | React components folder
src/**hocs/** | `hocs` | Higher-order components folder
src/**router/** |  | React Router setup and route-level components folder
src/**styles/** | `styles` | JSS setup and global CSS folder
src/**utils/** | `utils` | JavaScript helper functions folder
