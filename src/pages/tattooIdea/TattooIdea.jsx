// import AppLink from "../../components/appLink/AppLink"
import InfoPage from "../infoPage/InfoPage"
import PicLoader from "../../components/picLoader/PicLoader"
import ReadMore from "../../components/readMore/ReadMore"
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";

const TattooIdea = (props) => {
  const {from} = props;
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <InfoPage from={from} >
        <div className="single-page artist-page" >

          <div className="columns-wrapper">

            <div className="left-column">
              <h1>{translate("Ideat tatuointiin", currentLang)}</h1>
              <h2>{translate("Miten valita oma tatuointityyli?", currentLang)}</h2>
              <br />
              <PicLoader pic="studio2" seoAlt={"inky11 studio"} picModalOn={false}/>
              <br />
              <p>{translate("Oman tatuoinnin suunnittelu ja ideointi on jännittävää. Tatuointi voi kertoa tarinan, kuvastaa sinua ihmisenä tai olla yksinkertaisesti esteettinen valinta. Mutta mistä tietää, mikä tyyli sopii juuri sinulle? Tässä muutamia ajatuksia, jotka auttavat löytämään omaan persoonaan ja toiveisiin sopivan tatuointityylin.", currentLang)}</p>
              <br />
              <h2>{translate("1. Mieti, mitä haluat tatuoinnillasi ilmaista", currentLang)}</h2>
              <br />
              <p>{translate("Tatuointi on usein enemmän kuin kuva iholla – se voi olla muisto, symboli tai visuaalinen versio jostakin tärkeästä. Haluatko tatuoinnin, joka herättää tunteita, kuvastaa tiettyä hetkeä elämässä tai vain näyttää upealta?", currentLang)}</p>
              <br />
              <ul>
                <li>{translate("Jos etsit jotain yksinkertaista mutta merkityksellistä, symbolitatuointi voi olla hyvä valinta.", currentLang)}</li>
                <li>{translate("Jos haluat yksityiskohtaisen ja todentuntuisen kuvan, realistinen mustaharmaa tatuointi voi sopia sinulle täydellisesti.", currentLang)}</li>
                <li>{translate("Jos rakastat värejä ja haluat erottua, väritatuointi tuo eloa ihoosi.", currentLang)}</li>
              </ul>
              <br />
            </div>

            <div className="right-column">

              <h2>{translate("2. Tutustu eri tatuointityyleihin", currentLang)}</h2>
              <br />
              <p>{translate("Paula Annelica, INKY 11:n tatuointiartisti, tekee töitä useissa eri tyyleissä – jokainen työ syntyy yksilöllisesti ja huolella.", currentLang)}</p>
              <ul>
                <li> 
                  <b>{translate("Realistinen tatuointi", currentLang)}</b> 
                  {translate("(usein mustaharmaa): Uskomattoman tarkkoja kuvia, varjostuksia ja yksityiskohtia. Soveltuu esimerkiksi eläin- tai henkilökuviin.", currentLang)}</li>
                <li>
                  <b>{translate("Väritatuointi", currentLang)}</b>
                  {translate(": Leikkisä, elävä ja näyttävä. Värit voivat tuoda lisäsyvyyttä tarinaan tai tyyliin.", currentLang)}</li>
                <li>
                  <b>{translate("Pieni symbolitatuointi", currentLang)}</b>
                  {translate(": Herkkä, huomaamaton ja merkityksellinen. Erinomainen valinta ensikertalaiselle tai minimalistista tyyliä arvostavalle.", currentLang)}</li>
              </ul>
              <br />
              <h2>{translate("3. Tyyli saa näkyä – persoonallinen tatuointi kestää aikaa", currentLang)}</h2>
              <br />
              <p>{translate("Tatuointi on osa sinua. Siksi sen kuuluu näyttää ja tuntua omalta. Älä stressaa liikaa siitä, mikä tyyli on se oikea. Voit tuoda mukanasi oman ideasi, luonnoksesi tai kertoa vain ajatuksen. Suunnitellaan tatuointi yhdessä.", currentLang)}</p>
              <br />
              <p>{translate("INKY 11 on tatuointistudio, jossa tärkeintä on sinun toiveesi. Meillä on rauhallinen ja turvallinen ympäristö, jossa jokainen asiakas kohdataan yksilöllisesti. Paula  (vai Paula Annelica) auttaa sinua kiteyttämään ajatuksesi visuaaliseen muotoon, olipa kyse sitten suuresta kokonaisuudesta tai pienestä yksityiskohdasta.", currentLang)}</p>
              <br />
              <p>{translate("Tutustu Paulan (vai Paula Annelican) työhön Instagramissa tai tule käymään studiolla. Joskus inspiraatio löytyy vasta, kun näet erilaisia vaihtoehtoja. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin.", currentLang)}</p>
              <br />
              <ReadMore caption={translate("Miten valmistautua tatuointiin?", currentLang)} linkTo="/ennen-tatuointia" />
            </div>
              
          </div>

        </div>
    </InfoPage>
  )
}

export default TattooIdea