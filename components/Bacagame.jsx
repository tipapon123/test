import React from 'react'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Bacagame = ({bacagames}) => {
  return (
    <>
       <span>บาคาร่ายอดนิยม</span>
       {bacagames.map((bacagame)=>( //Baccarat
         <Swiper key={bacagame.id}
                slidesPerView={3.5}
                spaceBetween={10}
                centeredSlides={false} //ตัวนี้เเหละ คือตัวจัดกลึ่งกลาง ถ้ากำหนด true จะโชวทั้งสองฝั่ง ถ้าใช้ false มันจะไม่โชวทั้งสองฝั่ง
                loop={false}
                className="aspect-ratio-baccarat"
        >
                        <SwiperSlide className=''>
                                <Image
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl1.data.attributes.url}`}
                                        alt={bacagame.attributes.sl1.data.attributes.name}
                                        height="137"
                                        width="137"
                                       />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl2.data.attributes.url}`}
                                        alt={bacagame.attributes.sl2.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl3.data.attributes.url}`}
                                        alt={bacagame.attributes.sl3.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl4.data.attributes.url}`}
                                        alt={bacagame.attributes.sl4.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl5.data.attributes.url}`}
                                        alt={bacagame.attributes.sl6.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl7.data.attributes.url}`}
                                        alt={bacagame.attributes.sl7.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl8.data.attributes.url}`}
                                        alt={bacagame.attributes.sl8.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl9.data.attributes.url}`}
                                        alt={bacagame.attributes.sl9.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image 
                                        src={`https://sea-lion-app-hl2ko.ondigitalocean.app${bacagame.attributes.sl10.data.attributes.url}`}
                                        alt={bacagame.attributes.sl10.data.attributes.name}
                                        height="137"
                                        width="137"
                                        />
                        </SwiperSlide>
                </Swiper>
         ))}
   </>
  )
}

export default Bacagame