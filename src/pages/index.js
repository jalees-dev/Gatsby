import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from '../components/Footer'
import Layout from "../components/layout"
import '../../styles/index.scss'
import Head from '../components/head'


export default () => {
    return(
        <Layout>
            <Head title="Home"/>
        <div>
        <h1>Hello.</h1>
        <p>I'm Jalees, a full-stack Developer living in Karachi</p>
        <p>For general discussion touch me at <a href="https://twitter.com/" target="_blank">jalees.</a></p>

    </div>
    </Layout>)
}

// export default IndexPage