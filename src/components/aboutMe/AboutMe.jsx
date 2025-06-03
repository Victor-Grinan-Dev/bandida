import PicLoader from '../picLoader/PicLoader';
import { translate } from '../../translation/translator'
import { useSelector } from 'react-redux';
import ReadMore from '../readMore/ReadMore';

const AboutMe = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <section className='about-me' id='about-me'>

      <div className="panel-1" id="artist-section">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
        </div>
        <div className='omistaja' ><h3>{translate("artist", currentLang)}</h3></div>
      </div>
      <div className="panel-2">
        <div className="text-area">
          <p> 
            Hei, olen Paula, INKY 11:n perustaja, tatuoija ja koulutettu kestopigmentoija. 
          </p> 
          <br />
          <p>Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.</p>

          <ReadMore caption="Lue lisää Paulasta" linkTo="/artist"/>
        </div>
        
      </div>
      
    </section>
  )
}

export default AboutMe;