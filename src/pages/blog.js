import React from "react";
import { Link} from "gatsby";
import Header from "../components/header";
import Footer from '../components/Footer';
import Layout from "../components/layout";
import '../../styles/index.scss';
import { useStaticQuery, graphql } from 'gatsby';
import blogStyles from './blog.module.scss'
import Head from '../components/head'

export const data = graphql`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              title
              publishedDate(formatString:"MMMM Do, YYYY")
              slug
            }
          }
        }
      }      
    `
const  blog = (props) => {
    
    console.log(props)
    return(
        <Layout>
          <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
        {props.data.allContentfulBlogPost.edges.map((edge) => {    
            return (
                    <li className={blogStyles.post}><Link to={`/blog/${edge.node.slug}`}>
                    <h2>
                    {edge.node.title}
                    </h2>
                    <p>{edge.node.publishedDate}</p>
                    </Link>
                </li>
            )
        })}
        </ol>
    </Layout>)
}

export default blog