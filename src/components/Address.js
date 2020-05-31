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
    <p className='h-card ndri-address'>
      <span className='p-name'>{data.address.name}</span>
      <br />
      <span className='p-org'>{data.address.company}</span>
      <br />
      <span className='p-street-address'>{data.address.street}</span>
      <br />
      <span className='p-postal-code'>{data.address.postalcode}</span>{' '}
      <span className='p-locality'>{data.address.location}</span>
      <br />
      <span className='p-tel'>{data.address.tel}</span>
      <br />
      <a className='u-email' href={data.address.mail}>
        {data.address.mail}
      </a>
      <br />
    </p>
  );
};

export default Address;
