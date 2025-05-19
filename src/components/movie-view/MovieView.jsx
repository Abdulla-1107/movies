import React from 'react';
import Card from './Card';

const MovieView = ({ movies }) => {
  if (!movies?.length) return <p>No movies available</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieView;