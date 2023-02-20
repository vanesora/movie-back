import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PopUp from '../../components/PopUp/PopUp';
import Slideshow from '../../components/Slideshow/Slideshow';
import '../../styles/Categories.css';

const Categories = ({ searchValue = '', filterValue = '' }) => {

  const [movies, setMovies] = useState({});
  const [keys, setKeys] = useState([]);
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const consultMovies = async (e) => {
    setIsLoading(true)
    try {
      await axios.get(`${process.env.REACT_APP_URL}movies`)
        .then((response) => {
          const categories = groupBy(response.data, 'category');
          setMovies(categories);
          setKeys(Object.keys(categories))
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setIsLoading(false)
        });
    } catch (e) {
    }
  }

  const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const handleClick = (movie) => {
    console.log(movie)
    setMovie(movie);
    setOpen(true)
  };

  useEffect(() => {
    consultMovies();
  }, []);

  useEffect(() => {
    if (searchValue === '' || !searchValue) {
      consultMovies();
      return
    }
    setIsLoading(true)
    try {
      axios.get(`${process.env.REACT_APP_URL}movies/search/as-you-type/name/${searchValue}`)
        .then((response) => {
          const categories = groupBy(response.data, 'category');
          setMovies(categories);
          setKeys(Object.keys(categories))
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setIsLoading(false)
        });
    } catch (e) {
    }
    console.log(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (filterValue === '') {
      consultMovies();
      return
    }
    setIsLoading(true)
    try {
      axios.get(`${process.env.REACT_APP_URL}movies/match/category/${filterValue}`)
        .then((response) => {
          const categories = groupBy(response.data, 'category');
          setMovies(categories);
          setKeys(Object.keys(categories))
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setIsLoading(false)
        });
    } catch (e) {
    }
    console.log(filterValue);
  }, [filterValue]);



  return (
    <div className='categories-container'>
      {isLoading && <LoadingSpinner />}
      <div>
        {keys && keys.map((category) => (
          <div className='category' key={category}>
            <div className='title-category'>
              {category}
            </div>
            <div className='container-movies'>
              <Slideshow totalItems={movies[category].length} widthItem={160}>
                {movies[category].map((movie) => (

                  <div className='movies' onClick={() => handleClick(movie)} key={movie.id}>
                    <img className='movie-image' src={movie.img} alt='movie' />
                    <div className='movie-name'>
                      {movie.name}
                    </div>
                    <div className='movie-score'>
                      {'calificación: ' + movie.score}
                    </div>
                  </div>
                ))}
              </Slideshow>
            </div>

          </div>
        ))}
        {keys.length < 1 && <div className='none'>NO SE ENCONTRARON RESULTADOS</div>}
      </div>
      {open ? <PopUp movie={movie} closePopup={() => setOpen(false)} /> : null}
    </div>
  )
}

export default Categories;
