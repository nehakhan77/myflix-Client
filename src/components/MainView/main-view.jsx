import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    fetch("https://careerfoundry-movieflix-59ee318aca62.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            Description: movie.Description,
            Genre: {
              Name: movie.Genre.Name,
            },
            Director: {
              Name: movie.Director.Name,
            },
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    let similarMovies = movies.filter((movie) => {
      return (
        movie._id !== selectedMovie._id &&
        movie.Genre.Name === selectedMovie.Genre.Name
      );
    });
    if (similarMovies.length === 0) {
      return (
        <>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setselectedMovie(null)}
          />
          <br />
          <h2>Similar Movies</h2>
          <p>There are no similar movies.</p>
        </>
      );
    } else {
      return (
        <>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setselectedMovie(null)}
          />
          <br />
          <h2>Similar Movies</h2>
          {similarMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setselectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </>
      );
    }
  }

  if (movies.length === 0) {
    return <div>This list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
