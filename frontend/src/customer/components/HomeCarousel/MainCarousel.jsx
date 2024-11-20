import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

function MainCarousel() {
    const items = MainCarouselData.map((item)=> <img src={item.image} alt='' className='cursor-pointer' />)
  return (
    <AliceCarousel
        autoPlay
        disableButtonsControls
        autoPlayInterval={5000}
        infinite
        items={items}
    />
  )
}

export default MainCarousel