import React from "react";
import JournalComponent from "../components/Journal/JournalComponent";
import PostsList from "../components/Journal/PostsList";
import { Col, Row, Container } from "../components/Journal/JournalGrid";

function JournalPage(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <JournalComponent />
        </Col>
        <Col size="md-6 sm-12">{/* <PostsList /> */}</Col>
      </Row>
    </Container>
  );
}

export default JournalPage;
