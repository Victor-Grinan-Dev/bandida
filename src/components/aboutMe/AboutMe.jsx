import PicLoader from '../picLoader/PicLoader';
import { translate } from '../../translation/translator'
import { useSelector } from 'react-redux';
import ReadMore from '../readMore/ReadMore';

const AboutMe = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <section className='artist-section' id="artist-section">

      <div className="section-title">
        <h3>Paula Annelica</h3>
      </div>

      <div className="section-image">
          <PicLoader pic="paula_profile_1" extraClass="artist-picture" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
      </div>

      <div className="section-text">
        <p>Hei, olen Paula, INKY 11:n perustaja, tatuoija ja koulutettu kestopigmentoija.</p> 
        <br />
        <p>Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.</p>
        <br />
        <ReadMore title={false} caption="Lue lisää Paulasta" linkTo="/paula-annelica"/>
      </div> 
    </section>
  )
}

export default AboutMe;