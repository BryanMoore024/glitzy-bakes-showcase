
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Gallery = () => {
  return (
    <div id="gallery" className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-glitzy-darkpurple mb-10">Gallery</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-3xl mx-auto"
      >
        {Array.from({ length: 31 }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="p-2">
              <img
                src={`/lovable-uploads/image-${i + 1}.jpg`}
                alt={`Cake ${i + 1}`}
                className="rounded-xl w-full h-64 md:h-96 lg:h-[30rem] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;