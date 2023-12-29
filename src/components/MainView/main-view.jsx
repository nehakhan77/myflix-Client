import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Dark Knight",
      description:
        "Batman, with the help of allies like Commissioner Gordon and District Attorney Harvey Dent, continues his war on crime in Gotham City. However, the emergence of the chaotic and enigmatic Joker poses a threat that Batman may not be able to control. The line between hero and villain becomes blurred in this intense and psychologically gripping chapter of the Dark Knight trilogy.",
      genre: "Action",
      director: "Christopher Nolan",
    },
    {
      id: 2,
      title: "The Social Network",
      description:
        "This film chronicles the founding and rise of Facebook, exploring the relationships and conflicts among its creators, including Mark Zuckerberg, Eduardo Saverin, and the Winklevoss twins. As the social media platform becomes a global phenomenon, friendships unravel, and legal battles ensue, revealing the high stakes and personal sacrifices in the pursuit of success and recognition.",
      genre: "Drama",
      director: "David Fincher",
    },
    {
      id: 3,
      title: "The Notebook",
      description:
        "In this heartfelt romantic drama, Noah and Allie, two people from different social backgrounds, fall deeply in love during a passionate summer romance. Despite their connection, circumstances force them apart. Years later, they reunite, but challenges persist, testing the endurance of their love and the promises made in a notebook that captured the essence of their enduring bond.",
      genre: "Romance",
      director: "Nick Cassavetes",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
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
            setSelectedBook(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
