import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect} from "react";



const BlogList = (props) => {

const [posts, setPosts] = useState([])

  const fetchedData = async () => {

    try {
      const response = await fetch('http://localhost:3001/blogposts/');
      const data = await response.json();
      setPosts(data)
      console.log()
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
  fetchedData()
},[])

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
