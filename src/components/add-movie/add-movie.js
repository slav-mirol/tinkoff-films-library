import React, { useState } from 'react';
import './add-movie.css';

const AddMovie = (props) => {
    const [addMovie, setAddMovie] = useState({});
    if (props.movie === undefined) {
        return (
            <div className='form' id='add-form'>
                <p className='title'>Редактирование / Создание</p>
                <div className='params'>
                    <p className='title-param'>Название фильма</p>
                    <input className='inp-param' placeholder='Введите название фильма' value={addMovie.title} onChange={(e)=>{setAddMovie({
                        title: e.target.value,
                        year: addMovie.runtime,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Год выпуска</p>
                    <input className='inp-param' placeholder='Введите год выпуска' value={addMovie.year} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: e.target.value,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Длительность</p>
                    <input className='inp-param' placeholder='Введите длительность' value={addMovie.runtime} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.year,
                        runtime: e.target.value,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Жанры</p>
                    <input className='inp-param' placeholder='Введите жанры (через ,)' value={addMovie.genres} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.year,
                        runtime: addMovie.runtime,
                        genres: e.target.value.split(','),
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Описание</p>
                    <textarea className='inp-param' placeholder='Введите...' value={addMovie.plot} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.runtime,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: e.target.value,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Укажите ссылку на обложку</p>
                    <input className='inp-param' placeholder='Введите...' value={addMovie.posterUrl} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.runtime,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: e.target.value,
                    })}}/>
                    <p className='title-param'>Укажите список актеров</p>
                    <input className='inp-param' placeholder='Введите актеров (через ,)' value={addMovie.actors} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.runtime,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: addMovie.director,
                        actors: e.target.value,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                    <p className='title-param'>Режиссер</p>
                    <input className='inp-param' placeholder='Введите режиссера фильма' value={addMovie.director} onChange={(e)=>{setAddMovie({
                        title: addMovie.title,
                        year: addMovie.runtime,
                        runtime: addMovie.runtime,
                        genres: addMovie.genres,
                        director: e.target.value,
                        actors: addMovie.actors,
                        plot: addMovie.plot,
                        posterUrl: addMovie.posterUrl,
                    })}}/>
                </div>
                <div className='line'/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                    <button className='btn-search'>
                        <p className='text-search' onClick={()=>{props.setIsAddMovie(false)}}>Отменить</p>
                    </button>
                    <button className='btn-add'>
                        <p className='btn-add-text' onClick={()=>{props.addMovie(addMovie)}}>Сохранить</p>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='form' id='edit-form'>
                <p className='title'>Редактирование / Создание</p>
                <div className='params'>
                    <p className='title-param'>Название фильма</p>
                    <input className='inp-param' placeholder='Введите название фильма' value={props.movie.title} onChange={(e)=>{
                        props.setEditMovie({
                        id: props.movie.id,
                        title: e.target.value,
                        year: props.movie.year,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: props.movie.director,
                        actors: props.movie.actors,
                        plot: props.movie.plot,
                        posterUrl: props.movie.posterUrl,
                    })}}/>
                    <p className='title-param'>Год выпуска</p>
                    <input className='inp-param' placeholder='Введите год выпуска' value={props.movie.year} onChange={(e)=>{props.setEditMovie({
                        id: props.movie.id,
                        title: props.movie.title,
                        year: e.target.value,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: props.movie.director,
                        actors: props.movie.actors,
                        plot: props.movie.plot,
                        posterUrl: props.movie.posterUrl,
                    })}}/>
                    <p className='title-param'>Описание</p>
                    <textarea className='inp-param' placeholder='Введите...' value={props.movie.plot} onChange={(e)=>{props.setEditMovie({
                        id: props.movie.id,
                        title: props.movie.title,
                        year: props.movie.year,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: props.movie.director,
                        actors: props.movie.actors,
                        plot: e.target.value,
                        posterUrl: props.movie.posterUrl,
                    })}}/>
                    <p className='title-param'>Укажите ссылку на обложку</p>
                    <input className='inp-param' placeholder='Введите...' value={props.movie.posterUrl} onChange={(e)=>{props.setEditMovie({
                        id: props.movie.id,
                        title: props.movie.title,
                        year: props.movie.year,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: props.movie.director,
                        actors: props.movie.actors,
                        plot: props.movie.plot,
                        posterUrl: e.target.value,
                    })}}/>
                    <p className='title-param'>Укажите список актеров</p>
                    <input className='inp-param' placeholder='Введите актеров (через;)' value={props.movie.actors} onChange={(e)=>{props.setEditMovie({
                        id: props.movie.id,
                        title: props.movie.title,
                        year: props.movie.year,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: props.movie.director,
                        actors: e.target.value,
                        plot: props.movie.plot,
                        posterUrl: props.movie.posterUrl,
                    })}}/>
                    <p className='title-param'>Режиссер</p>
                    <input className='inp-param' placeholder='Введите режиссера фильма' value={props.movie.director} onChange={(e)=>{props.setEditMovie({
                        id: props.movie.id,
                        title: props.movie.title,
                        year: props.movie.year,
                        runtime: props.movie.runtime,
                        genres: props.movie.genres,
                        director: e.target.value,
                        actors: props.movie.actors,
                        plot: props.movie.plot,
                        posterUrl: props.movie.posterUrl,
                    })}}/>
                </div>
                
                <div className='line'/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                    <button className='btn-search'>
                        <p className='text-search' onClick={()=>{props.showMovie(props.movie.id)}}>Отменить</p>
                    </button>
                    <button className='btn-add' style={{marginLeft:5,marginRight:5}}>
                        <p className='btn-add-text' onClick={()=>{props.editMovie(props.movie.id)}}>Сохранить</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default AddMovie;