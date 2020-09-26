import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


import ListItems from './ListItems';


export default () => (
  <StaticQuery
    query={graphql`
      query DiseaseBlogRollQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, tags: {eq: "Krankheit"} } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ListItems data={data} count={count} />}
  />
)
