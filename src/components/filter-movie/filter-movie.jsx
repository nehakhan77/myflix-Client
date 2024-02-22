import React from "react";

export const FilterSearch = ({ movies, setFilteredMovies }) => {
  const searchResult = (searchedTitle) => {
    const searchedResult = searchedTitle.toLowerCase();
    const newMovileList = movies.filter((movie) =>
      movie.Title.includes(searchedResult)
    );
    setFilteredMovies(newMovileList);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search.."
        className="search"
        onChange={(e) => searchResult(e.target.value)}
      />
    </div>
  );
};
