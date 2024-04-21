import React from 'react'

import data from '../data/carouselData.json'

const About = () => {
  return (
    <div id='about'>
      <div className='division container' id='about'>
        <h1>About Us</h1>
        <p>
          {console.log(data)}
          {data.aboutus.info}
        </p>
      </div>
    </div>
  )
}

export default About