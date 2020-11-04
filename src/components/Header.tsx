import React, { Component } from "react"
import Login from "../components/Login"

class Header extends Component {
  state = { 
    showMenu: false 
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu})
  }

  render() {
    const menuState = this.state.showMenu
    return (
      <header className="bg-red-700 text-white font-semibold sm:flex sm:justify-between sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-2 sm:p-0 relative">
            <div>
              Outcast Trading
            </div>
            <div className="sm:hidden">
              <button onClick={this.toggleMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {!menuState ? (
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                  ) : (
                    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                  )}
                </svg>
              </button>
            </div>
        </div>
        <div className={`${menuState ? `absolute bg-red-700 w-full block px-2 py-2 z-10` : `hidden px-2 py-0`} sm:flex items-center`}>
            <a href="#" className="hover:bg-red-500 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 font-semibold">Bots</a>
            <a href="#" className="hover:bg-red-500 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 font-semibold">Podcast</a>
            <Login/>
        </div>
      </header>
    )
  }
}

export default Header