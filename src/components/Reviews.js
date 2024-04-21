import React from 'react'
import data from '../data/carouselData.json'

const Reviews = () => {
  return (
    <div className='division container'>
        <div align="center">
          <h1 align="center">Reviews</h1>
          <div  className='reviews'>
          {
            data.reviews.map((review, i) => {
                return (
                  <div className='review-card'>
                    <h3>{review.name}</h3>
                    <img src={review.src} />
                    <p>"{review.review}"</p>
                  </div>
                )
            })
          }
          </div>
          <a href='https://www.google.com/search?q=shraddha+extension&rlz=1C5CHFA_enIN949IN949&oq=shraddha&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQLhhDGK8BGMcBGIAEGIoFMgoIAhAuGLEDGIAEMgYIAxBFGDsyDAgEEAAYQxiABBiKBTISCAUQLhhDGK8BGMcBGIAEGIoFMhIIBhAuGEMYrwEYxwEYgAQYigUyDAgHEAAYQxiABBiKBTIKCAgQLhixAxiABDIHCAkQABiPAtIBCTEzOTNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8' target='_'>View More</a>
        </div>
    </div>
  )
}

export default Reviews