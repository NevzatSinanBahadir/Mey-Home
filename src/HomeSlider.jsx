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
            <SwiperSlide> <img src="https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg" className='img-fluid bg-image  '></img></SwiperSlide>
            <SwiperSlide> <img src="https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg" className='img-fluid bg-image  '></img></SwiperSlide>
            <SwiperSlide> <img src="https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862" className='img-fluid bg-image  '></img></SwiperSlide>
            <SwiperSlide> <img src="https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg" className='img-fluid bg-image  '></img></SwiperSlide>
            
       

          

      </Swiper>

    </div>
  )
}

export default HomeSlider