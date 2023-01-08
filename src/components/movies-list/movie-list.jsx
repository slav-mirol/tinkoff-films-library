import React from "react";
import MovieCard from "../movie-card/movie-card";
import "./movie-list.css";

const MovieList = ({
  allFilms,
  showMovie,
  callAddMovie,
  movies,
  setMovies,
  isEditMovie}) => {
    
  function filterFilms(e) {
    if (e.target.value !== "") {
      let c = [];
      for (let i = 0; i < allFilms.length; ++i) {
        if (
          allFilms[i].title
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          c.push(allFilms[i]);
        }
      }
      setMovies(c);
    } else setMovies(allFilms);
  }

  return (
    <div className="movies-list">
      <div className="search">
        <input
          className="input-search"
          id="input-search"
          placeholder="Введите название фильма"
          onChange={filterFilms}
        />
      </div>
      {movies.length < 1 ? (
        null
      ) : (
        <div className="movies">
          {movies.map((elem) => (
            <MovieCard key={elem.id} movie={elem} showMovie={showMovie} />
          ))}
        </div>
      )}
      <div className="line" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="found" style={{ marginLeft: 15 }}>
          <p className="found-text">Найдено {movies.length} фильмов</p>
        </div>
        <button
          className="btn-add"
          disabled={isEditMovie}
          onClick={callAddMovie}
        >
          <p className="btn-add-text">Добавить фильм</p>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
