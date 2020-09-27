import React, { Component, useEffect, useState } from "react"
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

      Auth.currentUserInfo()
        .then(user => this.setState({ user }))
        .catch(() => console.log("Not signed in"));
    }
  
    render() {
      const { user } = this.state;
      return (
        <div>
          {user ? (
            <><div className="inline-block mb-6 rounded-full bg-gray-300 pr-5 h-16 line-height-username1">
              <img className="rounded-full float-left h-full" src={user.picture} /> <span className="ml-3">{user.name}</span>
            </div>
              <button onClick={() => Auth.signOut()}>Sign Out</button></>
          ) : (
            <button onClick={() => Auth.federatedSignIn({customProvider: 'Discord'})}>Login with Discord</button>
          )}
        </div>
      );
    }
  }

export default withOAuth(Login)