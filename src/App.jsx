import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import MovieDetails from "./components/movie-details/movie-details";
import MovieList from "./components/movies-list/movie-list";
import AddMovie from "./components/add-movie/add-movie";

const App = (props) => {
  const [allFilms, setFilms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/movies")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch(() => alert("Error in fetch!"));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3300/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => alert("Error in fetch!"));
  }, []);
  const [movies, setMovies] = useState([]);
  const [chooseMovie, setChooseMovie] = useState(false);
  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState(false);
  const [curMovie, setCurMovie] = useState({});
  const [editedMovie, setEditMovie] = useState({});

  async function fetchAll() {
    await fetch("http://localhost:3300/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => alert("Error in fetch!"));
  }

  function showMovie(number) {
    setIsAddMovie(false);
    setIsEditMovie(false);
    setCurMovie(allFilms[number - 1]);
    setChooseMovie(true);
  }

  function callAddMovie() {
    setChooseMovie(false);
    setIsEditMovie(false);
    setIsAddMovie(true);
  }

  function callEditMovie() {
    setChooseMovie(false);
    setIsAddMovie(false);
    setIsEditMovie(true);
    setEditMovie(curMovie);
  }

  async function editMovie(num) {
    await fetch(`http://localhost:3300/movies/${num}`, {
      method: "PATCH",
      body: JSON.stringify(editedMovie),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => fetchAll())
      .then(() => setIsEditMovie(false))
      .then(() => setCurMovie(editedMovie))
      .then(() => setChooseMovie(true))
      .catch(() => alert("Error in fetch!"));
  }

  async function addMovie(film) {
    const data = { id: allFilms.length + 1, ...film };
    await fetch("http://localhost:3300/movies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => fetchAll())
      .then(() => setIsAddMovie(false))
      .then(() => setCurMovie(data))
      .then(() => setChooseMovie(true))
      .catch(() => alert("Error in fetch!"));
  }

  const main_content = chooseMovie ? (
    <MovieDetails
      movie={curMovie}
      setChooseMovie={setChooseMovie}
      editMovie={callEditMovie}
    />
  ) : isAddMovie ? (
    <AddMovie addMovie={addMovie} setIsAddMovie={setIsAddMovie} />
  ) : isEditMovie ? (
    <AddMovie
      movie={editedMovie}
      setEditMovie={setEditMovie}
      editMovie={editMovie}
      showMovie={showMovie}
    />
  ) : (
    <></>
  );
  return (
    <div>
      <Header />
      <div className="main-content">
        <MovieList
          allFilms={allFilms}
          showMovie={showMovie}
          callAddMovie={callAddMovie}
          movies={movies}
          setMovies={setMovies}
          isEditMovie={isEditMovie}
        />
        {main_content}
      </div>
    </div>
  );
};

export default App;
