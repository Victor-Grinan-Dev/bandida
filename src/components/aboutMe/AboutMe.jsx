import PicLoader from '../picLoader/PicLoader';
import { translate } from '../../translation/translator'
import { useSelector } from 'react-redux';
import ReadMore from '../readMore/ReadMore';

const AboutMe = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <section className='about-me' id='about-me'>

      <div className="panel-1">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
        </div>
        <div className='omistaja'><h3>{translate("artist", currentLang)}</h3></div>
      </div>
      <div className="panel-2">
        <div className="text-area">
          <p>Hei, olen Paula, Tatuoija & sertifioitu tuore kestopigmentoija.</p> 
          <br />
          <p>Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.</p>

          {/*
          Tatuoija & sertifioitu kestopigmentoija

          Hei, olen Paula, tatuoija ja tuore kestopigmentoija.

          Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.

          Olen äskettäin laajentanut osaamistani kestopigmentointeihin ja microbladingiin, joihin olen saanut viralliset koulutukset. Nyt tarjoan palveluita myös niille, jotka kaipaavat luonnollista ja kestävää kauneuden korostamista – esimerkiksi kauniisti muotoillut kulmat tai huulten kevyt sävytys voivat tehdä arjesta asteen huolettomampaa. Lähestyn jokaista työtä luonnollisuuden ja yksilöllisyyden kautta.

          Olen helposti lähestyttävä, tarkka ja sydämellä mukana jokaisessa projektissa.

          Minulle tärkeintä on, että asiakas tuntee olonsa tervetulleeksi, turvalliseksi ja kuulluksi. Jokainen iho on ainutlaatuinen, ja siksi jokainen työ on tarkkaan mietitty ja huolella tehty juuri sinua varten.

          Vaikka töissäni näkyy pääsääntöisesti mustaharmaa realismi, rakastan värejä ja teen myös värikuvia oikein mielelläni kuten myös pieniä yksinkertaisempiakin kuvia.

          Tervetuloa toteuttamaan juuri sinun visiosi – oli se sitten herkkä pieni symboli tai näyttävämpi kokonaisuus.
          */}
          <ReadMore caption="lue lisää" linkTo="/artist"/>
        </div>
        
      </div>
      
    </section>
  )
}

export default AboutMe;