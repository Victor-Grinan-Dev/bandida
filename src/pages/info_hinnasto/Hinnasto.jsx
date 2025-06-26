import { useSelector } from "react-redux";
import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore";
import { translate } from "../../translation/translator";
import InfoPage from "../infoPage/InfoPage";

const Hinnasto = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
     <InfoPage >
        <div className="single-page pricing-page"  >

          <div className="columns-wrapper" >

            <div className="left-column">
                <h1>{translate("Hinnat", currentLang)}</h1>
                <br />
                <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
                <br />
            </div>

            <div className="right-column">
              <p>{translate("Tarkkaa hintaa on mahdoton sanoa heti alkuun ja hinta-arvio on aina arvio joka tarkentuu lopullisen suunnitelman ja toteutuksen mukaan.", currentLang)}</p>
              <br />
              <p>{translate("Ota yhteyttä ja puhutaan lisää asiasta.", currentLang)}</p>
              <br />
               <h2>{translate("Tatuoinnit:", currentLang)}</h2>
               <ul>
                  <li><p>~100e/h</p></li> 
                  <li><p>{translate("Walk- In kuvat alkaen", currentLang)} ~60e</p></li>
                  <li><p>{translate("koko päivä", currentLang)} ~500-600e</p></li>
                  <li><p>{translate("Varausmaksu", currentLang)} ~50-100e</p></li>
               </ul>
               <br />
               <h2>{translate("Kestopigmentoinnit:", currentLang)}</h2>
               <ul>
                 <li><p>~150-250e</p></li>
                 <li><p>{translate("Varausmaksu", currentLang)} ~50-100e</p></li>
               </ul>
               <br />
               <h2>{translate("Maksutavat:", currentLang)}</h2>
               <ul>
                 <li><p>{translate("Ensisijaisena käteinen", currentLang)}</p></li>
                 <li><p>MobilePay</p></li>
              </ul>
              <br />
              <p>{translate("Suunnittelu ja varausmaksu on ~100e jonka maksettua varaus on sitova ja suunnittelut tapahtuvat vasta maksun jälkeen. Varausmaksu hyvitetään tatuoinnin loppusummasta.  Jos idea muuttuu kuvan suunnittelun aikana/jälkeen, tästä otetaan uusi ~100-150e  suunittelumaksu. Jos sairastut, voi aikaa siirtää kaksi kertaa samalla varausmaksulla jonka jälkeen otetaan uusi varausmaksu.", currentLang)}</p>
              <br />
              <ReadMore caption="Varaa nyt" linkTo="/ajanvaraus" />
            </div>

          </div>

        </div>
        
    </InfoPage>

  )
}

export default Hinnasto