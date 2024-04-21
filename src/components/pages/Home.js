
import React from 'react'
import Carousel from '../Carousel'
import About from '../About'
import Reviews from '../Reviews'
import StoresFormats from '../StoreFormats'
import StoreLocator from '../StoreLocator'
import Footer from '../Footer'
import slides from '../../data/carouselData.json'


const Home = () => {
  return (
    <div id='home'>
        <Carousel data={slides}/>
        <About />
        <Reviews />
        <StoresFormats />
        <StoreLocator />
        <Footer />
    </div>
  )
}

export default Home