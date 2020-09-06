import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-300">
        <header className="p-4 bg-red-700 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto"></h1>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Outcast Trading 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
