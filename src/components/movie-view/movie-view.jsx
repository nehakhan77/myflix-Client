export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>{" "}
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>{" "}
        {/* Accessing the Name property of the Genre object */}
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>{" "}
        {/* Accessing the Name property of the Director object */}
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
