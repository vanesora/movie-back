import React from "react";
import '../../styles/PopUp.css';
import { useNavigate } from 'react-router-dom';


const PopUp = ({ movie, closePopup
}) => {

  const navigate = useNavigate();

  const reserver = () => {
    navigate('/movies/'+movie.id)
  };

  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="button-close"><button onClick={closePopup}>X</button></div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img className='movie-image' src={movie.img} alt='movie' />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-end' }}>
            <h1>{movie.name}</h1>
            <p>{movie.synopsis}</p>
            <button className="button-play" onClick={reserver}>
              <span>►</span>
              <span>Reproducir</span>
              </button>
            <div className="container-data">
              <p> Director: {movie.director}</p>
              <p> Puntuación: {movie.score}</p>
              <p> Duración: {movie.duration}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopUp;
