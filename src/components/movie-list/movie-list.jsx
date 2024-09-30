import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard"; // Adjust the import path accordingly
import "./movie-list.scss"; // Import your custom styles

const MovieList = ({ movies, user, setUser, token }) => {
  return (
    <Row className="no-wrap">
      {movies.map((movie) => (
        <Col key={movie._id} xs={2} sm={2} md={2} lg={2} className="movie-card-col">
          <MovieCard movie={movie} user={user} setUser={setUser} token={token} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;