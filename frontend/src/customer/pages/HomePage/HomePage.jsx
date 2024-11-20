import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from "../../../Data/mens_kurta"

function HomePage() {
  return (
    <div>
        <MainCarousel />

        <div className='py-20 space-y-10 flex flex-col justify-center px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens's Kurta"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage