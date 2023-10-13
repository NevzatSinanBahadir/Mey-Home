import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Autoplay, Pagination, Navigation, EffectCoverflow} from 'swiper/modules';
import './App.css'



const HomeSlider = () => {
  return (
    <div style={{marginTop:'56px'}}>
       <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 3200,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  effect="coverflow"
  coverflowEffect={{
    rotate: 50, // Slaytların döndürme açısı
    stretch: 0, // Aktif olmayan slaytların ne kadar genişletileceği
    depth: 100, // Slaytların ne kadar derinlikte olacağı
    modifier: 1, // Etki modifikatörü
    slideShadows: true, // Slaytların gölgelerini gösterir veya gizler
  }}
  modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
  className="mySwiper slider"
>

       
        
            <SwiperSlide> <img src="https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg" className='img-fluid bg-image   '></img></SwiperSlide>
            <SwiperSlide> <img src="https://st3.myideasoft.com/shop/do/94/myassets/products/233/chester-koltuk-modelleri-takimi-modelleri.jpg?revision=1660182377" className='img-fluid bg-image  '></img></SwiperSlide>
            <SwiperSlide> <img src="https://st1.myideasoft.com/shop/al/13/myassets/products/943/koltuk-854768.jpg?revision=1656414253" className='img-fluid bg-image  '></img></SwiperSlide>
       

          

      </Swiper>

    </div>
  )
}

export default HomeSlider