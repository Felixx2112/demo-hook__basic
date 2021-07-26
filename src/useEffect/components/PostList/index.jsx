import React from "react";
import PropTypes from "prop-types";

function PostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};
export default PostList;
