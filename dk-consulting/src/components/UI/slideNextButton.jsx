import  React  from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
      <button onClick={() => swiper.slideNext()} className="absolute top-[55px] right-[50px] md:right-[20px] sm:right-[15px] sm:top-[70px] xs:right-[15px] xs:top-[250px]">

          <svg width="50" height="226" viewBox="0 0 50 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:h-[102px] sm:w-[22px] xs:h-[102px] xs:w-[22px]">
              <path d="M1 1L49 113L1 225" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

      </button>
  );
}
