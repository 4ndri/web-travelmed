import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Address from '../components/Address';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  return (
    <div>
      <header
        className='full-width-image margin-top-0 ndri-header'
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top!important`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'auto 450px',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            background: 'inherit',
          }}
        ></div>
      </header>
      <main>
        <section className='section section--gradient'>
          <header className='container'>
            <h1 className='has-text-weight-light is-size-3-mobile is-size-2-tablet is-size-1-widescreen ndri-title'>
              {title}
            </h1>
            <h3 className='has-text-weight-light is-size-5-mobile is-size-5-tablet is-size-4-widescreen ndri-subtitle'>
              {subheading}
            </h3>
          </header>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    <section className='content'>
                      <div className='tile'>
                        <h1 className='title'>{mainpitch.title}</h1>
                      </div>
                      <div className='tile'>
                        <h3 className='subtitle'>{mainpitch.description}</h3>
                      </div>
                    </section>
                    <section className='content'>
                      <Address />
                    </section>
                    <section className='columns'>
                      <div className='column is-12'>
                        <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
                        <p>{description}</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
