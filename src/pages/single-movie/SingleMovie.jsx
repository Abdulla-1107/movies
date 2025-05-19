import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Loading } from "@/utils";
import { IoIosStarOutline } from "react-icons/io";
import { useFetch } from "@/hooks/useFetch";
import MovieView from "@/components/movie-view/MovieView";

const url = import.meta.env.VITE_IMAGE_URL;

const Singlemovie = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div>Loading....</div>;
  if (error)
    return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto mt-6 px-4 md:px-8">
      <div className="relative">
        <img
          src={url + data?.backdrop_path}
          alt={data?.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-4">
        <h1 className="text-4xl font-bold text-white">{data?.title}</h1>
        <p className="mt-2 text-gray-300">{data?.overview}</p>
        <div className="mt-2 flex items-center gap-4 text-lg text-gray-400">
          <p className="flex items-center gap-2">
            <IoIosStarOutline className="text-amber-300" />
            {data?.vote_average}
          </p>
          <p className="font-semibold text-xl text-[#C61F1F]">
            {data?.budget?.toLocaleString()} USD
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-white">Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {images?.backdrops.slice(0, 10).map((image) => (
            <img
              key={image.file_path}
              src={url + image.file_path}
              alt="Movie Backdrop"
              className="w-full h-[200px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:opacity-80"
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white">Similar Movies</h2>
        <MovieView movies={similars?.results.slice(0, 4)} />
      </div>
    </div>
  );
};

export default Singlemovie;