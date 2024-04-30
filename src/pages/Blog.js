import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PostsList from "../components/PostsList";
import PostDetail from "../components/PostDetail";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  
  return (
    <>
    <Container>
      <Row className="my-4">
        <Col md={12}>
          <h1 className="text-center">{t("BlogTitle")}</h1><br/>
          <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path=":postId" element={<PostDetail />} />
          </Routes>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Blog;