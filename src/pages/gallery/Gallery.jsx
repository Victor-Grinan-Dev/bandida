import React from 'react';
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <Link to="/">Takaisin</Link>
      <div class="album">
        <div class="responsive-container-block bg">
          <div class="responsive-container-block img-cont">
            <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg" alt="gallery item" />
            <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg" alt="gallery item" />
            <img class="img img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg" alt="gallery item" />
          </div>
          <div class="responsive-container-block img-cont">
            <img class="img img-big" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg" alt="gallery item" />
            <img class="img img-big img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg" alt="gallery item" />
          </div>
          <div class="responsive-container-block img-cont">
            <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg" alt="gallery item" />
            <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg" alt="gallery item" />
            <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg" alt="gallery item" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;