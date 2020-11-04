import React from "react"
import Layout from "../components/Layout"

const Bots = () => {
    return (
      <Layout>
        <div className="px-4 pt-5">
            <h1 className="text-2xl text-left text-red-700 font-extrabold sm:text-4xl tracking-tight">
                Bots
            </h1>
            <div>
                <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    FinBot
                    <br/>
                    <span className="text-red-500">Access the world of finance from your server.</span>
                    </h2>
                    <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                            Add to Discord
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-500 bg-white hover:text-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                            Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    )
}

export default Bots