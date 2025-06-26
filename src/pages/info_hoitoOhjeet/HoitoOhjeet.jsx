import { useSelector } from "react-redux";
import PicLoader from "../../components/picLoader/PicLoader";
import { translate } from "../../translation/translator";
import InfoPage from "../infoPage/InfoPage";

const HoitoOhjeet = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <InfoPage >
      <div className="single-page info-ajanvaraus-page" >
        <div className="columns-wrapper" >
          <div className="left-column" >
            <h1>{translate("Tatuointi hoito-ohjeet", currentLang)}</h1>
            <br />
            <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
            <br />
            <ul>
              <li><p>{translate("Tatuointi on arka ja voi olla turvonnut ja punoittava ensimmäisten päivien aikana. Samoin kuume tai kipeä olo ovat normaaleja varsinkin pidemmän session jälkeen. Voit ottaa särkylääkettä tarvittaessa.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Noin viikon kuluttua tatuoinnista alkaa irtoamaan kuollutta ihoa ja alta paljastuu uusiutunut iho joka saattaa näyttää tässä vaiheessa vielä haalealta mutta ajan kanssa palautuu normaaliin väriin.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Älä revi irtoavaa ihoa. Tatuointia voi suihkussa kevyesti hieroa jolloin irtoava iho lähtee helpommin pois.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Jos iho kutisee älä raavi. Kevyt läpsyttely auttaa.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Älä päästä lemmikkiäsi nuolemaan tatuointia.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Jos paranemisessa ilmenee ongelmia ja tatuointi ei ala paranemaan vaan alkaa  kipeytymään ja punoittamaan niin ole yhteydessä tatuoijaasi.", currentLang)}</p></li>
              <br />
              <li><p>{translate("Älä epäröi kysyä tatuoijaltasi jos mieltäsi askarruttaa jokin asia.", currentLang)}</p></li>
            </ul>
          </div>
          <div className="right-column">
            
             <ul>
               <li><p>{translate("Tatuoinnin jälkeen iho suojataan kelmulla tai haavakalvolla. Kelmu otetaan pois 2-3 tunnin kuluttua ja kalvo poistetaan 3-4 päivän kuluttua.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Haavakalvo on hengittävä ja vedenkestävä joten sen kanssa voi käydä suihkussa huoletta. Poista kalvo 3-4 päivän päästä varovasti veden alla. Älä riuhtaise! Tämä saattaa aiheuttaa iholle vaurioita ja pahimmassa tapauksessa rikkoa ihoa. Pese varovasti ja taputtele iho kuivaksi talouspaperilla tai ilma kuivaten. Anna ihon hengittää noin 15 min jonka jälkeen rasvaa alue ohuesti.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Kelmun poistossa toimi samoin kuin yllä.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Voit suojata tatuoinnin ensimmäisen yön ajaksi kelmulla, mutta parhaiten iho paranee kun saa mahdollisimman paljon ilmaa, ja kelmu ei hengitä. Tästä syystä myös kelmua ei tulisi pitää ensimmäisen päivän jälkeen.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Muista pestä aina kätesi ennen kuin kosket tatuointiin.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Ensimmäiset kaksi viikkoa pese ja rasvaa tatuointia ohuesti 2-3 krt/ pvä.  Tai tarvittaessa voi rasvata useammin jos iho tuntuu kovin kireältä.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Halutessasi voit suojata tatuointia sideharsolla ja laittaa alle hyvin rasvaa esim töiden takia.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Vältä kireitä vaatteita tatuoinnin päällä.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Käytä tatuoijasi suosittelemaa rasvaa tai esim Bepanthen tai Bevita-R.", currentLang)}</p></li>
               <br />
               <li><p>{translate("Älä puhdista tatuointia Desinfiointiaineilla.", currentLang)}</p></li>
            </ul>
            <br />
            <h2>{translate("Huomioitavaa paranemisen aikana!", currentLang)}</h2>
            <br />
            <h4>{translate("Vältä näitä:", currentLang)}</h4>
            <br />
            <ul>
              <li><p>{translate("Hiki / Rankka treeni 2 viikkoa.", currentLang)}</p></li>
              <li><p>{translate("Kuntosali 1 viikko.", currentLang)}</p></li>
              <li><p>{translate("Sauna 2 viikkoa.", currentLang)}</p></li>
              <li><p>{translate("Uiminen 4 viikkoa.", currentLang)}</p></li>
              <li><p>{translate("Aurinko ja solarium 4 viikkoa. Jos joudut olemaan auringossa, suojaa tatuointi vaatteilla ja tatuoinnin parannuttuakin käytä suojakerroin 50. Tatuoitu iho palaa herkästi.", currentLang)}</p></li>
            </ul>
          </div>
        </div>

      </div>
    </InfoPage>
 
  )
}

export default HoitoOhjeet