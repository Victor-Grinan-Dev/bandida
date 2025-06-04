import PicLoader from "../../components/picLoader/PicLoader";
import InfoPage from "../infoPage/InfoPage";
import { mapStyle } from "../../components/footer/Footer";
// import { translate } from "../../translation/translator";
// import { useSelector } from "react-redux";  

const StudioPage = () => {
  // const currentLang = useSelector((state) => state.app.currentLang);
  const studioimg = {
    filter: "grayscale(100%) brightness(1.2) saturate(1.5) hue-rotate(45deg) sepia(0.1)",
}
  return (
   <InfoPage hashLink={true} caption="kotiin" linkTo="/#studio-section">
      <article className="single-page studio-page">   
        <div className="columns-wrapper">

            <div className="left-column">   
              <h1>INKY 11</h1>         
              <h2>"pieni, mutta persoonallinen tatuointistudio"</h2>
              <PicLoader pic="studio" style={studioimg} seoAlt={"Inkky11 tattoo studio Helsinki"} picModalOn={false}/>
            </div>

            <div className="right-column">
              <br />
              <p>Tervetuloa tatuointistudioon, jossa taide kohtaa ammattitaidon.</p> 
              <br />
              <p>Pieni ja persoonallinen studiomme sijaitsee Porvoonkatu 14:ssä, Helsingin Alppilassa, aivan Linnanmäen naapurissa. Meille pääset nopeasti esimerkiksi Kalliosta, Pasilasta ja keskustasta.</p> 
              <br />
              <p>INKY 11 on rauhallinen, rento ja turvallinen ympäristö niin tatuoinneille kuin kestopigmentoinneillekin. Studion omistaa tatuointiartisti Paula Annelica.</p> 
              <br />
              <p>
                Panostamme puhtauteen, laatuun ja asiakaskokemukseen – jokainen asiakas kohdataan yksilöllisesti ja suurella huolella. Käytössämme ovat korkealuokkaiset välineet ja tuotteet, ja hygienia on meille ensiarvoisen tärkeää. Tavoitteenamme on kestävä lopputulos, joka on juuri sinun toiveidesi mukainen.
              </p> 
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
          <h2>Näin löydät perille:</h2> 
          <ul>
            <li>Raitiovaunut 3 ja 4 pysähtyvät suoraan studion eteen. Pysäkki on ”Alppila”.</li>
            <li>Sturenkadulta kulkee useita raitiovaunuja ja busseja, ja kävely studiolle kestää pari minuuttia.</li>  
            <li>Pasilasta matkaa on 2 km, ja bussi nro 23 tulee Pasilasta suoraan Sturenkadulle.</li>
            <li>Autolle on paljon pysäköintipaikkoja kadun varsilla. Pysäköinti on viikonloppuisin pääosin ilmaista, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadunvarret.</li>
          </ul>
          <br />
          <div className="map-container" id='map' style={{margin:"auto", width:"100%", height:"300px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4014308678427!2d24.94268641279049!3d60.19063927493875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920986bec4d537%3A0x347c1a135d40f221!2sPorvoonkatu%2014%2C%2000510%20Helsinki!5e0!3m2!1sen!2sfi!4v1733645145790!5m2!1sen!2sfi" width="100%" height="100%" style={mapStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="La Bandida"></iframe>
          </div>
            </div>
        </div>
      </article>
    </InfoPage>
  )
}

export default StudioPage;