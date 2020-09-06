import React from "react"
import Layout from "../components/Layout"
import outcast_trading_logo from "../images/outcast-trading-logo.gif"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row sm:items-center">
          <img
              className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
              src={outcast_trading_logo}
              alt="Outcast trading"
            />
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-red-700 font-bold sm:text-4xl">
              Outcast Trading
            </h1>
            <p className="px-4 mt-8 mb-8 text-lg text-gray-700 sm:mt-8">
              A trading group with attitude.
            </p>
            <a
            href="https://discord.gg/cpQnZk"
            className="mx-4 px-12 py-4  bg-red-700 text-white text-xs rounded shadow hover:bg-red-400"
            >
            Join on Discord
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
