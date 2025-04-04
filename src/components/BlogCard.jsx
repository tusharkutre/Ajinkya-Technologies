import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <>
      <a href={blog.link} target="_blank">
        <div>
          <img src={blog.thumbnail} alt="" />
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
