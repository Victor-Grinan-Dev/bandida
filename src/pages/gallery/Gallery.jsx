import React from 'react';
import { Link } from 'react-router-dom';
import AppLink from '../../components/appLink/AppLink';

const Gallery = () => {
  return (
    <div>
      <AppLink caption="Takaisin" linkTo="/" />
      <div className="album">
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg" alt="gallery item" />
            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg" alt="gallery item" />
            <img className="img img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg" alt="gallery item" />
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img img-big" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg" alt="gallery item" />
            <img className="img img-big img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg" alt="gallery item" />
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg" alt="gallery item" />
            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg" alt="gallery item" />
            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg" alt="gallery item" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;