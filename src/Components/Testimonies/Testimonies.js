import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {data_Testimony} from './ALLTestimony';
import Cardslider from '../Card/Cardslider'
import { Pagination, Navigation } from 'swiper/modules';

const Testimonies = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [data,setData]=useState(data_Testimony);

   useEffect(()=>{
    changeOrder();
   }
   ,[])

   useEffect(()=>{
console.log(data)
   },[data])



  const changeOrder = () => {
    const newOrder = [...data].sort((a, b) =>a.id - b.id);
    setData(newOrder);
  };

  return (
    <>
                <div className="Testimonies">

                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={20}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        >
                        {
                            data.map((e,i)=>(
                              <SwiperSlide>
                                <Cardslider id={i} name={e.Author} review={e.Review}/>
                                </SwiperSlide>
                            ))

                        }
                              
                        </Swiper>
                        </div>
    </>
  )
}

export default Testimonies