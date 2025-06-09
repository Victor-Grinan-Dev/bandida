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
              <h1>Ideat tatuointiin</h1>
              <h2>Miten valita oma tatuointityyli?</h2>
              <br />
              <PicLoader pic="studio2" seoAlt={"inky11 studio"} picModalOn={false}/>
              <br />
              <p>Oman tatuoinnin suunnittelu ja ideointi on jännittävää. Tatuointi voi kertoa tarinan, kuvastaa sinua ihmisenä tai olla yksinkertaisesti esteettinen valinta. Mutta mistä tietää, mikä tyyli sopii juuri sinulle? Tässä muutamia ajatuksia, jotka auttavat löytämään omaan persoonaan ja toiveisiin sopivan tatuointityylin.</p>
              <br />
              <h2>1. Mieti, mitä haluat tatuoinnillasi ilmaista</h2>
              <br />
              <p>Tatuointi on usein enemmän kuin kuva iholla – se voi olla muisto, symboli tai visuaalinen versio jostakin tärkeästä. Haluatko tatuoinnin, joka herättää tunteita, kuvastaa tiettyä hetkeä elämässä tai vain näyttää upealta?</p>
              <br />
              <ul>
                <li>Jos etsit jotain yksinkertaista mutta merkityksellistä, symbolitatuointi voi olla hyvä valinta.</li>
                <li>Jos haluat yksityiskohtaisen ja todentuntuisen kuvan, realistinen mustaharmaa tatuointi voi sopia sinulle täydellisesti.</li>
                <li>Jos rakastat värejä ja haluat erottua, väritatuointi tuo eloa ihoosi.</li>
              </ul>
              <br />
            </div>

            <div className="right-column">

              <h2>2. Tutustu eri tatuointityyleihin</h2>
              <br />
              <p>Paula Annelica, INKY 11:n tatuointiartisti, tekee töitä useissa eri tyyleissä – jokainen työ syntyy yksilöllisesti ja huolella.</p>
              <ul>
                <li> <b>Realistinen tatuointi</b> (usein mustaharmaa): Uskomattoman tarkkoja kuvia, varjostuksia ja yksityiskohtia. Soveltuu esimerkiksi eläin- tai henkilökuviin.</li>
                <li><b>Väritatuointi</b>: Leikkisä, elävä ja näyttävä. Värit voivat tuoda lisäsyvyyttä tarinaan tai tyyliin.</li>
                <li><b>Pieni symbolitatuointi</b>: Herkkä, huomaamaton ja merkityksellinen. Erinomainen valinta ensikertalaiselle tai minimalistista tyyliä arvostavalle.</li>
              </ul>
              <br />
              <h2>3. Tyyli saa näkyä – persoonallinen tatuointi kestää aikaa</h2>
              <br />
              <p>Tatuointi on osa sinua. Siksi sen kuuluu näyttää ja tuntua omalta. Älä stressaa liikaa siitä, mikä tyyli on se oikea. Voit tuoda mukanasi oman ideasi, luonnoksesi tai kertoa vain ajatuksen. Suunnitellaan tatuointi yhdessä.</p>
              <br />
              <p>INKY 11 on tatuointistudio, jossa tärkeintä on sinun toiveesi. Meillä on rauhallinen ja turvallinen ympäristö, jossa jokainen asiakas kohdataan yksilöllisesti. Paula  (vai Paula Annelica) auttaa sinua kiteyttämään ajatuksesi visuaaliseen muotoon, olipa kyse sitten suuresta kokonaisuudesta tai pienestä yksityiskohdasta.</p>
              <br />
              <p>Tutustu Paulan (vai Paula Annelican) työhön Instagramissa tai tule käymään studiolla. Joskus inspiraatio löytyy vasta, kun näet erilaisia vaihtoehtoja. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin.</p>
              <br />
              <ReadMore caption="Miten valmistautua tatuointiin?" linkTo="/ennen-tatuointia" />
            </div>
              
          </div>

        </div>
    </InfoPage>
  )
}

export default TattooIdea