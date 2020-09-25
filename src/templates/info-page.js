import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import DiseaseBlogRoll from '../components/blog/DiseaseBlogRoll';

import Container from '../components/content/Container';
import Title from '../components/content/Title';
import PageTitle from '../components/content/PageTitle';
import PageSection from '../components/content/PageSection';

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

      <Container>
        <main>
          <PageSection>
            <PageTitle>{title}</PageTitle>
            <PostContent content={content} />
          </PageSection>
        </main>
      </Container>
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
      <Container>
        <PageSection className='border-t-2 border-primary-700'>
          <PageTitle>Impfungen</PageTitle>
          <DiseaseBlogRoll />
        </PageSection>

        <PageSection className='border-t-2 border-primary-700'>
          <PageTitle>Krankheiten</PageTitle>
          <DiseaseBlogRoll />
        </PageSection>
      </Container>
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
