
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

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
        <SwiperSlide>
          <img src="lovable-uploads\6e12fb56-7d2b-4aaf-ac6b-ba4d0e0290b8.png" alt="Cake 1" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="lovable-uploads\98a8ca4b-9331-4503-b853-7ae33c884fa8.png" alt="Cake 2" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="lovable-uploads\e3a4369a-5b8a-4213-b865-c69bca32ed5c.png" alt="Cake 3" className="rounded-xl" />
        </SwiperSlide>
        {/* Add more <SwiperSlide> blocks for more images */}
      </Swiper>
    </div>
  );
};

export default Gallery;
