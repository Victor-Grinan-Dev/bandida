import React, { useEffect, useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { blackGrey, colors, pmu, smalls } from '../../components/picLoader/PicLoader';
import PicModal from '../../components/picModal/PicModal';
import { useSelector } from 'react-redux';
import AppButton from '../../components/appButton/AppButton';

const Gallery = () => {
  const { pathname } = useLocation();
  const isPicModal = useSelector(state => state.app.isPicModal);
  const [collection, setCollection] = useState('bg');
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    setVisibleCount(5);
  }, [pathname]);

  const handleTabs = (tabName) => {
    setCollection(tabName);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  const getPics = () => {
    switch (collection) {
      case 'bg': return blackGrey;
      case 'color': return colors;
      case 'pmu': return pmu;
      case 'smalls': return smalls;
      default: return [];
    }
  };

  const currentPics = getPics();

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

      <div className="collage-wrapper" >
        <div className="collage">
          {[...currentPics].slice(0, visibleCount).map((pic, idx) => (
            <div className="img-wrapper" id={pic} key={idx}>
              <PicLoader pic={pic} idx={idx} />
            </div>
          ))}
      </div>
      </div>

      {visibleCount < currentPics.length && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <AppButton caption="Lataa lisää" fx={loadMore} />
        </div>
      )}

      {isPicModal && <PicModal pic={'pic030'} />}
    </section>
  );
};

export default Gallery;
