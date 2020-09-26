import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Address from '../components/Address';

import Container from '../components/content/Container';
import Title from '../components/content/Title';
import SubTitle from '../components/content/SubTitle';
import PageDescription from '../components/content/PageDescription';
import PageTitle from '../components/content/PageTitle';
import PageSection from '../components/content/PageSection';

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
      <Header image={image}></Header>
      <Container>
        <main>
          <section className='section section--gradient'>
            <header className='container'>
              <Title>{title}</Title>
              <SubTitle>{subheading}</SubTitle>
            </header>
            <PageSection className='border-t-2 border-primary-700'>
              <PageTitle>{mainpitch.title}</PageTitle>
              <PageDescription>
                <h3 className='text-xl'>{mainpitch.description}</h3>
              </PageDescription>
            </PageSection>
            <PageSection className='border-b-2 border-primary-700'>
              <Address />
            </PageSection>
            <PageSection>
              <div className='column is-12'>
                <PageTitle>{heading}</PageTitle>
                <PageDescription>{description}</PageDescription>
              </div>
            </PageSection>
          </section>
        </main>
      </Container>
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
