import React from 'react';

import test1 from '../../assets/images/tatoos/a test-1.jpg'
import test2 from '../../assets/images/tatoos/a test-2.jpg'
import test3 from '../../assets/images/tatoos/a test-3.jpg'
import test4 from '../../assets/images/tatoos/a test-4.jpg'
import test5 from '../../assets/images/tatoos/a test-5.jpg'
import test6 from '../../assets/images/tatoos/a test-6.jpg'
import test7 from '../../assets/images/tatoos/a test-7.jpg'
import test8 from '../../assets/images/tatoos/a test-8.jpg'
import { Link } from 'react-router-dom';

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


        <div>
            <Link to="/gallery">Lisää </Link>
        </div>

  </section>
  )
}

export default InfiniteCarrusel;