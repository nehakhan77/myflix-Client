import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie._id === movieId);

  const selectedMovie = movies.find((movie) => movie._id === movieId);
  const similarMovies = movies.filter((movie) => {
    return (
      movie._id !== movieId && movie.Genre.Name === selectedMovie.Genre.Name  
    );
  });

  //add else code if there are not any similar moves

  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Genre.Name}</Card.Text>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </Card.Body>
      <Row className="justify-content-md-center mx-3 my-4">
        <h1>Similar Movies</h1>
        {similarMovies.map((movie) => {
          return (
            <Col key={movie._id} className="m-3">
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};
