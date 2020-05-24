import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Address from '../components/Address';
import Content, { HTMLContent } from '../components/Content';

import DiseaseBlogRoll from '../components/blog/DiseaseBlogRoll';

export const InfoPageTemplate = ({ content, contentComponent, image, title }) => {
  const PostContent = contentComponent || Content;
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
          </header>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    <section className='columns'>
                      <div className='column is-12'>
                        <PostContent content={content} />
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

InfoPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const InfoPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <InfoPageTemplate
        content={html}
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
      />
      <section className='section'>
        <header className='container '>
          <h1 className='content has-text-weight-bold is-size-1 ndri-section-title'>Impfungen</h1>
        </header>
        <div className='container'>
          <div className='content'>
            <DiseaseBlogRoll />
          </div>
        </div>
      </section>
      <section className='section'>
        <header className='container '>
          <h1 className='content has-text-weight-bold is-size-1 ndri-section-title'>Krankheiten</h1>
        </header>
        <div className='container'>
          <div className='content'>
            <DiseaseBlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

InfoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default InfoPage;

export const pageQuery = graphql`
  query InfoPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "info-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
