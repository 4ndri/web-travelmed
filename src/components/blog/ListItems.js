import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function ListItems(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className='py-2'>
      {posts &&
        posts.map(({ node: post }) => (
          <Link key={post.id} className='block py-1 text-xl text-blue-700' to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        ))}
    </div>
  );
}

ListItems.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ListItems;
