import AppLink from '../../components/appLink/AppLink'; 
import InfoPage from '../infoPage/InfoPage';

const Ajanvaraus = () => {
  return (
    <div>
      <InfoPage>
      <div className="info-container">
           <div className="text-container">
             <ul>
                 <br />
                 <li><p>Kerro viestiin oma nimi ja paikkakunta.</p></li>
                 <br />
                 <li><p>Kerro tatuointi idean lisäksi mihin ja millä tyylillä kuvan haluaisit toteutettavan. Liitä muutamia referenssi kuva mukaan. En kuitenkaan kopioi suoraan toisten tekemiä tatuointeja. Logot ym. ovat asia erikseen</p></li>
                 <br />
                 <li><p>Jos alueella on muita tatuointeja tai haluat peittokuvaa, ota alueesta kuva ja kerro kumpi puoli esim kädestä on kyseessä.</p></li>
                 <br />
                 <li><p>Joskus varattu kellonaika saattaa tatuointi päivänä venyä syystä tai toisesta joten tähän on hyvä varautua.</p></li>
               </ul>                    
           </div>
       </div>
      </InfoPage>

    </div>
  )
}

export default Ajanvaraus