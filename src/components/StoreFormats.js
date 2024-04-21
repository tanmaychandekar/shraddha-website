import React from 'react'
import data from '../data/carouselData.json'

const StoreFormats = () => {
  return (
    <div className='division container' id='stores'>
        <div>
          <h1 align="center">Store Formats</h1>
          {
            data.formats.map((format, idx) => {
              return (
                <div  className='store-formats'>
                  <div className="store-format-store" style={{margin: "4rem"}}>
                  <h3>{format.title}</h3>
                  <p>{format.description}</p>
                  </div>
                  <img src={format.src} />
                </div>
              )
            })
          }
       </div>


    </div>
  )
}

export default StoreFormats