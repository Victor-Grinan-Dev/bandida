import PicLoader from '../../components/picLoader/PicLoader';
import ReadMore from '../../components/readMore/ReadMore';
import InfoPage from '../infoPage/InfoPage';

const Ajanvaraus = () => {
  return (
      <InfoPage>

        <div className="single-page info-ajanvaraus-page" >

          <div className="columns-wrapper" >

            <div className="left-column" >
              <h1>Ajanvaraus Ohjeet</h1>
              <br />
              <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>

            </div>
            <div className="right-column">

              <ul>
                  <li><p>Kerro viestiin oma nimi ja paikkakunta.</p></li>
                  <br />
                  <li><p>Kerro tatuointi idean lisäksi mihin ja millä tyylillä kuvan haluaisit toteutettavan. Liitä muutamia referenssi kuva mukaan. En kuitenkaan kopioi suoraan toisten tekemiä tatuointeja. Logot ym. ovat asia erikseen</p></li>
                  <br />
                  <li><p>Jos alueella on muita tatuointeja tai haluat peittokuvaa, ota alueesta kuva ja kerro kumpi puoli esim kädestä on kyseessä.</p></li>
                  <br />
                  <li><p>Joskus varattu kellonaika saattaa tatuointi päivänä venyä syystä tai toisesta joten tähän on hyvä varautua.</p></li>
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