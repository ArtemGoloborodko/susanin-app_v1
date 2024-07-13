import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';
import { Pagination } from 'swiper/modules';

export const Swipers = ({ images }) => {
  if (!images || !Array.isArray(images)) {
    // Если images не определены или не являются массивом, возвращаем null или другой UI
    return null;
  }

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((imgSrc, idx) => (
          <SwiperSlide key={idx}>
            <img src={imgSrc} alt={`Swiper img ${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

