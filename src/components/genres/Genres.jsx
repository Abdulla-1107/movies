import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto py-6">
      <div
        className="flex gap-3 overflow-x-auto pb-4 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
          .genre-chip {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: linear-gradient(135deg, #1e293b 0%, #2d3748 100%);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                       0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .genre-chip:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 
                       0 3px 6px rgba(0, 0, 0, 0.08);
          }
          .genre-chip.active {
            background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
            box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
          }
        `}</style>

        {data?.genres?.map((genre) => (
          <span
            onClick={() => handleChangeGenre(genre.id.toString())}
            key={genre.id}
            className={`genre-chip flex-shrink-0 cursor-pointer select-none px-5 py-2.5 rounded-[10px] text-sm font-medium text-gray-100
              ${array.includes(genre.id.toString()) ? "active" : ""}`}
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Genres;