import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../../components/navegator/Navegator';
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';
import Services from '../../components/services/Services';
import Contact from '../../components/contact/Contact';
import TransparentSection from '../../components/transparentSection/TransparentSection';

const HomePage = () => {

  return (
    <div className='homepage'>
      <div className='banner'>
        <Navegator />
        <div className="video-container">
          <video className='video-banner' autoPlay loop muted playbackrate="0.2" src={video} />
        </div>
        <div className="image-container">
          <img src={logo} alt="" />
        </div>
      </div>
      {/* <TransparentSection /> */}

      <InfiniteCarrusel />

      <Services />

      <Contact />
    </div>
  )
}

export default HomePage