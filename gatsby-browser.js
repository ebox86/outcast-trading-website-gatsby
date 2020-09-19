import "./src/css/tailwind.css"
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
import { setUser } from "./src/utility/auth"

const oauth = {
    domain: process.env.COGNITO_AUTH_DOMAIN,
    scope: ['openid', 'profile'],
    redirectSignIn: process.env.COGNITO_REDIRECT_SIGNIN,
    redirectSignOut: process.env.COGNITO_REDIRECT_SIGNOUT,
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