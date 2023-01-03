import React from "react";
import "./movie-card.css";

const MovieCard = (props) => {
  return (
    <button
      className="movie-card"
      onClick={() => {
        props.showMovie(Number(props.movie.id));
      }}
    >
      <p className="movie-title">{props.movie.title}</p>
      <div style={{ marginTop: 6, justifyContent: "start" }}>
        <p className="movie-props">
          {props.movie.year} | {props.movie.genres.join(", ")}
        </p>
      </div>
    </button>
  );
};

export default MovieCard;
