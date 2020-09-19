import React, {Component} from "react"
import { withOAuth } from "aws-amplify-react";
import { Auth, Hub } from "aws-amplify"

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