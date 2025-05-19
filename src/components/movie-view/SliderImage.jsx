import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const SliderImage = ({ movies }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const url = import.meta.env.VITE_IMAGE_URL;

  if (!movies?.length) return <p>No movies available</p>;

  const loopEnabled = movies.length >= 4;

  return (
    <div className="container mx-auto w-3/4 p-4">
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(239, 68, 68, 0.8); 
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgb(220, 38, 38); 
          transform: scale(1.1);
        }
        .swiper-button-prev:active,
        .swiper-button-next:active {
          transform: scale(0.95);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px; 
          color: white; 
        }
        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
          background-color: rgba(239, 68, 68, 0.3); 
          cursor: not-allowed;
        }
        .movie-image {
          width: 100%;
          height: 500px; 
          object-fit: cover;
          border-radius: 8px; 
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .movie-image:hover {
          transform: scale(1.05); 
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
        }
        @media (max-width: 768px) {
          .movie-image {
            height: 300px;
          }
        }
        @media (max-width: 640px) {
          .movie-image {
            height: 250px; 
          }
        }
      `}</style>
      <Swiper
        modules={[Navigation]}
        navigation
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //   1280: { slidesPerView: 4 },
        // }}
        loop={loopEnabled}
        cssMode
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='container'>
              <img
                src={`${url}${item.backdrop_path || item.poster_path}`}
                alt={item.title || 'Movie backdrop'}
                className="movie-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};