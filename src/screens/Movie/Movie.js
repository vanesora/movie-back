import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import '../../styles/Movie.css';
const Movie = () => {

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation()
  

  const consultMovies = async (id) => {
    setIsLoading(true)
    try {
      await axios.get(`${process.env.REACT_APP_URL}movie/${id}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setIsLoading(false)
        });
    } catch (e) {
    }
  }
  
  useEffect(() => {
    const id= location.pathname.split('/')[2];
    consultMovies(id);
  }, []);

  return (
    <div className='categories-container'>
      {isLoading && <LoadingSpinner />}
      {movie?.trailer && <ReactPlayer
        url={movie.trailer}
        className='react-player'
        playing
        width='100%'
        height='600px'
        controls={true}
      />}
    </div>
  )
}

export default Movie;
