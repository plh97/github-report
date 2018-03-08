import axios from 'axios';

const getData = args => {
    return new Promise((resolve,reject)=>{
      axios({
        url: '/graphql',
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
                    followers(first: 100) {
                      totalCount
                      nodes {
                        url name avatarUrl
                      }
                    }
                    following(first: 100) {
                      totalCount
                      nodes {
                        url name avatarUrl
                      }
                    }
                    repositories(first:100,orderBy: {field: STARGAZERS, direction: DESC}){
                      totalCount
                      nodes{
                        createdAt updatedAt isFork name url
                        primaryLanguage {
                          name
                        }
                        forks(first:0){
                          totalCount
                        }
                        stargazers(first:0){
                          totalCount
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
}

export default getData;
