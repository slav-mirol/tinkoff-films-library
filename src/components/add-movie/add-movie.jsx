import React, { useState } from "react";
import "./add-movie.css";

const AddMovie = (props) => {
  const [formState, setFormState] = useState({});
  if (props.movie === undefined) {
    return (
      <div className="form" id="add-form">
        <p className="title">Создание фильма</p>
        <div>
          <PropsOfFilm
            titleParam='Название фильма'
            inpPlaceholder="Введите название фильма"
            inpValue={formState.title}
            parametr='title'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Год выпуска'
            inpPlaceholder="Введите год выпуска"
            inpValue={formState.year}
            parametr='year'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Длительность'
            inpPlaceholder="Введите длительность"
            inpValue={formState.runtime}
            parametr='runtime'
            setFormState={setFormState}
          />
          <div className="params">
            <p className="title-param">Жанры</p>
            <input
              className="inp-param"
              placeholder="Введите жанры (через ,)"
              value={formState.genres}
              onChange={(e) => {
                setFormState((prevState) => ({...prevState, genres: e.target.value.split(',')}));
              }}
            />
          </div>
          <div className="params">
            <p className="title-param">Описание</p>
            <textarea
              className="inp-param"
              placeholder="Введите..."
              value={formState.plot}
              onChange={(e) => {
                setFormState((prevState) => ({...prevState, plot: e.target.value}));
              }}
            />
          </div>
          <PropsOfFilm
            titleParam='Укажите ссылку на обложку'
            inpPlaceholder="Введите..."
            inpValue={formState.posterUrl}
            parametr='posterUrl'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Укажите список актеров'
            inpPlaceholder="Введите актеров (через ,)"
            inpValue={formState.actors}
            parametr='actors'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Режиссер'
            inpPlaceholder="Введите режиссера фильма"
            inpValue={formState.director}
            parametr='director'
            setFormState={setFormState}
          />
        </div>
        <div className="line" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button className="btn-search">
            <p
              className="text-search"
              onClick={() => {
                props.setIsAddMovie(false);
              }}
            >
              Отменить
            </p>
          </button>
          <button className="btn-add">
            <p
              className="btn-add-text"
              onClick={() => {
                props.addMovie(formState);
              }}
            >
              Сохранить
            </p>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form" id="edit-form">
        <p className="title">Редактирование фильма</p>
        <div>
          <PropsOfFilm
            titleParam='Название фильма'
            inpPlaceholder="Введите название фильма"
            inpValue={props.movie.title}
            parametr='title'
            formState={props.setEditMovie}
          />
          <PropsOfFilm
            titleParam='Год выпуска'
            inpPlaceholder="Введите год выпуска"
            inpValue={props.movie.year}
            parametr='year'
            setFormState={props.setEditMovie}
          />
          <PropsOfFilm
            titleParam='Длительность'
            inpPlaceholder="Введите длительность"
            inpValue={props.movie.runtime}
            parametr='runtime'
            setFormState={props.setEditMovie}
          />
          <div className="params">
            <p className="title-param">Описание</p>
            <textarea
              className="inp-param"
              placeholder="Введите..."
              value={props.movie.plot}
              onChange={(e) => {
                props.setEditMovie((prevState) => ({...prevState, plot: e.target.value}));
              }}
            />
          </div>
          <PropsOfFilm
            titleParam='Укажите ссылку на обложку'
            inpPlaceholder="Введите..."
            inpValue={props.movie.posterUrl}
            parametr='posterUrl'
            setFormState={props.setEditMovie}
          />
          <PropsOfFilm
            titleParam='Укажите список актеров'
            inpPlaceholder="Введите актеров (через ,)"
            inpValue={props.movie.actors}
            parametr='actors'
            setFormState={props.setEditMovie}
          />
          <PropsOfFilm
            titleParam='Режиссер'
            inpPlaceholder="Введите режиссера фильма"
            inpValue={props.movie.director}
            parametr='director'
            setFormState={props.setEditMovie}
          />
        </div>
        <div className="line" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button className="btn-search">
            <p
              className="text-search"
              onClick={() => {
                props.showMovie(props.movie.id);
              }}
            >
              Отменить
            </p>
          </button>
          <button className="btn-add" style={{ marginLeft: 5, marginRight: 5 }}>
            <p
              className="btn-add-text"
              onClick={() => {
                props.editMovie(props.movie.id);
              }}
            >
              Сохранить
            </p>
          </button>
        </div>
      </div>
    );
  }
};

export default AddMovie;

const PropsOfFilm = ({
  titleParam,
  inpPlaceholder,
  inpValue,
  parametr,
  setFormState
}) => {
  return (
    <div className="params" >
      <p className="title-param">{titleParam}</p>
      <input
        name={parametr}
        className="inp-param"
        placeholder={inpPlaceholder}
        value={inpValue}
        onChange={(e) => {
          setFormState((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        }}
      />
    </div>
  );
}