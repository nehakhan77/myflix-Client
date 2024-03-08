import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Here you import the PropTypes library
import PropTypes from "prop-types";

//Import Boostrap components
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

// The MovieCard function component
//Add a favorite movie to user list
export const MovieCard = ({ movie, user, setUser, token }) => {
  const isFavorite = user?.FavoriteMovies?.find((m) => m === movie._id);
  const [image, setImage] = useState("");

  const handleFavoriteButton = () => {
    const method = isFavorite ? "delete" : "post";
    fetch(
      `https://careerfoundry-movieflix-59ee318aca62.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method,
      }
    )
      .then((result) => result.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    if (movie.ImagePath) {
      try {
        let imageTemp = require(`../../images/${movie.ImagePath}`);
        setImage(imageTemp);
      } catch (e) {
        console.log(movie.ImagePath + " not found");
        console.error(e);
      }
    }
  }, [movie]);

  console.log(image);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Row>
          <Col>
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
              <Button variant="link">Open</Button>
            </Link>
          </Col>
        </Row>
        <Col>
          <Button variant="link" onClick={handleFavoriteButton}>
            {isFavorite ? "Remove" : "Add"} favorite
          </Button>
        </Col>
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
