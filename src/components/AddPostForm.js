import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, FormGroup, FormControl, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostForm = () => {
    const { t } = useTranslation();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = { title, body, userId: parseInt(userId, 10) };

        axios
            .post("https://dummyjson.com/posts/add", postData)
            .then((response) => {
                console.log("Post created:", response.data);
                navigate("/blog");
                toast.success(t("PostCreated"));
            })
            .catch((error) => {
                console.error("Error creating post", error);
            });
    };

    return (
        <Container>
            <h1>{t("CreatePostTitle")}</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <Form.Label htmlFor="title">{t("PostTitle")}</Form.Label>
                    <FormControl
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label htmlFor="body">{t("PostContent")}</Form.Label>
                    <FormControl
                        id="body"
                        as="textarea"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    {" "}
                    <Form.Label htmlFor="userId">{t("UserID")}</Form.Label>
                    <FormControl
                        id="userId"
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </FormGroup>
                <Button variant="primary" type="submit">
                    {t("CreatePostButton")}
                </Button>
            </Form>
        </Container>
    );
};

export default AddPostForm;