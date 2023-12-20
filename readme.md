[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://www.pipk.top)
[![Node.js Version](https://img.shields.io/badge/node.js-9.2.0-blue.svg)](http://nodejs.org/download)

### to generate a GitHub report

### [example](https://chat.pipk.top/githubReport/pengliheng)

```js
url = 'https://chat.pipk.top/githubReport/<userName>';
```
![](https://static.pipk.top/api/public/images/8536904566607304.png)
<!-- ## 1.you need to have an router `/graphql`,and i will post request to github url `https://api.github.com/graphql`, so please paste the below code to your router(`/graphql`) config,if you wana to use.

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
}; -->
<!-- ``` -->

<!-- ## 2.generate an [github access_token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

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

![](https://cdn.suisuijiang.com/message_1520156894273.png) -->

<!-- ## 3.to set environment variable

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
} -->

<!-- // centos/linux
// set access_token=yourToken
// export access_token=yourToken
// not sure just google/baidu
``` -->

### 1.just use it as your react component

<!-- ```jsx
// package
import React, { Component } from "react";
import Github from "@pengliheng/github-report";
import '@pengliheng/github-report/lib/index.less';

class Root extends Component {
  render() {
    return (
      <div className="github">
        <Github name="yinxin630"/>
      </div>
    );
  }
}

render(
  <Root />,
  document.getElementById('root'),
);
``` -->

### you can input it while your router change
```jsx
const GithubReport = props => (
  <div className="github-report">
    <Github {...props} />
  </div>
);

// router 
<Route path="/githubReport/:name" component={GithubReport} />

```

<!-- ```js
axios({
  url: 'https://chat.pipk.top/graphql',
  method: 'post',
  // url: `https://api.github.com/graphql`,
  // method: 'post',
  // headers: {
  //   'Authorization': `bearer ${process.env.access_token}`,
  //   'Content-Type': 'application/json'
  // },
  data: {
    query: `{
      search(query: "${args.name||'pengliheng'}", type: USER, first: 1) {    
        edges {
          node {
            ... on User {
              avatarUrl login bio url createdAt
              contributedRepositories(first: 100,orderBy: {field: CREATED_AT, direction: DESC}) {
                totalCount
                nodes{
                  nameWithOwner url
                }
              }
              starredRepositories(first:100) {
                nodes {
                  primaryLanguage {
                    name color
                  }
                }
              }
            }
          }
        }
      }
    }`,
  },
}).then(res => resolve(res.data.data))
  .catch(err => reject(err))
})
``` -->
