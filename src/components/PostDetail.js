import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PostDetail = () => {
  const { t } = useTranslation();
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPostDetails();
  }, [postId]);

  const fetchPostDetails = () => {
    axios
      .get(`https://dummyjson.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
        return axios.get(`https://dummyjson.com/posts/${postId}/comments`);
      })
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => console.error("Error fetching post details", error));
  };

  const updatePost = () => {
    const updatedData = { title, body };
    axios
      .put(`https://dummyjson.com/posts/${postId}`, updatedData)
      .then((response) => {
        setPost(response.data);
        console.log("Post updated:", response.data);
      })
      .catch((error) => console.error("Error updating post", error));
  };

  const deletePost = () => {
    axios
      .delete(`https://dummyjson.com/posts/${postId}`)
      .then((response) => {
        console.log("Post deleted:", response.data);
        navigate("/blog");
      })
      .catch((error) => console.error("Error deleting post", error));
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <>
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePost();
        }}
      >
              <hr />
        <div>
          <label htmlFor="title">{t("EditTitle")}</label><br/>
          <input
            className="form-group form-control"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">{t("EditContent")}</label><br/>
          <textarea
            className="form-group form-control"
            id="body"
            rows="3"
            style={{padding: "8px" }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">{t("SaveChangesButton")}</button>
        <button className="btn btn-danger" onClick={deletePost} style={{ margin: "8px" }}>{t("DeletePostButton")}</button>
      </form>
        <br />
      

      
      <h2>{t("PostPreview")}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      
      <hr />
      
      <h3>{t("BlogComments")}</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <strong>{comment.user.username}</strong>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>{t("NoComments")}</p>
      )}
    </div>
    </>
  );
};

export default PostDetail;
