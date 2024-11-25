import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../../components/Navegator';

const HomePage = () => {
  return (
    <div className='homepage'>
      <section>
        <Navegator />
        <div className="video-container">
          <video className='video-banner' autoPlay loop muted playbackRate="0.2" src={video}></video>
        </div>
        <div className="image-container">
          <img src={logo} alt="" />
        </div>
        {/* <h1 className='title'>Bandida's tattoo</h1> */}
      </section>

      <section>
        section 2
      </section>

      <section>
        section 3
      </section>
    </div>
  )
}

export default HomePage