<p align="center"><img src="https://travis-ci.org/YagoLopez/react-aframe-typescript-boilerplate.svg?branch=master" title="Build Status" /></p>

# <p align="center" style="text-align: center">React + AFrame + TypeScript Boilerplate</p>

<p align="center"><img src="logo.svg" title="React + AFrame + TypeScript Boilerplate" /></p>

Features:

- [ReactJS](https://code.facebook.com/projects/176988925806765/react/): component architecture, virtual DOM and functional programming

- [A-Frame](https://aframe.io): 3D scenes, Virtual Reality and WebGL (based in [ThreeJS](https://www.threejs.org))

- [TypeScript](https://www.typescriptlang.org): provides a type system for JavaScript

- [React Router](https://reacttraining.com/react-router/): navigation between pages (3D scenes). AFrame library is loaded at the begining just one time not at each page change. Using only AFrame and JavaScript without React-Router, all AFrame code must be loaded at each html page.

- This project is based on [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript). Documentation ([link](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents))

  ​


## Demo

- [Mobile Simulator](http://mobiletest.me/htc_one_emulator/?u=https://yagolopez.js.org/react-aframe-typescript-boilerplate/build/)

- [Full Screen](https://yagolopez.js.org/react-aframe-typescript-boilerplate/build/)

  ​

## Installation, execution and build

- Clone or download the repository

- Using **Yarn**, run in the command line:

  ```shell
  # Install
  $ yarn add

  # Run
  $ yarn start

  # Build
  $ yarn build
  ```


- Using **Npm**:

  ```shell
  # Install
  $ npm install

  # Run
  $ npm start

  # Build
  $ npm build
  ```




## Tests

- Testing Framework: [Jest](https://facebook.github.io/jest/)
- Methodologies:
  - [Smoke Tests](https://en.wikipedia.org/wiki/Smoke_testing_(software))
  - [Snapshot Tests](http://facebook.github.io/jest/docs/en/snapshot-testing.html)
  - [Live testing with BrowserStack](https://www.browserstack.com/)

```shell
# yarn
$ yarn test

# npm
$ npm test
```



## Code Coverage

- [Report](https://yagolopez.js.org/react-aframe-typescript-boilerplate/coverage/lcov-report/index.html)
- Run code-coverage script:

```shell
# yarn
$ yarn yarn_code_coverage

# npm: mutatis mutandi
```



## Analysis of Dependecies

- [Report](https://yagolopez.js.org/react-aframe-typescript-boilerplate/deps/deps.html)
- Run analysis of dependencies script:

```shell
# yarn
$ yarn analize

# npm: mutatis mutandi
```



<p align="center"><a href="#">Back to top &uarr;</a></p>