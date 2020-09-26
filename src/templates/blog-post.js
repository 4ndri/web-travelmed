import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import DiseaseBlogRoll from '../components/blog/DiseaseBlogRoll';
import VaccineBlogRoll from '../components/blog/VaccineBlogRoll';

import Container from '../components/content/Container';
import Header from '../components/Header';
import Title from '../components/content/Title';
import PageTitle from '../components/content/PageTitle';
import PageSection from '../components/content/PageSection';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <Header height='300px' ></Header>
      <Container>
        <main>
          {helmet || ''}
          <PageSection>
            <PageTitle>{title}</PageTitle>
            <PostContent content={content} />
          </PageSection>
          <PageSection>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className='taglist'>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </PageSection>
        </main>
      </Container>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta name='description' content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
      <Container className='flex flex-col'>
        <PageSection className='flex-auto border-t-2 border-primary-700'>
          <PageTitle>Krankheiten</PageTitle>
          <DiseaseBlogRoll />
        </PageSection>
        <PageSection className='flex-auto border-t-2 border-primary-700'>
          <PageTitle>Impfungen</PageTitle>
          <VaccineBlogRoll />
        </PageSection>
      </Container>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
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
