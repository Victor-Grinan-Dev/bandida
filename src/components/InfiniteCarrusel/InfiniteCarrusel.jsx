import React from 'react';

import test1 from '../../assets/images/all pics/pic001.jpg'
import test2 from '../../assets/images/all pics/pic002.jpg'
import test3 from '../../assets/images/all pics/pic003.jpg'
import test4 from '../../assets/images/all pics/pic004.jpg'
import test5 from '../../assets/images/all pics/pic005.jpg'
import test6 from '../../assets/images/all pics/pic006.jpg'
import test7 from '../../assets/images/all pics/pic007.jpg'
import test8 from '../../assets/images/all pics/pic008.jpg'

import AppLink from '../appLink/AppLink';

const InfiniteCarrusel = () => {
  return (
    <section className='portfolio homepage-section homepage-section-dark' id='porfolio'>
        <div className="carrusel wrapper to-left" >
            <div className='carrusel-item item1'>
                <img src={test1} alt="tattoo" />
            </div>
            <div className='carrusel-item item2'>
                <img src={test2} alt="tattoo" /> 
            </div>
            <div className='carrusel-item item3'>
                <img src={test3} alt="tattoo" />
            </div>
            <div className='carrusel-item item4'>
                <img src={test4} alt="tattoo" />
            </div>
            <div className='carrusel-item item5'>
                <img src={test5} alt="tattoo" />
            </div>
            <div className='carrusel-item item6'>
                <img src={test6} alt="tattoo" />
            </div>
            <div className='carrusel-item item7'>
                <img src={test7} alt="tattoo" />
            </div>
            <div className='carrusel-item item8'>
                <img src={test8} alt="tattoo" />
            </div>
        </div>


        <div className='app-link-container'>
            <AppLink caption="katso Lisää kuvia" linkTo="/gallery"/>
        </div>

        <div className="test" style={{textAlign:"center", lineHeight:2.5}}>

            <h1>My Style</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum velit debitis? Excepturi ullam et cum quasi suscipit veritatis repudiandae rem vero blanditiis sapiente. Illo perspiciatis corporis quidem eos laborum vel sequi debitis veniam iure numquam, voluptatibus aliquid rem, nesciunt cupiditate laboriosam dolor ab consequatur dolore nostrum suscipit natus non possimus maiores? Totam enim repudiandae impedit, quos eos dolore qui illo accusamus ad eligendi nesciunt quo atque excepturi veniam officiis quis laborum? Vero aliquam quibusdam nihil rem non. Ex nam fugit in, expedita nihil sint suscipit iusto sed provident ratione eos dicta cum dignissimos sit nesciunt ea, laudantium, voluptas similique.
            </p>
        </div>
  </section>
  )
}

export default InfiniteCarrusel;