import React, { useEffect } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { pictureArray } from '../../components/picLoader/PicLoader';



const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='gallery'>

      <div className="link-warpper">
        <AppLink caption="Takaisin" linkTo="/" />
      </div>


      {/* every 5 to 8 images in store: create this component */}
      <div className="collage" >
        {pictureArray && pictureArray.map((pic, idx)=> (
          
            <div className="img-wrapper" id={pic}><PicLoader pic={pic}/></div>
          
        )) }
      </div>

      {/* <div className="album">
        <div className="responsive-container-block bg ">
          
          <div className="responsive-container-block img-cont">
            <img className="img img-big" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
          </div>

          <div className="responsive-container-block img-cont">
            <img className="img" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
            <img className="img img-last" src="https://via.placeholder.com/200x165" alt="gallery item" />
          </div>

          <div className="responsive-container-block img-cont">
            <img className="img img-big" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
            <img className="img img-big img-last" src="https://via.placeholder.com/170x300" alt="gallery item" />
          </div>

        </div>
      </div> */}

      {/* <div className="album">
        <div className="responsive-container-block bg ">
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
      </div> */}
    </div>
  )
}

export default Gallery;