import React, { useEffect, useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { blackGrey, colors, pmu, smalls } from '../../components/picLoader/PicLoader';
import PicModal from '../../components/picModal/PicModal';
import { useSelector } from 'react-redux';

const Gallery = () => {
  const { pathname } = useLocation();
  const isPicModal = useSelector(state => state.app.isPicModal);
  const [collection, setCollection] = useState('bg');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, collection]);

const handleTabs = (tabName) => {
  setCollection(tabName);
}
  return (
    <section className='gallery'>

      <div className="link-warpper">
        <AppLink caption="Takaisin" linkTo="/" />

        <div className='gallery-tabs'>
          <div className="tab-wrapper" onClick={()=>handleTabs('bg')}>
            <AppLink caption="Black & Grey" active={collection==='bg'}/>
          </div>
          <div className="tab-wrapper" onClick={()=>handleTabs('color')}>
            <AppLink caption="Värit" active={collection==='color'}/>
          </div>
          <div className="tab-wrapper" onClick={()=>handleTabs('pmu')}>
            <AppLink caption="PMU" active={collection==='pmu'}/>
          </div>
          <div className="tab-wrapper" onClick={()=>handleTabs('smalls')}>
            <AppLink caption="Pienet" active={collection==='smalls'}/>
          </div>
        </div>

        <div className="holder"></div>
      </div>

      <div className="collage" >
        {(collection === 'bg') && blackGrey.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }
        {(collection === 'color') && colors.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }
        {(collection === 'pmu' ) && pmu.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }
        {(collection === 'smalls' ) && smalls.map((pic, idx)=> (       
            <div className="img-wrapper" id={pic} key={idx} ><PicLoader pic={pic} idx={idx}/></div>
        )) }

      </div>

      {isPicModal && <PicModal pic={'pic030'} />

      }

    </section>
  )
}

export default Gallery;