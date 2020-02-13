const path = require('path')


module.exports.createPages = async ({ graphql, actions})=>{
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query{
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
              edges {
                node {
                  slug
                }
              }
            }
          
    }`)
    
    res.data.allContentfulBlogPost.edges.forEach((edge)=> {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

    // 1. Get Template (The Presentation to use, make Template on template)
    //2. Get Markdown (The data to present, Gatsby with onCreatePages)
    //3. Create new Pages (Programmitically Create Pages, Gatesby-node file)
