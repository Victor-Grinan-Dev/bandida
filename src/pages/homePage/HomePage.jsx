import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../../components/Navegator';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='banner'>
        <Navegator />
        <div className="video-container">
          <video className='video-banner' autoPlay loop muted playbackRate="0.2" src={video} />
        </div>
        <div className="image-container">
          <img src={logo} alt="" />
        </div>
        {/* <h1 className='title'>Bandida's tattoo</h1> */}
      </div>

      <section className='portfolio'>
        <div className="container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </section>

      <section className='about'>
        <div className="container">
        <h2>about</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptas est placeat, nobis tempora ipsum et inventore totam quibusdam perspiciatis magnam deserunt maiores quia exercitationem, ullam facere eius nulla ut!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas est placeat,</p>
        </div>
      </section>

      <section className='contact'>
        <div className="container">
          <div>Whatsapp</div>
          <div>Instagram</div>
          <div>Tik Tok</div>
          <div>Email</div>
        </div>
      </section>
    </div>
  )
}

export default HomePage