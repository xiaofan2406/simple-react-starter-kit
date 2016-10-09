# React Starter Kit
[![Build Status](https://travis-ci.org/xiaofan2406/react-starter-kit.svg?branch=master)](https://travis-ci.org/xiaofan2406/react-starter-kit) [![dependencies Status](https://david-dm.org/xiaofan2406/react-starter-kit/status.svg)](https://david-dm.org/xiaofan2406/react-starter-kit) [![devDependencies Status](https://david-dm.org/xiaofan2406/react-starter-kit/dev-status.svg)](https://david-dm.org/xiaofan2406/react-starter-kit?type=dev)


### Get Started
- Install dependencies
```
npm i
```

- Run dev server
```
npm run dev
```

- Build for production (build only, no server setup)
```
npm run build
```


### Details
- ##### CSS
using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css files into one

- ##### CSS Modules
NOT enabled

- ##### PostCSS
using [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)

- ##### Hot Module Replacement
  - CSS will hot reload
  - Class Components will hot reload
  - Functional Components will refresh the page


### Branches
- [redux](https://github.com/xiaofan2406/react-starter-kit/tree/redux)
- [mobx](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)
- [electron](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


### Folders
- `config`: webpack and babel configuration files
- `public`: static files are not directly server by webpack like the index.html and favicon
- `scripts`: scripts for build process and dev server
- `src`: source files directory, processed by webpack


### Disclosure
- Many scripts and config are updated according to [create-react-app](https://github.com/facebookincubator/create-react-app)
