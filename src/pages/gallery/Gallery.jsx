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
  console.log(tabName)
  setCollection(tabName);
   
}
  return (
    <section className='gallery'>

      <div className="link-warpper">
        <AppLink caption="Takaisin" linkTo="/" />

        <div className='gallery-tabs'>
          <div className="tab-wrapper" onClick={()=>handleTabs('bg')}>
            <AppLink caption="Black & Grey" active={colection==='bg'}/>
          </div>
          <div className="tab-wrapper" onClick={()=>handleTabs('color')}>
            <AppLink caption="Colors" active={colection==='color'}/>
          </div>
          <div className="tab-wrapper" onClick={()=>handleTabs('pmu')}>
            <AppLink caption="PMU" active={colection==='pmu'}/>
          </div>
        </div>

        <div className="holder"></div>
      </div>

      <div className="collage" >
        {(colection === 'bg') && blackGrey.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }
        {(colection === 'color') && colors.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }
        {(colection === 'pmu' ) && pmu.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }

      </div>

    </section>
  )
}

export default Gallery;