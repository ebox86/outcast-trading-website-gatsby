import "./src/css/tailwind.css"
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
import { setUser } from "./src/utility/auth"

const oauth = {
    domain: 'outcasttrading.auth.us-west-2.amazoncognito.com',
    scope: ['openid', 'profile'],
    redirectSignIn: 'localhost:8000',
    redirectSignOut: 'localhost:8000',
    responseType: 'token'
  };

Amplify.configure(awsConfig);
Auth.configure({ oauth });

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}