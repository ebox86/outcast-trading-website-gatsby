import React from "react"
import Layout from "../components/Layout"
import JoinServer from "../components/JoinServer"
import Logo from "../components/Logo";

const Homepage = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row sm:items-center">
          <div style={{ width: `300px`}}>
            <Logo/>
          </div>
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-red-700 font-bold sm:text-4xl">
              Outcast Trading
            </h1>
            <p className="px-4 mt-8 mb-8 text-lg text-gray-700 sm:mt-8">
              A trading group with attitude.
            </p>
            <JoinServer/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Homepage