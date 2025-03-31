import { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "galleryImage"]{ image { asset->{url} }, caption }`)
      .then((data) => {
        console.log("Fetched from Sanity:", data); // ← Add this
        setImages(
          data.map((item) => ({
            src: item.image.asset.url,
            ...(item.caption ? { title: item.caption } : {})
          }))
        );
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  return (
    <div id="gallery" className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-glitzy-darkpurple mb-10">Gallery</h2>

      {images.length > 0 && (
        <>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
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
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="rounded-xl w-full h-64 md:h-96 lg:h-[30rem] object-cover cursor-pointer"
                    onClick={() => {
                      setCurrentIndex(index);
                      setOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={currentIndex}
            slides={images}
          />
        </>
      )}
    </div>
  );
};

export default Gallery;