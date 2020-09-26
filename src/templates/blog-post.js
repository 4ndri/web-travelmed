import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import BlogInfo from '../components/blog/BlogInfo';

import Container from '../components/content/Container';
import Header from '../components/Header';
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
      <Header height='300px'></Header>
      <Container>
        <main>
          {helmet || ''}
          <PageSection>
            <PageTitle>{title}</PageTitle>
            <PostContent content={content} />
          </PageSection>
          <PageSection>
            {tags && tags.length ? (
              <div className='mt-4 content'>
                <h3>Tags</h3>
                <ul className='list-none flex flex-wrap'>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link className='inline-block p-2 m-1 text-lg text-white bg-blue-800 rounded-full' to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
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
      <BlogInfo />
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
