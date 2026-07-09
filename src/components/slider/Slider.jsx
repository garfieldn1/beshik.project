import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/image1.avif'
import image2 from '../../assets/image2.avif'
import image3 from '../../assets/image3.avif'
import image4 from '../../assets/image4.avif'
import image5 from '../../assets/image5.avif'
 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  

import './Slider.css';
 
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {

    return (
        <div className="slider-container">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true} 
                speed={5000} 
                autoplay={{
                    delay: 0,  
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true,
                }}
                freeMode={false }
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='slidercards'><img src={image1} alt="" /></SwiperSlide>
                <SwiperSlide className='slidercards'><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide className='slidercards'><img src={image3} alt="" /></SwiperSlide>
                <SwiperSlide className='slidercards'><img src={image4} alt="" /></SwiperSlide>
                <SwiperSlide className='slidercards'><img src={image5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
 










// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// import './Slider.css';

// // import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

// export default function App() {
//     return (
//         <>
//             <Swiper
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 freeMode={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[FreeMode, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// }