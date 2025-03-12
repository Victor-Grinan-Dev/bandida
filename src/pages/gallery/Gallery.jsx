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
  const [enableScroll, setEnableScroll] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleCount(5);
  }, [pathname, collection]);

  const handleTabs = (tabName) => {
    setCollection(tabName);
  };


  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
    // setTimeout(() => {
    //   setEnableScroll(true);
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, 50);
    setTimeout(() => {
      const element = document.querySelector('.collage-wrapper');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setTimeout(() => {
      setEnableScroll(false);
    }, 50);
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

      <div
        className="collage-wrapper"
        style={{
          maxHeight: enableScroll ? 'auto' : 'auto',
          overflowY: enableScroll ? 'hidden' : 'scroll',
        }}>

        <div className="collage">
          {[...currentPics].reverse().slice(0, visibleCount).map((pic, idx) => (
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
