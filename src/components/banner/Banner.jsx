import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../navegator/Navegator';

const Banner = () => {
    /* TODO: onclick in nav tab smoth scroll wait .3s then return to snap-scroll */
    // const addScrollSnap = () => {
    
    // }

    // const remScrollSnap = () => {

    // }
    // scroll-snap-align: none;
    // scroll-snap-stop: none;

  return (
      <div className='banner'>
            <Navegator />

            <div className="video-container">
                <video className='video-banner' autoPlay loop muted playbackrate="0.2" src={video} />
            </div>

            <div className="image-container">
                <img src={logo} alt="appLogo" />
            </div>
      </div>
  )
}

export default Banner;