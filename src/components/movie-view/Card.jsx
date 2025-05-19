import { useStateValue } from '@/context';
import React from 'react';
import { FaRegBookmark, FaBookmark, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const [state, dispatch] = useStateValue();
  const isSaved = (state.saved || []).some(({ id }) => id === item.id);
  const fallbackImage = '/path/to/fallback-image.jpg'; 

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${item.id}`);
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // Prevent the card's onClick from firing
    dispatch({ type: 'SAVED', payload: item });
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <style jsx>{`
        .card-image {
          transition: transform 0.5s ease;
        }
        .card:hover .card-image {
          transform: scale(1.05);
        }
        .bookmark-btn {
          transition: all 0.3s ease;
        }
        .bookmark-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .bookmark-btn:active {
          transform: scale(0.95);
        }
        .rating-badge {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .rating-badge:hover {
          background-color: rgba(234, 179, 8, 0.3);
          transform: scale(1.1);
        }
      `}</style>

      <div className="relative">
        <img
          src={item.poster_path ? `${url}${item.poster_path}` : fallbackImage}
          alt={item.title}
          className="card-image w-full h-64 object-cover rounded-t-xl"
          loading="lazy"
          title={`Poster for ${item.title}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <button
          onClick={handleBookmarkClick}
          className={`bookmark-btn absolute top-3 right-3 p-2 rounded-full z-10 ${
            isSaved
              ? 'bg-amber-400 text-gray-900 hover:bg-amber-500'
              : 'bg-red-600/80 text-white hover:bg-red-700'
          }`}
          aria-label={isSaved ? 'Remove bookmark' : 'Bookmark movie'}
        >
          {isSaved ? <FaBookmark className="w-5 h-5" /> : <FaRegBookmark className="w-5 h-5" />}
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate mb-2">{item.title}</h3>
        <div className="rating-badge bg-amber-500/20 text-amber-100 px-3 py-1 rounded-full flex items-center gap-1 w-fit">
          <FaStar className="w-4 h-4 text-amber-400" />
          <span className="text-sm">{item.vote_average.toFixed(1)}</span>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mt-2">{item.overview || 'No description available'}</p>
        <p className="text-gray-400 text-xs mt-2">Release: {item.release_date?.slice(0, 4) || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Card;