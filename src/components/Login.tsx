import React, {Component} from "react"
import { withOAuth } from "aws-amplify-react";
import { Auth, Hub } from "aws-amplify"
import Amplify from "aws-amplify"
import awsConfig from "../aws-exports"

const oauth = {
    domain: 'outcasttrading.auth.us-west-2.amazoncognito.com',
    scope: ['openid', 'profile'],
    redirectSignIn: 'localhost:8000',
    redirectSignOut: 'localhost:8000',
    responseType: 'token'
  };

Amplify.configure(awsConfig);
Auth.configure({ oauth });

class Login extends Component {
    state = { user: null, customState: null };
  
    componentDidMount() {
      Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            this.setState({ user: data });
            break;
          case "signOut":
            this.setState({ user: null });
            break;
          case "customOAuthState":
            this.setState({ customState: data });
        }
      });
  
      Auth.currentAuthenticatedUser()
        .then(user => this.setState({ user }))
        .catch(() => console.log("Not signed in"));
    }
  
    render() {
      const { user } = this.state;
  
      return (
        <div className="Login">
          <button onClick={() => Auth.federatedSignIn({customProvider: 'Discord'})}>Login with Discord</button>
        </div>
      );
    }
  }

export default withOAuth(Login)