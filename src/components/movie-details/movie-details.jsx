import React, { useState } from "react";
import "./movie-details.css";

const MovieDetails = (props) => {
  return (
    <div className="movie-details">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className="id">Id: {props.movie.id}</p>
        <button
          className="edit-btn"
          onClick={() => {
            props.editMovie();
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 13.5858V9.17157L13.5858 0.585786C14.3668 -0.195262 15.6332 -0.195262 16.4142 0.585786L18 2.17157C18.781 2.95262 18.781 4.21895 18 5L9.41421 13.5858H5ZM14 15.5858V12.5858L16 10.5858V12.5858V15.5858C16 17.2426 14.6569 18.5858 13 18.5858H3C1.34315 18.5858 0 17.2426 0 15.5858V5.58579C0 3.92893 1.34315 2.58579 3 2.58579H6H8L6 4.58579H3C2.44772 4.58579 2 5.0335 2 5.58579V15.5858C2 16.1381 2.44772 16.5858 3 16.5858H13C13.5523 16.5858 14 16.1381 14 15.5858ZM15 2L16.5858 3.58579L8.58579 11.5858H7V10L15 2Z"
              fill="#333333"
            />
          </svg>
          <p className="edit-text">Редактировать</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <img
          className="image"
          src={props.movie.posterUrl}
          alt="img of film"
        ></img>
        <div className="info">
          <p className="title-of-film">{props.movie.title}</p>
          <p className="param" style={{ marginTop: 0 }}>
            {props.movie.director}
          </p>
          <p className="title-param">Параметры</p>
          <div className="container-param">
            <p className="param">Год производства</p>
            <p className="param-value">{props.movie.year}</p>
          </div>
          <div className="container-param">
            <p className="param">Длительность </p>
            <p className="param-value">{props.movie.runtime} мин.</p>
          </div>
          <div className="container-param">
            <p className="param">Жанры </p>
            <p className="param-value">{props.movie.genres.join(", ")}</p>
          </div>
          <div className="container-param">
            <p className="param">В главных ролях </p>
            <p className="param-value">{props.movie.actors}</p>
          </div>
        </div>
      </div>
      <p>Описание</p>
      <p>{props.movie.plot}</p>
    </div>
  );
};

export default MovieDetails;
