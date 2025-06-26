import { useSelector } from 'react-redux';
import PicLoader from '../../components/picLoader/PicLoader';
import ReadMore from '../../components/readMore/ReadMore';
import InfoPage from '../infoPage/InfoPage';
import { translate } from '../../translation/translator';

const Ajanvaraus = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
      <InfoPage>

        <div className="single-page info-ajanvaraus-page" >

          <div className="columns-wrapper" >

            <div className="left-column" >
              <h1>{translate("Ajanvaraus ohjeet", currentLang)}</h1>
              <br />
              <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>

            </div>
            <div className="right-column">

              <ul>
                  <li><p>{translate("Kerro viestiin oma nimi ja paikkakunta.", currentLang)}</p></li>
                  <br />
                  <li><p>{translate("Kerro tatuointi idean lisäksi mihin ja millä tyylillä kuvan haluaisit toteutettavan. Liitä muutamia referenssi kuva mukaan. En kuitenkaan kopioi suoraan toisten tekemiä tatuointeja. Logot ym. ovat asia erikseen.", currentLang)}</p></li>
                  <br />
                  <li><p>{translate("Jos alueella on muita tatuointeja tai haluat peittokuvaa, ota alueesta kuva ja kerro kumpi puoli esim kädestä on kyseessä.", currentLang)}</p></li>
                  <br />
                  <li><p>{translate("Joskus varattu kellonaika saattaa tatuointi päivänä venyä syystä tai toisesta joten tähän on hyvä varautua.", currentLang)}</p></li>
                </ul> 
                <br />
                <ReadMore title={false} caption="Varaa nyt" linkTo="/ajanvaraus" />                   
            </div>
          </div>
        </div>

      </InfoPage>


  )
}

export default Ajanvaraus