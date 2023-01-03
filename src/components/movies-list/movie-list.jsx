import React, { useState } from "react";
import MovieCard from "../movie-card/movie-card";
import "./movie-list.css";

const MovieList = (props) => {
  function showMovie(number) {
    props.showMovie(number);
  }

  return (
    <div className="movies-list">
      <div className="search">
        <input
          className="input-search"
          id="input-search"
          placeholder="Введите название фильма"
          onChange={(e) => {
            if (e.target.value !== "") {
              let c = [];
              for (let i = 0; i < props.allFilms.length; ++i) {
                if (
                  props.allFilms[i].title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                ) {
                  c.push(props.allFilms[i]);
                }
              }
              props.setMovies(c);
            } else props.setMovies(props.allFilms);
          }}
        />
      </div>
      {props.movies.length < 1 ? (
        <></>
      ) : props.movies.length > 12 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: 600,
            overflowY: "scroll",
          }}
        >
          {props.movies.map((elem, i) => (
            <MovieCard key={i} movie={elem} showMovie={showMovie} />
          ))}
        </div>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", maxHeight: 600 }}
        >
          {props.movies.map((elem, i) => (
            <MovieCard key={i} movie={elem} showMovie={showMovie} />
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
          <p className="found-text">Найдено {props.movies.length} фильмов</p>
        </div>
        <button
          className="btn-add"
          disabled={props.isEditMovie}
          onClick={() => {
            props.callAddMovie();
          }}
        >
          <p className="btn-add-text">Добавить фильм</p>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
