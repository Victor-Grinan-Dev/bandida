import { useSelector } from 'react-redux';
import PicLoader from '../picLoader/PicLoader';
import ReadMore from '../readMore/ReadMore';
import { translate } from '../../translation/translator';

const AboutMe = () => {

  const currentlang = useSelector((state) => state.app.currentLang);
  return (
    <section className='artist-section' id="artist-section">

      <div className="section-title">
        <h3>Paula Annelica</h3>
      </div>

      <div className="section-image">
          <PicLoader pic="paula_profile_1" extraClass="artist-picture" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
      </div>

      <div className="section-text">
        <p>{translate("Hei, olen Paula, INKY 11:n perustaja, tatuoija ja koulutettu kestopigmentoija.", currentlang)}</p> 
        <br />
        <p>{translate("Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.", currentlang)}</p>
        <br />
        <ReadMore title={false} caption="Lue lisää Paulasta" linkTo="/paula-annelica"/>
      </div> 
    </section>
  )
}

export default AboutMe;