import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className='grid grid-flow-row grid-cols-3 gap-3'>
      {posts &&
        posts.map(({ node: post }) => (
          <div className='' key={post.id}>
            <article
              className={`${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className='w-full'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className='text-blue-700' >
                  <Link className='text-xl' to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span className='text-xs block'>{post.frontmatter.date}</span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className='button' to={post.fields.slug}>
                  weiterlesen →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogRoll;
