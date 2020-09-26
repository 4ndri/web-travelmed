import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

import BlogInfo from '../components/blog/BlogInfo';

import Container from '../components/content/Container';
import Header from '../components/Header';
import Title from '../components/content/Title';
import PageTitle from '../components/content/PageTitle';
import PageSection from '../components/content/PageSection';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <Header height='300px' backgroundSize='450px' headerImg='/img/home-katse.jpg'></Header>
        <Container>
          <PageSection>
            <div className='content'>
              <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
              <ul className='list-none'>{postLinks}</ul>
              <p>
                <Link to='/tags/'>Alle Tags</Link>
              </p>
            </div>
          </PageSection>
        </Container>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
