import AppLink from "../../components/appLink/AppLink";
import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore";
import InfoPage from "../infoPage/InfoPage";
// import { translate } from "../../translation/translator";
// import { useSelector } from "react-redux";  

const StudioPage = () => {
  // const currentLang = useSelector((state) => state.app.currentLang);
  const studioimg = {
    filter: "grayscale(100%) brightness(1.2) saturate(1.5) hue-rotate(45deg) sepia(0.1)",
}
  return (
   <InfoPage hashLink={true} caption="kotiin" linkTo="/#studio-section">

      <div className="">

        <div className="profile-pic">
          <PicLoader pic="studio" style={studioimg} seoAlt={"Inkky11 tattoo studio Helsinki"} picModalOn={false}/>
        </div>

        <div className=''><h1>INKY 11 on pieni, mutta persoonallinen tatuointistudio</h1></div>

      </div>

      <div className="">
        <div className="">
          
          <p>
            INKY 11 on rauhallinen, rento ja turvallinen ympäristö niin tatuoinneille kuin kestopigmentoinneillekin. Studion omistaa tatuointiartisti Paula Annelica.
          </p> 
          <br />
          <p>
            Panostamme puhtauteen, laatuun ja asiakaskokemukseen – jokainen asiakas kohdataan yksilöllisesti ja suurella huolella. Käytössämme ovat korkealuokkaiset välineet ja tuotteet, ja hygienia on meille ensiarvoisen tärkeää. Tavoitteenamme on kestävä lopputulos, joka on juuri sinun toiveidesi mukainen.
          </p> 
          <ReadMore caption="sijainti" type="secondary" linkTo="/#footer-section" hashLink={true} />
          {/* <AppLink  caption="sijainti" type="secondary" linkTo="/#footer-section" hashLink={true}/> */}
          <br />
          <h2>Walk-in-tatuointi ilman ajanvarausta</h2>
          <p>
            Olitpa ensikertalainen tai kokenut tatuointien tai pigmentointien ystävä, olet lämpimästi tervetullut. Varaa aika tai tule paikan päälle piipahtamaan – tehdään yhdessä jotain upeaa. Studiolla on myös walk-in-päiviä, jolloin tatuoinnit onnistuvat ilman ajanvarausta.
          </p> 
          <br />
          <p>
            INKY 11 on suunniteltu sinua varten. Täällä tehdään kauneutta ja taidetta tunteella ja taidolla!
          </p> 
          <br />
          <p>
            Näin löydät perille:
          </p> 
          <ul>
            <li>Raitiovaunut 3 ja 4 pysähtyvät suoraan studion eteen. Pysäkki on ”Alppila”.</li>
            <li>Sturenkadulta kulkee useita raitiovaunuja ja busseja, ja kävely studiolle kestää pari minuuttia.</li>  
            <li>Pasilasta matkaa on 2 km, ja bussi nro 23 tulee Pasilasta suoraan Sturenkadulle.</li>
            <li>Autolle on paljon pysäköintipaikkoja kadun varsilla. Pysäköinti on viikonloppuisin pääosin ilmaista, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadunvarret.</li>
          </ul>
          <br />
          <p>
          </p> 
          <br />
          <p>
          </p> 
        </div>
      </div>
    </InfoPage>
  )
}

export default StudioPage