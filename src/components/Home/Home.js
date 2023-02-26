import React, { useEffect } from 'react';
import { MovieListing } from '../index';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApikey';

const Home = () => {
  useEffect(() => {
    const movieText = 'spider';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('err', err);
        });
      console.log('response', response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
