import { Slider } from '@/components/movie-view/SliderCard';
import { SliderImage } from '@/components/movie-view/SliderImage';
import { useFetch } from '@/hooks/useFetch';
import React from 'react';

const Home = () => {
  const { data, error, loading } = useFetch('/discover/movie');
  console.log(data?.results, "DATA RES");
  
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div>
      <SliderImage movies={data?.results}/>
      <Slider movies={data?.results} />
    </div>
  );
};

export default Home;