import AppLink from '../../components/appLink/AppLink';
import PicModal from '../../components/picModal/PicModal';
import { useSelector } from 'react-redux';


const Gallery = (props) => {
  const {children, collection} = props;
  const isPicModal = useSelector(state => state.app.isPicModal);
  const currentLang = useSelector((state) => state.app.currentLang);
  const picModalCurrentPic = useSelector((state) => state.app.picModalCurrentPic);

  const eSExtraStyle = {
    padding: "5px 10px",
  }

  return (
    <section className='gallery'>
      
      <div className="link-warpper">
        <AppLink caption="etusivu" linkTo="/"  extraStyle={currentLang === "es" ? eSExtraStyle : null}/>

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

      {isPicModal && <PicModal pic={picModalCurrentPic} />}
    </section>
  );
};

export default Gallery;
