import PicLoader from "../../components/picLoader/PicLoader"
import ReadMore from "../../components/readMore/ReadMore"
import InfoPage from "../infoPage/InfoPage"
const Hinnasto = () => {
  return (
     <InfoPage >
        <div className="single-page pricing-page"  >

          <div className="columns-wrapper" >

            <div className="left-column">
                <h1>Hinnasto</h1>
                <br />
                <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
                <br />

            </div>

            <div className="right-column">
              <p>Tarkkaa hintaa on mahdoton sanoa heti alkuun ja hinta-arvio on aina arvio joka tarkentuu lopullisen suunnitelman ja toteutuksen mukaan.</p>
              <br />
              <p>Ota yhteyttä ja puhutaan lisää asiasta.</p>
              <br />
               <h2>
                 Tatuoinnit:
               </h2>
               <ul>
                    <li><p>~100e/h</p></li> 
                    <li><p>Walk- In kuvat alkaen ~60e</p></li>
                    <li><p>koko päivä ~500-600e</p></li>
                    <li><p>Varausmaksu ~50-100e</p></li>
               </ul>
               <br />
               <h2>Kestopigmentoinnit:</h2>
               <ul>
                 <li><p>150-250e</p></li>
                 <li><p>Varausmaksu 50-100e</p></li>
               </ul>
               <br />
               <h2>Maksutavat:</h2>
               <ul>
                 <li><p>Ensisijaisena käteinen</p></li>
                 <li><p>MobilePay</p></li>
              </ul>
              <br />
              <p>Suunnittelu ja varausmaksu on ~100e jonka maksettua varaus on sitova ja suunnittelut tapahtuvat vasta maksun jälkeen. Varausmaksu hyvitetään tatuoinnin loppusummasta.  Jos idea muuttuu kuvan suunnittelun aikana/jälkeen, tästä otetaan uusi ~100-150e  suunittelumaksu. Jos sairastut, voi aikaa siirtää kaksi kertaa samalla varausmaksulla jonka jälkeen otetaan uusi varausmaksu.</p>
              <br />
              <ReadMore caption="vara nyt" linkTo="/ajanvaraus" />
            </div>

          </div>

        </div>
        
    </InfoPage>

  )
}

export default Hinnasto