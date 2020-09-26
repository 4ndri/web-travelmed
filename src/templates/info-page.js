import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import BlogInfo from '../components/blog/BlogInfo';

import Container from '../components/content/Container';
import Header from '../components/Header';
import Title from '../components/content/Title';
import PageTitle from '../components/content/PageTitle';
import PageSection from '../components/content/PageSection';

export const InfoPageTemplate = ({ content, contentComponent, image, title }) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <Header height='300px' backgroundSize='450px' headerImg={image}></Header>
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
      <BlogInfo/>
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
