import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Journal/JournalGrid";
import Jumbotron from "../components/Journal/Jumbotron/index";
import API from "../utils/API";
import { useGlobalContext } from "../context/GlobalContext";
import { SET_CURRENT_POST } from "../context/actions";
import CardGrid from "../components/CardGrid";

const Detail = (props) => {
  const [state, dispatch] = useGlobalContext();
  console.log(props.match.params.id);
  useEffect(() => {
    API.getPost(props.match.params.id)
      .then((res) => {
        dispatch({ type: SET_CURRENT_POST, post: res.data });
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {state.currentPost ? (
        <CardGrid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>{state.currentPost.date}</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h1>Content:</h1>
                <p>{state.currentPost.body}</p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Posts</Link>
            </Col>
          </Row>
        </CardGrid>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Detail;
