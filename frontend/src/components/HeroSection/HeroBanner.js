import React from 'react';
import SearchBar from './SearchBar';

// const HeroBanner = () => {
//   return (
//     <div className="container-fluid flex flex-col items-center bg-blend-darken justify-center  w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-no-repeat bg-center">
//       <h1 className=" mt-20 font-bold text-white text-center  text-5xl">
//         Plan your Trip with Gokyo
//       </h1>
//       <SearchBar/>
//     </div>
//   );
// };

// export default HeroBanner;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function App() {
  const { data: slides } = useQuery('slider', () => {
    return axios
      .get('http://localhost:1337/api/sliders/?populate=*', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  });
  // console.log(slides);
  return (
    <>
      <div className="container-fluid  relative  mx-auto h-screen">
        <div className="heroSlider  clear-both">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            effect={'fade'}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            className="mySwiper relative bg-black-900/0.8 z-5"
          >
            {slides?.data[0].attributes.Image.data.map((slide, key) => (
              <SwiperSlide key={key}>
                <img
                  src={process.env.REACT_APP_API_URL + slide.attributes.url}
                  alt=""
                  className="object-cover w-full h-screen	 object-center aspect-auto	
"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute z-10  top-0 right-0 left-0 bottom-0 m-auto flex flex-col justify-center items-center">
          <h1 className=" mt-20 font-bold text-white text-center  text-5xl">
            {slides?.data[0].attributes.Title}
          </h1>
          <p className="mt-4 font-normal text-white text-center">
            {slides?.data[0].attributes.Description}
          </p>
          <SearchBar />
        </div>
      </div>
    </>
  );
}
