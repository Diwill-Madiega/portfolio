import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";


const PostsList = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts?limit=10")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des posts", error)
      );
  }, []);

  return (
    <>
    <div className="posts-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    </>
  );
};

export default PostsList;