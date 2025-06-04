import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore"
import InfoPage from "../infoPage/InfoPage";

const PermantMakeUp = () => {
  return (
    <InfoPage backTo="/artist">
        <div className="single-page pmu-page"  >

          <div className="columns-wrapper" >

            <div className="left-column">
              <h1>Mitä on kestopigmentointi ja microblading?</h1>
              <br />
                <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
                <br />
                <br />
                <br />
                <h2>Kumpi sopii minulle?</h2>
              <br />
              <p>Valinta microbladingin ja kestopigmentoinnin välillä riippuu ihotyypistä, toiveista ja siitä, kuinka luonnollista tai näkyvää lopputulosta haet. Microblading sopii usein kuivaihoisille ja niille, jotka toivovat hyvin hienovaraista, karvamaista jälkeä. Kestopigmentointi taas on parempi vaihtoehto rasvaisemmalle iholle ja niille, jotka haluavat hieman pysyvämmän ja pehmeämmän varjostuksen. Paula Annelica INKY 11:llä on koulutettu kestopigmentoija ja microblading-osaaja, joka auttaa sinua löytämään juuri sinulle sopivan ratkaisun. Studiollamme panostetaan rauhalliseen tunnelmaan, huolellisuuteen ja hygieniaan, jotta sinä voit tuntea olosi turvalliseksi. Tervetuloa tutustumaan ja kysymään lisää – meillä jokainen asiakas kohdataan yksilöllisesti ja suurella sydämellä.</p>
              <br />
              <ReadMore caption="Katso hinnasta: tatuointi, kestopigmentointi ja microblading" linkTo="/tatuoinnin-hinta" />
            </div>

            <div className="right-column">
              <h2>Luonnollista kauneutta, joka kestää aikaa</h2>
              <br />
              <p>Kauniisti muotoillut kulmat ja huulten kevyt sävy korostavat kasvojen parhaita piirteitä ilman päivittäistä meikkaamista. INKY 11:lla tarjoamme kahta eri menetelmää luonnolliseen ja kestävään kauneuden korostamiseen: kestopigmentointia ja microbladingia. Mutta mitä nämä oikeastaan tarkoittavat, ja miten ne eroavat toisistaan?</p>
              <br />
              <h2>Kestopigmentointi – luonnollinen ja kestävä lopputulos</h2>
              <br />
              <p>Kestopigmentointi on ihon pintakerrokseen tehtävä puolipysyvä meikkaus, joka tehdään erityisellä pigmentointilaitteella. Menetelmällä voidaan korostaa esimerkiksi kulmakarvoja, silmien rajauksia tai huulia. Tavoitteena ei ole näkyvä meikki, vaan luonnollinen ilme, joka sopii juuri sinun kasvonpiirteisiisi. INKY 11:llä kestopigmentointi tehdään hellävaraisesti, tarkasti ja yksilöllisesti. Jokaisen kasvot ovat ainutlaatuiset ja siksi suunnittelen pigmentoinnin aina yhteistyössä asiakkaan kanssa. Lopputulos kestää henkilöstä riippuen 1–3 vuotta, ja tarvittaessa väriä voidaan vahvistaa vuosittaisilla ylläpitokäynneillä.</p>
              <br />
              <h2>Microblading – karvatekniikalla luodut kulmat</h2>
              <br />  
              <p> Microblading on manuaalinen menetelmä kulmakarvojen muotoiluun, jossa ihon pintaan tehdään pieniä, karvan näköisiä viiltoja, jotka täytetään pigmentillä. Tuloksena on erittäin luonnollinen, yksittäisiä karvoja muistuttava jälki, joka sopii erityisesti heille, joilla on harvat tai epäsymmetriset kulmakarvat. Microbladingin jälki on tarkkaa ja kevyempää kuin koneellisessa kestopigmentoinnissa, mutta sen kesto on lyhyempi – tyypillisesti noin 12–18 kuukautta. Myös microblading vaatii ylläpitoa, ja ensimmäinen vahvistuskerta tehdään yleensä noin 4–8 viikon kuluttua ensimmäisestä käsittelystä. </p>
              <br />
              <ReadMore caption="Ideat tatuointiin - miten valita oma tatuointityyli?" linkTo="/ideat-tatuointiin" />

            </div>

          </div>

        </div>
        
    </InfoPage>
  )
}

export default PermantMakeUp;