import React from "react"
import SEO from "./SEO"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-300">
      <Header/>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Outcast Trading 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
