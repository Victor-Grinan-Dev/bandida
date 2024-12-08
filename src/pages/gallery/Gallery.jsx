import React, { useEffect, useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { blackGrey } from '../../components/picLoader/PicLoader';

const Gallery = () => {
  const { pathname } = useLocation();
  const [colection, setCollection] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setCollection('all');
  }, [pathname]);


  return (
    <section className='gallery'>

      <div className="link-warpper">
        <AppLink caption="Takaisin" linkTo="/" />

        <div className='gallery-tabs'>
          <AppLink caption="Black & Grey" />
          <AppLink caption="PMU" />
        </div>

        <div className="holder"></div>
      </div>

      <div className="collage" >
        {(colection === 'bg') && blackGrey.map((pic)=> (       
            <div className="img-wrapper" id={pic}><PicLoader pic={pic}/></div>
        )) }
        {(colection === 'pmu') && blackGrey.map((pic)=> (       
            <div className="img-wrapper" id={pic}><PicLoader pic={pic}/></div>
        )) }
        {(colection !== 'bg' || colection !== 'pmu') && blackGrey.map((pic)=> (       
            <div className="img-wrapper" id={pic}><PicLoader pic={pic}/></div>
        )) }

      </div>

    </section>
  )
}

export default Gallery;