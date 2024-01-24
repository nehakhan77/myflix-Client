import React from "react";
import { Link } from "react-router-dom";

// Here you import the PropTypes library
import PropTypes from "prop-types";

//Import Boostrap components
import { Button, Card } from "react-bootstrap";
import "./book-card.scss";

// The MovieCard function component
export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.Image} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}></Link>
        <Button variant="link">Open</Button>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
