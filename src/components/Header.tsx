import React from "react"
import Login from "../components/Login"

const Header = () => (
    <header className="p-4 bg-red-700 text-white font-semibold">
        <h1 className="max-w-4xl mx-auto"></h1>
        <Login/>
    </header>
)

const styles = {
    headerTitle: {
      color: 'white',
      textDecoration: 'none',
    },
    link: {
      cursor: 'pointer',
      color: 'white',
      textDecoration: 'underline'
    }
  }

export default Header