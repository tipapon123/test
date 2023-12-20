import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Slotgame = ({slotgames}) => {
  return (
    <>

     <span>สล็อตยอดนิยม</span>

       {slotgames.map((slotgame)=>(   
       <Swiper key={slotgame.id}
              slidesPerView={3.5}
              spaceBetween={10}
              centeredSlides={false}
              loop={false}
              className="aspect-ratio-slot"
       >
                     <SwiperSlide className=''>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl1.data.attributes.url}`}
                                   alt={slotgame.attributes.sl1.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                                   
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl2.data.attributes.url}`}
                                   alt={slotgame.attributes.sl2.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl3.data.attributes.url}`}
                                   alt={slotgame.attributes.sl3.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl4.data.attributes.url}`}
                                   alt={slotgame.attributes.sl4.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl5.data.attributes.url}`}
                                   alt={slotgame.attributes.sl5.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl6.data.attributes.url}`}
                                   alt={slotgame.attributes.sl6.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl7.data.attributes.url}`}
                                   alt={slotgame.attributes.sl7.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl8.data.attributes.url}`}
                                   alt={slotgame.attributes.sl8.data.attributes.name}
                                   height="137"
                                   width="137"
                                   rel="preload"
                                   priority={false} />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl9.data.attributes.url}`}
                                   alt={slotgame.attributes.sl9.data.attributes.name}
                                   height="137"
                                   width="137"
                                   />
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image 
                                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${slotgame.attributes.sl10.data.attributes.url}`}
                                   alt={slotgame.attributes.sl10.data.attributes.name}
                                   height="137"
                                   width="137"
                                  />
                     </SwiperSlide>
              </Swiper>
            ))}
    </>
  )
}

export default Slotgame