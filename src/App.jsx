import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import MovieDetails from "./components/movie-details/movie-details";
import MovieList from "./components/movies-list/movie-list";
import AddMovie from "./components/add-movie/add-movie";

const App = () => {

  function fetchAll() {
    fetch("http://localhost:3300/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setAllFilms(data)
      })
      .catch(() => alert("Error in fetch!"));
  }

  useEffect(() => {
    fetchAll()
  }, []);

  const [allFilms, setAllFilms] = useState([]);
  const [movies, setMovies] = useState([]);
  const [chooseMovie, setChooseMovie] = useState(false);
  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState(false);
  const [curMovie, setCurMovie] = useState({});
  const [editedMovie, setEditMovie] = useState({});

  const showMovie = useCallback((number) => {
    setIsAddMovie(false);
    setIsEditMovie(false);
    setCurMovie(allFilms[number - 1]);
    setChooseMovie(true);
  }, [allFilms])

  const callAddMovie = useCallback( () => {
    setChooseMovie(false);
    setIsEditMovie(false);
    setIsAddMovie(true);
  }, [])

  const callEditMovie = useCallback( ()=> {
    setChooseMovie(false);
    setIsAddMovie(false);
    setIsEditMovie(true);
    setEditMovie(curMovie);
  }, [curMovie])

  async function editMovie(num) {
    await fetch(`http://localhost:3300/movies/${num}`, {
      method: "PATCH",
      body: JSON.stringify(editedMovie),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => fetchAll())
      .then(() => {
        setIsEditMovie(false)
        setCurMovie(editedMovie)
        setChooseMovie(true)
      })
      .catch(() => alert("Error in fetch!"));
  }

  async function addMovie(film) {
    const data = { id: movies.length + 1, ...film };
    await fetch("http://localhost:3300/movies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => fetchAll())
      .then(() => {
        setIsAddMovie(false)
        setCurMovie(data)
        setChooseMovie(true)
      })
      .catch(() => alert("Error in fetch!"));
  }

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
        {chooseMovie ? (
          <MovieDetails
            movie={curMovie}
            setChooseMovie={setChooseMovie}
            editMovie={callEditMovie}
          />
        ) : isAddMovie ? (
          <AddMovie
            addMovie={addMovie}
            setIsAddMovie={setIsAddMovie}
          />
        ) : isEditMovie ? (
          <AddMovie
            movie={editedMovie}
            setEditMovie={setEditMovie}
            editMovie={editMovie}
            showMovie={showMovie}
          />
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default App;
