import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const Slider = ({ movies }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!movies?.length) return <p>No movies available</p>;

  const loopEnabled = movies.length >= 4;

  return (
    <div className="container mx-auto w-3/4 p-4">
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(239, 68, 68, 0.8); /* Tailwind red-500 with opacity */
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgb(220, 38, 38); /* Tailwind red-600 */
          transform: scale(1.1);
        }
        .swiper-button-prev:active,
        .swiper-button-next:active {
          transform: scale(0.95);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px; /* Adjust arrow size */
          color: white; /* Ensure arrow is white for contrast */
        }
        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
          background-color: rgba(239, 68, 68, 0.3); /* Faded red when disabled */
          cursor: not-allowed;
        }
      `}</style>
      <Swiper
        modules={[Navigation]}
        navigation
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={loopEnabled}
        cssMode
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};