import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import '../../styles/index.scss'
import Head from '../components/head'
const about = ({title}) => {
    return ( <Layout>
        <Head title="About"/>
        <div>
 <p>Such Wow. Very React.</p>

</div></Layout>)};

export default about
