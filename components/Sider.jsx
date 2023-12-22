import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Sider = ({bans}) => {
  return (
    <>     
     {bans.map((ban)=> (  //ใช้ function เเบบย่อ
    <Swiper key={ban.id}
        slidesPerView={1.3}
        spaceBetween={10}
        centeredSlides={true}  //ตัวนี้เเหละ คือตัวจัดกลึ่งกลาง ถ้ากำหนด true จะโชวทั้งสองฝั่ง ถ้าใช้ false มันจะไม่โชวทั้งสองฝั่ง
        loop={true}

        className="aspect-ratio-baner"
      >
        <SwiperSlide> 
                <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner.data.attributes.url}`}
                 alt={ban.attributes.ner.data.attributes.name}
                 height="320"
                 width="500"
                 /> 
              </SwiperSlide>
              <SwiperSlide> 
                <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner2.data.attributes.url}`}
                 alt={ban.attributes.ner2.data.attributes.name}
                 height="320"
                 width="500"
                 /> 
              </SwiperSlide>
              <SwiperSlide> 
               <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner3.data.attributes.url}`}
                 alt={ban.attributes.ner3.data.attributes.name}
                 height="320"
                 width="500"
                 /> 
              </SwiperSlide>
              <SwiperSlide> 
               <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner4.data.attributes.url}`}
                 alt={ban.attributes.ner4.data.attributes.name}
                 height="320"
                 width="500"
                 /> 
              </SwiperSlide>
              <SwiperSlide> 
               <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner5.data.attributes.url}`}
                 alt={ban.attributes.ner5.data.attributes.name}
                 height="320"
                 width="500"
                 /> 
              </SwiperSlide>
              <SwiperSlide> 
               <Image 
                 src={`https://sea-lion-app-hl2ko.ondigitalocean.app${ban.attributes.ner6.data.attributes.url}`}
                 alt={ban.attributes.ner6.data.attributes.name}
                 height="320"
                 width="500"
                
                 /> 
              </SwiperSlide>
      </Swiper>

))}
    </>
  )
}

export default Sider
