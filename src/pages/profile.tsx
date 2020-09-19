import { Link }  from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { withAuthenticator } from "aws-amplify-react"

const Profile = () => {
    <Layout>
        <SEO/>
        <h1>User Profile</h1>
    </Layout>
}

export default withAuthenticator(Profile)