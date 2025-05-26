import AppLink from "../../components/appLink/AppLink";
import PicLoader from "../../components/picLoader/PicLoader";
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";  

const StudioPage = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const studioimg = {
    filter: "grayscale(100%) brightness(1.2) saturate(1.5) hue-rotate(45deg) sepia(0.1)",
}
  return (
   <section className='studio' id='studio'>
      <div style={{position:"absolute", top:"50px", left:"50px", zIndex:"1000"}}>
        <AppLink caption="kotiin" linkTo="/" />
      </div>
      <div className="panel-1">
        <div className="text-area">

          <p>Studio Inky 11 on vuonna 2024 perustettu tatuointeihin ja kestopigmentointeihin keskittynyt pieni studio Helsingin Alppilassa, aivan Linnanmäen kupeessa. Olipa ajatuksenasi pieni siro tatuointi tai isompi kokonaisuus mustaharmaana tai väreissä, toteutetaan nämä turvallisesti, huolella ja asiakkaan toiveita kuunnellen. Olet lämpimästi tervetullut juuri sellaisena kuin olet. </p> 

          <br />

          <p>
            Studio sijaitsee aivan Linnanmäen kupeessa Alppilassa. 
            Raitiovaunut 3 ja 4 pysähtyy suoraan studion eteen. Pysäkki on ”Alppila”.
            Sturenkadulta kulkee useita raitiovaunuja ja busseja ja siitä kävelee pari minuuttia studiolle.
            Pasilasta matkaa on 2km ja bussi nro 23 tulee Pasilasta suoraan Sturenkadulle. 
            Autolle pysäköintipaikkoja on paljon kadun varsilla ja on ilmaista la-su, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadun varret. 
          </p>

          {/*
          <p>Pieni, mutta persoonallinen studio, jossa taide kohtaa ammattitaidon.</p> 
          <p>Studiomme sijaitsee Porvoonkatu 14:ssä, Helsingissä, aivan Linnanmäen naapurissa. Se on suunniteltu tarjoamaan rauhallinen, rento ja turvallinen ympäristö niin tatuoinneille kuin kestopigmentoinneillekin.</p> 
          <p>Panostamme puhtauteen, laatuun ja asiakaskokemukseen – jokainen asiakas kohdataan yksilöllisesti ja suurella huolella. Käytössämme ovat korkealuokkaiset välineet ja tuotteet, ja hygienia on meille ensiarvoisen tärkeää. Tavoitteenamme on kestävä lopputulos, joka on juuri sinun toiveidesi mukainen.</p> 
          <p>Olitpa ensikertalainen tai kokenut tatuointien tai pigmentointien ystävä, olet lämpimästi tervetullut.</p> 
          <p>Varaa aika tai tule paikan päälle piipahtamaan – tehdään yhdessä jotain upeaa.</p> 
          <p>Täällä tehdään kauneutta ja taidetta tunteella ja taidolla!</p>
          */}
          
        </div>
      </div>

      <div className="panel-2">

        <div className="profile-pic">
          <PicLoader pic="studio" style={studioimg} seoAlt={"Inkky11 tattoo studio Helsinki"} picModalOn={false}/>
        </div>

        <div className='omistaja'><h3>{translate("studio", currentLang)}</h3></div>

      </div>

    </section>
  )
}

export default StudioPage