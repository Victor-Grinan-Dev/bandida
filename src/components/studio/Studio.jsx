import PicLoader from '../picLoader/PicLoader';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import ReadMore from '../readMore/ReadMore';

const studioimg = {
    filter: "grayscale(100%) brightness(1.2) saturate(1.5) hue-rotate(45deg) sepia(0.1)",
}

const Studio = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  
  return (
    <section className='studio' id='studio-section'>

      <div className="panel-1">
        <div className="text-area">
          <p>Pieni, mutta persoonallinen tatuointistudio.</p> 
          <br />
          <p>Pieni ja persoonallinen studiomme sijaitsee Porvoonkatu 14:ssä, Helsingin Alppilassa, aivan Linnanmäen naapurissa. Meille pääset nopeasti esimerkiksi Kalliosta, Pasilasta ja keskustasta.</p>
          <br />
          <p>Täällä tehdään kauneutta ja taidetta tunteella ja taidolla!</p>
          <ReadMore caption="lue lisää" linkTo="/studio"/>
        </div>
      </div>

      <div className="panel-2">

        <div className="profile-pic">
          <PicLoader pic="studio" style={studioimg} seoAlt={"Inkky11 tattoo studio Helsinki"} picModalOn={false}/>
        </div>

        <div className='omistaja'><h3>{translate("studio", currentLang)}</h3></div>

      </div>

    </section>
  )
}

export default Studio;