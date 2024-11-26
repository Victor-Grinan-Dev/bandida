import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../../components/navegator/Navegator';
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';
import Some from '../../components/some/Some';

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

      <InfiniteCarrusel />

      <section className='services' id='services'>
        <div className="container">

        <h2>Palvelut</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum porro sint quam sed repellat quae asperiores magnam totam saepe explicabo sequi in et enim illo exercitationem doloribus voluptatibus tempora doloremque, quidem, aliquid cum. Voluptatum doloremque nihil ullam sapiente ducimus veritatis omnis ad, illum neque sit ipsum, veniam nobis nesciunt. Debitis, maxime vel hic nobis corrupti voluptatum magni. Eveniet reprehenderit, sapiente sunt quae nulla aut saepe asperiores, atque quia pariatur accusamus natus dolor itaque exercitationem fugiat doloribus veniam harum fugit vero incidunt quidem veritatis, cum odit dolorum! Esse, culpa voluptates quia assumenda aspernatur tempore, tenetur commodi totam minima nulla minus consequuntur?</p>
        </div>
      </section>

      <section className='contact' id='contact'>
        <div className="container">

          <h3>Paula Anneli</h3>

          <h1>Bandida's Tattoo</h1>

          <Some />

          <p>All rights &reg; Reserved {new Date().getFullYear()}</p>

        </div>
      </section>
    </div>
  )
}

export default HomePage