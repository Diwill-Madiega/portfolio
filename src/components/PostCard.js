// src/components/PostCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="btn btn-primary" onClick={handleClick}>View Details</button>
    </div>
  );
};

export default PostCard;

