import { useEffect, useState } from 'react';
import AppLink from '../../components/appLink/AppLink';
import { useLocation } from 'react-router-dom';
import PicLoader, { blackGrey, colors, pmu, smalls } from '../../components/picLoader/PicLoader';
import PicModal from '../../components/picModal/PicModal';
import { useSelector } from 'react-redux';
import AppButton from '../../components/appButton/AppButton';

const Gallery = (props) => {
  const {children, collection} = props;
  const { pathname } = useLocation();
  const isPicModal = useSelector(state => state.app.isPicModal);
  // const [collection, setCollection] = useState('bg');
  const [visibleCount, setVisibleCount] = useState(5);
  const currentLang = useSelector((state) => state.app.currentLang);
  const picModalCurrentPic = useSelector((state) => state.app.picModalCurrentPic);

  useEffect(() => {
    setVisibleCount(5);
  }, [pathname]);

  // const handleTabs = (tabName) => {
  //   setCollection(tabName);
  // };

  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  // const getPics = () => {
  //   switch (collection) {
  //     case 'bg': return blackGrey;
  //     case 'color': return colors;
  //     case 'pmu': return pmu;
  //     case 'smalls': return smalls;
  //     default: return [];
  //   }
  // };

  const eSExtraStyle = {
    padding: "5px 10px",

  }
  // const pics = getPics();

  return (
    <section className='gallery'>
      
      <div className="link-warpper">
        <AppLink caption="kotiin" linkTo="/"  extraStyle={currentLang === "es" ? eSExtraStyle : null}/>

        <div className='gallery-tabs'>
          <div className="tab-wrapper" >
            <AppLink caption="Black & Grey" active={collection==='bg'} extraStyle={currentLang === "es" ? eSExtraStyle : null} linkTo="/galleria/mustavalkoinen-tatuointi"/>
          </div>
          <div className="tab-wrapper" >
            <AppLink caption="värit" active={collection==='color'} extraStyle={currentLang === "es" ? eSExtraStyle : null} linkTo="/galleria/värilliset-tatuointi"/>
          </div>
          <div className="tab-wrapper" >
            <AppLink caption="pienet" active={collection==='smalls'} extraStyle={currentLang === "es" ? eSExtraStyle : null} linkTo="/galleria/pienet-tatuointi"/>
          </div>
          <div className="tab-wrapper" >
            <AppLink caption="PMU" active={collection==='pmu'} extraStyle={currentLang === "es" ? eSExtraStyle : null} linkTo="/galleria/pmu-tatuointi"/>
          </div>
        </div>

        <div className="holder"></div>
      </div>
{children}


      {/* {visibleCount < pics.length && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <AppButton caption="lataa lisää" fx={loadMore} />
        </div>
      )} */}

      {isPicModal && <PicModal pic={picModalCurrentPic} />}
    </section>
  );
};

export default Gallery;
