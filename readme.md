# Fiora

[![Build Status](https://travis-ci.org/yinxin630/fiora.svg?branch=master)](https://travis-ci.org/yinxin630/fiora)
[![author](https://img.shields.io/badge/author-%E7%A2%8E%E7%A2%8E%E9%85%B1-blue.svg)](http://suisuijiang.com)
[![Node.js Version](https://img.shields.io/badge/node.js-7.0.0-blue.svg)](http://nodejs.org/download)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

Language: [简体中文](readme-zh.md) | [English](readme.md)

Fiora is a web chat application. Made by node.js, koa, react.

## Function

0. Register user, create group, join group, private chat, group chat
0. Support text, image, code, url types of message
0. Desktop notification, sound notification, notification switch
0. Customize avatar, collect expression, customize group announcement
0. Limit message length, message frequency
0. A simple plugin system

## Installation

The project is powered by node.js(>= 7.0) and mongodb database. To install [node.js](https://nodejs.org/en/download/). To install [mongodb](https://docs.mongodb.com/manual/installation/).

0. Clone this repository
`git clone git@github.com:yinxin630/fiora.git`
0. Go to repository directory and run
`yarn` or `npm install`
0. Create config file from example config. The `devServer`, `devPort`, `database`, `jwtSecret` is necessary.  
`cp config/project.example.js config/project.js`.
0. Run the project server
`yarn run server` or `npm run server`
0. Run the project client
`yarn run dev` or `npm run dev`
0. Open `http://localhost:8080` and enjoy it

## Script

* `server`: start server
* `dev`: start client
* `build`: build client release version
* `redexServer`: start redux dev tool server
* `rnServer`: start react native package server
* `android`: start android client
* `ios`: start ios client
* `test`: run test
* `eslint`: run eslint check

## Run Shot

![](screenshot_01.png)

## 目录结构

    |-- [android]                 // react-native android directory
    |-- [build]                   // webpack config
    |-- [config]                  // config
    |    |-- project.js           // project config (need create yourself)
    |    |-- project.example.js   // project example config
    |    |-- webpack.js           // webpack config
    |-- [ios]                     // react-native ios directory
    |-- [public]                  // build output directory
    |-- [src]                     // source
    |    |-- client               // client source
    |    |    |-- [action]        // redux action define
    |    |    |-- [assets]        // resource
    |    |    |-- [common]        // public component
    |    |    |-- [middleware]    // message handle middleware
    |    |    |-- [reducer]       // redux reducer define
    |    |    |-- [rnMobile]      // react native client
    |    |    |-- [util]          // tool function
    |    |    |-- [webMobile]     // mobile web client
    |    |    |-- [webPc]         // pc web client
    |    |    |-- api.js          // web global api
    |    |    |-- index.html      // html templete
    |    |    |-- socket.js       // socket.io client
    |    |    |-- store.js        // redux store define
    |    |-- server               // server source
    |    |    |-- [model]         // database model define
    |    |    |-- [police]        // police
    |    |    |-- [route]         // route define
    |    |    |-- [util]          // tool function
    |    |    |-- app.js          // entry
    |-- .babelrc                  // babel config
    |-- .buckconfig               // react native need config
    |-- .eslintignore             // eslint ignore config
    |-- .eslintrc.json            // eslint rule config
    |-- .flowconfig               // react native need config
    |-- .gitignore                // git ignore config
    |-- .watchmanconfig           // react native need config
    |-- package.json              // npm
    |-- yarn.lock                 // yarn
    ...

## Contribute

If you want to add functionality or fix bug, please observe the following process.

0. Fork this repository and clone the fork
0. Install dependencies `npm install`
0. Modify the code and check for bug
0. Commit your code. If you get any error or warning from eslint, please fix it
0. Create a pull request 
