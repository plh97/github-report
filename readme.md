[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://www.penlh.com)
[![Node.js Version](https://img.shields.io/badge/node.js-9.2.0-blue.svg)](http://nodejs.org/download)
![Size](https://github-size-badge.herokuapp.com/pengliheng/github-report.svg)

to generate an github report

# [实例](https://chat.pipk.top/githubReport/pengliheng)

```js
url = 'https://chat.pipk.top/githubReport/pengliheng';
```

## 1.you need to have an router `/graphql`,and i will post request to github url `https://api.github.com/graphql`, so please paste the below code to your router(`/graphql`) config,if you wana to use.

```js
const axios = require("axios");
exports.getCode = async ctx => {
  const query = ctx.request.body;
  const queryFunc = async data =>
    new Promise((resolve, reject) => {
      axios({
        url: "https://api.github.com/graphql",
        method: "post",
        headers: {
          Authorization: `bearer ${process.env.access_token}`,
          "Content-Type": "application/json"
        },
        data
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  ctx.body = await queryFunc(query);
};
```

## 2.generate an [github access_token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

* #### pay attention to avoid below thing!dont put your access token into headers,because github may think it an dangerout behave thing, and they will cancel your token immediately.

```js
axios({
  url: "https://api.github.com/graphql",
  method: "post",
  headers: {
    Authorization: `bearer <your token>`,
    "Content-Type": "application/json"
  },
  data
})
  .then(res => resolve(res.data))
  .catch(err => reject(err));
```

![](https://cdn.suisuijiang.com/message_1520156894273.png)

## 3.to set environment variable

```js
// nodejs
// nodemon => create file => nodemonrc.json
{
  "verbose": true,
  "env": {
    "access_token": "your personal token",
    "NODE_ENV": "dev"
  }
}

// pm2 => create file => ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "blog",
      script: "./src/server/index.js",
      watch: true,
      env: {
        "PORT": 80,
        "NODE_ENV": "dev",
        "access_token": "your personal token",
      },
      env_prod: {
        "PORT": 8001,
        "NODE_ENV": "prod",
        "access_token": "your personal token",
      }
    }
  ]
}

// centos/linux
// set access_token=yourToken
// export access_token=yourToken
// not sure just google/baidu
```

## 4.just use it as your react component

```jsx
// package
import React, { Component } from "react";
import Github from "@pengliheng/github-report";

// local
import "./index.less";

export default class GithubReport extends Component {
  render() {
    return <Github />;
  }
}
```
