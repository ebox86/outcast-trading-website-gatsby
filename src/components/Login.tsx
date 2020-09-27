import React, { Component, useEffect, useState } from "react";
import { withOAuth } from "aws-amplify-react";
import { Auth, Hub } from "aws-amplify";

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
        .then(user => {
          this.setState({ user: user.signInUserSession.idToken.payload})
          })
        .catch(() => console.log("Not signed in"));
    }
    
  
    render() {
      const { user } = this.state;
      return (
        <div className="inline-block rounded-full bg-gray-600 pr-5 h-16 float-right">
          {user ? (
            <div>
              <img className="rounded-full float-left h-16" src={user.picture} /> 
              <span className="ml-5 inline-block align-middle">
                {user.name}
                <br/>
                <button onClick={() => Auth.signOut()}>Sign Out</button>
              </span>
            </div>
          ) : (
            <div>
              <span className="ml-5 inline-block pt-5">
                <button onClick={() => Auth.federatedSignIn({customProvider: 'Discord'})}>
                  <span>Login with Discord</span>
                  </button>
              </span>
            </div>
          )}
        </div>
      );
    }
  }

export default withOAuth(Login)