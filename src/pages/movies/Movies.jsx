import React, { useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { Loading } from "@/utils";
import { useFetch } from "@/hooks/useFetch";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  let page = Number(params.get("page")) || 1;
  let genres = params.get("genres") || "";
  let with_genres = genres.split("-").join(",").slice(1); 

  const { data, error, loading } = useFetch("/discover/movie", {
    page,
    with_genres,
    without_genres: "18,10749,36",
  });

  const handleChangeGenre = useCallback(
    (id) => {
      const currentGenres = params.get("genres") || "";
      let array = currentGenres ? currentGenres.split("-").slice(1) : [];

      if (array.includes(id)) {
        array = array.filter((i) => i !== id);
      } else {
        array.push(id);
      }

      let newGenres = array.length > 0 ? "-" + array.join("-") : "";

      if (!newGenres) {
        params.delete("genres");
      } else {
        params.set("genres", newGenres);
      }
      params.set("page", "1");
      setParams(params);
    },
    [params, setParams]
  );

  const handleChange = (event, value) => {
    const newParams = new URLSearchParams(params.toString());
    if (value === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", value.toString());
    }
    setParams(newParams);
    window.scrollTo(0, 0);
  };

  if (data?.total_pages > 500) {
    data.total_pages = 500;
  }

  return (
    <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
      {loading ? <Loading /> : <MovieView movies={data?.results} />}
      <div className="container mx-auto flex justify-center my-10">
        <Pagination
          count={data?.total_pages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              borderColor: "#444",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#C61F1F",
              color: "#fff",
              borderColor: "#C61F1F",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#2c2c2c",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Movies;
