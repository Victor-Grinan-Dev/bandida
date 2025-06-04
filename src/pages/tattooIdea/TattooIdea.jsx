// import AppLink from "../../components/appLink/AppLink"
import InfoPage from "../infoPage/InfoPage"
import PicLoader from "../../components/picLoader/PicLoader"
import ReadMore from "../../components/readMore/ReadMore"

const TattooIdea = (props) => {
  const {from} = props;
  return (
    <InfoPage from={from} >
        <div className="single-page artist-page" >

          <div className="columns-wrapper">

            <div className="left-column">
              <h1>Ideat ja tyyli </h1>
              <h2>Miten valita oma tatuointi?</h2>
              <br />
              <PicLoader pic="studio2" seoAlt={"inky11 studio"} picModalOn={false}/>
              <br />
              <p>Oman tatuoinnin suunnittelu ja ideointi on jännittävää. Tatuointi voi kertoa tarinan, kuvastaa sinua ihmisenä tai olla yksinkertaisesti esteettinen valinta. Mutta mistä tietää, mikä tyyli sopii juuri sinulle? Tässä muutamia ajatuksia, jotka auttavat löytämään omaan persoonaan ja toiveisiin sopivan tatuointityylin.</p>
              <br />
              <h2>1. Mieti, mitä haluat tatuoinnillasi ilmaista</h2>
              <br />
              <p>Tatuointi on usein enemmän kuin kuva iholla – se voi olla muisto, symboli tai visuaalinen versio jostakin tärkeästä. Haluatko tatuoinnin, joka herättää tunteita, kuvastaa tiettyä hetkeä elämässä tai vain näyttää upealta? Jos etsit jotain yksinkertaista mutta merkityksellistä, symbolitatuointi voi olla hyvä valinta.</p>
              <br />
              <p>Jos haluat yksityiskohtaisen ja todentuntuisen kuvan, realistinen mustaharmaa tatuointi voi sopia sinulle täydellisesti.</p>
              <br />
              <p>Jos rakastat värejä ja haluat erottua, väritatuointi tuo eloa ihoosi.</p>
              <br />
            </div>

            <div className="right-column">

              <h2>2. Tutustu eri tatuointityyleihin H2</h2>
              <br />
              <p>Paula Annelica, INKY 11:n tatuointiartisti, tekee töitä useissa eri tyyleissä – jokainen työ syntyy yksilöllisesti ja huolella. Realistinen tatuointi (usein mustaharmaa): Uskomattoman tarkkoja kuvia, varjostuksia ja yksityiskohtia. Soveltuu esimerkiksi eläin- tai henkilökuviin.</p>
              <br />
              <p>Väritatuointi: Leikkisä, elävä ja näyttävä. Värit voivat tuoda lisäsyvyyttä tarinaan tai tyyliin.</p>
              <br />
              <p>Pieni symbolitatuointi: Herkkä, huomaamaton ja merkityksellinen. Erinomainen valinta ensikertalaiselle tai minimalistista tyyliä arvostavalle.</p>
              <br />
              <h2>3. Tyyli saa näkyä – persoonallinen tatuointi kestää aikaa</h2>
              <br />
              <p>Tatuointi on osa sinua. Siksi sen kuuluu näyttää ja tuntua omalta. Älä stressaa liikaa siitä, mikä tyyli on se oikea. Voit tuoda mukanasi oman ideasi, luonnoksesi tai kertoa vain ajatuksen. Suunnitellaan tatuointi yhdessä. INKY 11 on tatuointistudio, jossa tärkeintä on sinun toiveesi. Meillä on rauhallinen ja turvallinen ympäristö, jossa jokainen asiakas kohdataan yksilöllisesti. Paula  (vai Paula Annelica) auttaa sinua kiteyttämään ajatuksesi visuaaliseen muotoon, olipa kyse sitten suuresta kokonaisuudesta tai pienestä yksityiskohdasta. Tutustu Paulan työhön Instagramissa tai tule käymään studiolla. Joskus inspiraatio löytyy vasta, kun näet erilaisia vaihtoehtoja. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin.</p>
              <br />
              <ReadMore caption="Miten valmistautua tatuointiin" linkTo="/ennen-tatuointia" />
              <br />
            </div>
              
          </div>

        </div>
    </InfoPage>
  )
}

export default TattooIdea