import React, { Component, useEffect, useState } from "react";
import { withOAuth } from "aws-amplify-react";
import { Auth, Hub } from "aws-amplify";

class Login extends Component {
    state = { 
      user: null, 
      customState: null,
      showMenu: false
    };
  
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
    
    toggleMenu = () => {
      this.setState({ showMenu: !this.state.showMenu})
    }
  
    render() {
      const { user, showMenu } = this.state;
      return (
        <div>
        {user ? (
          <div className="relative">
            <button onClick={this.toggleMenu} className="block h-10 w-10 rounded-full overflow-hidden border-2 ">
              <img className="h-full w-full object-cover" src={user.picture} />
            </button>
            {showMenu &&
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Account settings</a>
                <button className="block w-full px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={() => Auth.signOut()}>Sign Out</button>
              </div>
            }
          </div>
        ) : (
          <div className="my-1 mx-2">
            <button 
              onClick={() => Auth.federatedSignIn({customProvider: 'Discord'})} 
              className="bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Login
            </button>
          </div>
        )}
      </div>
      )



      // return (
      //   <div className="inline-block rounded-full bg-gray-600 pr-5 h-16">
      //     {user ? (
      //       <div>
      //         <img className="rounded-full float-left h-16" src={user.picture} /> 
      //         <span className="ml-5 inline-block align-middle">
      //           {user.name}
      //           <br/>
      //           <button onClick={() => Auth.signOut()}>Sign Out</button>
      //         </span>
      //       </div>
      //     ) : (
      //       <div>
      //         <span className="ml-5 inline-block pt-5">
      //           <button onClick={() => Auth.federatedSignIn({customProvider: 'Discord'})}>
      //             <span>Login with Discord</span>
      //             </button>
      //         </span>
      //       </div>
      //     )}
      //   </div>
      // );
    }
  }

export default withOAuth(Login)