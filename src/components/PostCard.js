import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { useTranslation } from "react-i18next";

const PostCard = ({ post }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="btn btn-primary" onClick={handleClick}>{t("BlogButton")}</button>
    </div>
  );
};

export default PostCard;

