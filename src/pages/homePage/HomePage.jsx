import React from 'react';
import video from '../../assets/videos/istockphoto-1370743548-640_adpp_is.mp4';
import logo from '../../assets/images/bandidas_tattoo_studio-modified.png';
import Navegator from '../../components/navegator/Navegator';
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';

import Contact from '../../components/contact/Contact';

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
      </div>

      <InfiniteCarrusel />

      <section className='services' id='services'>
        <div className="container">

        <h2>Palvelut</h2>
        {/* lorem 80 words */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloremque nostrum, maxime a veniam, nemo quod dolore ipsam quas provident, quis ducimus ullam porro animi nihil nobis laboriosam totam. Est, culpa. Cupiditate doloremque ex, optio rerum dolorem quos recusandae blanditiis repellendus praesentium maiores voluptates pariatur vero voluptas quasi error aut provident a eum quisquam animi! Ipsum pariatur ratione obcaecati dolorem cupiditate. Facilis delectus quam porro repellat aspernatur quae voluptates quisquam non, cumque dicta, nemo veritatis dolorem ipsam, odio magnam perferendis.</p>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default HomePage