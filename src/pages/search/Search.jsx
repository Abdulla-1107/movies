import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
// import { Loading } from "@/utils";
import { useSearchParams } from "react-router-dom";
// import PaginationC from "@/components/Pagination/Pagination";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const initialPage = Number(searchParams.get("page")) || 1;

  const [query, setQuery] = useState(initialQuery);
  const [queryToSearch, setQueryToSearch] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);
  const [searched, setSearched] = useState(false);

  const { data, loading, error } = useFetch(
    queryToSearch
      ? "/search/movie"
      : null,
    queryToSearch
      ? {
          query: queryToSearch,
          page,
          include_adult: false,
          language: "en-US",
          region: "US",
        }
      : null
  );

  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setQueryToSearch(query.trim());
      setPage(1);
      updateUrlParams(query.trim(), 1);
    }, 1000);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (data) {
      setResults(data.results || []);
      setTotalPages(data.total_pages || 0);
      setSearched(true);
    } else if (queryToSearch) {
      setResults([]);
      setTotalPages(0);
      setSearched(true);
    }
  }, [data, queryToSearch]);

  const updateUrlParams = (newQuery, newPage) => {
    const params = {};
    if (newQuery) params.query = newQuery;
    if (newPage && newPage > 1) params.page = newPage.toString();
    else if (newPage === 1) params.page = undefined; 
    setSearchParams(params);
  };

  const onClickSearch = () => {
    if (!query.trim()) return;
    setQueryToSearch(query.trim());
    setPage(1);
    updateUrlParams(query.trim(), 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    updateUrlParams(queryToSearch, value);
  };

  useEffect(() => {
    if (initialQuery.trim()) {
      setQueryToSearch(initialQuery.trim());
    }
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <div className="max-w-xl mx-auto text-center">
        <div className="relative w-[380px] mx-auto">
          <IoSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C61F1F] text-xl cursor-pointer"
            onClick={onClickSearch}
          />
          <input
            type="text"
            placeholder="Названия фильма"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-16 pl-12 pr-4 py-3 rounded-lg bg-[#1D1D1D] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C61F1F]"
          />
        </div>
      </div>

      <div className="mt-12">
        {loading ? (
          <div>Loading...</div>
        ) : searched && results.length === 0 ? (
          <div className="text-gray-400 text-center space-y-2 mt-20">
            <p className="text-[20px] font-semibold">Страница пока пустая</p>
            <p className="text-[20px]">По вашему запросу ничего не найдено</p>
          </div>
        ) : (
          <>
            <MovieView movies={data?.results} />
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
