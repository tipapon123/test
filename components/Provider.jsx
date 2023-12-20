import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';


const Provider = ({providers}) => {
  return (
    <>     
    <div className='pt-2 ml-10'></div>
    <span>ผู้ให้บริการ</span>
        {providers.map((provider) =>( //provider
         <Swiper key={provider.id}
                      slidesPerView={5.5}
                      spaceBetween={10}
                      centeredSlides={false} //ตัวนี้เเหละ คือตัวจัดกลึ่งกลาง ถ้ากำหนด true จะโชวทั้งสองฝั่ง ถ้าใช้ false มันจะไม่โชวทั้งสองฝั่ง
                      loop={true}
                      autoplay={{
                             delay: 1000,
                             disableOnInteraction: false,
                      }}
                      pagination={{
                             clickable: true,
                      }}
                      modules={[Autoplay]}
                      className="aspect-ratio-box"
               >
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl1.data.attributes.url}`}
                                           alt={provider.attributes.sl1.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl2.data.attributes.url}`}
                                           alt={provider.attributes.sl2.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl3.data.attributes.url}`}
                                           alt={provider.attributes.sl3.data.attributes.name}
                                           height="100"
                                           width="100"
                                           />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl4.data.attributes.url}`}
                                           alt={provider.attributes.sl4.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl5.data.attributes.url}`}
                                           alt={provider.attributes.sl5.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl6.data.attributes.url}`}
                                           alt={provider.attributes.sl6.data.attributes.name}
                                           height="100"
                                           width="100"
                                           />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl7.data.attributes.url}`}
                                           alt={provider.attributes.sl7.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl8.data.attributes.url}`}
                                           alt={provider.attributes.sl8.data.attributes.name}
                                           height="100"
                                           width="100"
                                           />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl9.data.attributes.url}`}
                                           alt={provider.attributes.sl9.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                             <SwiperSlide>
                                    <Image 
                                           src={`https://sea-lion-app-hl2ko.ondigitalocean.app${provider.attributes.sl10.data.attributes.url}`}
                                           alt={provider.attributes.sl10.data.attributes.name}
                                           height="100"
                                           width="100"
                                          />
                             </SwiperSlide>
                      </Swiper>
         
        ))}

   
   
  
</>
  )
}

export default Provider