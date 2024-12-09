import React, { useEffect, useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { blackGrey, colors, pmu } from '../../components/picLoader/PicLoader';

const Gallery = () => {
  const { pathname } = useLocation();
  const [colection, setCollection] = useState('bg');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

const handleTabs = (tabName) => {
  setCollection(tabName);
   
}
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
            <div className="img-wrapper" id={pic}><PicLoader pic={pic} fx={()=>handleTabs('bg')}/></div>
        )) }
        {(colection === 'color') && colors.map((pic)=> (       
            <div className="img-wrapper" id={pic}><PicLoader pic={pic} fx={()=>handleTabs('color')}/></div>
        )) }
        {(colection === 'pmu' ) && pmu.map((pic)=> (       
            <div className="img-wrapper" id={pic}><PicLoader pic={pic} fx={()=>handleTabs('pmu')}/></div>
        )) }

      </div>

    </section>
  )
}

export default Gallery;