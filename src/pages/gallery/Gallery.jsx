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
    <section className='gallery'>

      <div className="link-warpper">
        <AppLink caption="Takaisin" linkTo="/" />
      </div>

      <div className="collage" >
        {pictureArray && pictureArray.map((pic)=> (
          
            <div className="img-wrapper" id={pic}><PicLoader pic={pic}/></div>
          
        )) }
      </div>

    </section>
  )
}

export default Gallery;