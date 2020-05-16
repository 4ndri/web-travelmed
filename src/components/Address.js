import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const Address = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ADDRESS_QUERY {
        allMarkdownRemark(filter: { fields: { slug: { eq: "/address/" } } }) {
          edges {
            node {
              id
              rawMarkdownBody
              fields {
                slug
              }
              frontmatter {
                title
                address {
                  company
                  link
                  name
                  street
                  location
                  postalcode
                  tel
                  mail
                }
              }
            }
          }
        }
      }
    `
  );
  const data = allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <p class='h-card'>
      <span class='p-name'>{data.address.name}</span>
      <br />
      <span class='p-org'>{data.address.company}</span>
      <br />
      <span class='p-street-address'>{data.address.street}</span>
      <br />
      <span class='p-postal-code'>{data.address.postalcode}</span>{' '}
      <span class='p-locality'>{data.address.location}</span>
      <br />
      <span class='p-tel'>{data.address.tel}</span>
      <br />
      <a class='u-email' href={data.address.mail}>
        {data.address.mail}
      </a>
      <br />
    </p>
  );
};

export default Address;
