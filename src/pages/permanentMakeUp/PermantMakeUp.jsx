import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore"
import InfoPage from "../infoPage/InfoPage";

const PermantMakeUp = () => {
  return (
    <InfoPage backTo="/artisti">
        <div className="single-page pmu-page"  >

          <div className="columns-wrapper" >

            <div className="left-column">
              <h1>Mitä on kestopigmentointi ja microblading?</h1>
              <br />
                <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
                <br />
                <h2>Luonnollista kauneutta, joka kestää aikaa H2</h2>
                <br />
                <p>Kauniisti muotoillut kulmat ja huulten kevyt sävy korostavat kasvojen parhaita piirteitä ilman päivittäistä meikkaamista. Tarjoamme kahta eri menetelmää luonnolliseen ja kestävään kauneuden korostamiseen: kestopigmentointia ja microbladingia.</p>
                <br />
                <p>Mutta mitä nämä oikeastaan tarkoittavat, ja miten ne eroavat toisistaan?</p>
                <br />
                <h2>Kulmien kestopigmentointi – luonnollinen ja kestävä lopputulos</h2>
                <br />
                <p>Kestopigmentointi eli puuterikulmat tehdään tatuointikoneella ihon pintakerrokseen. Menetelmällä voidaan korostaa kasvojen piirteitä, kuten kulmakarvoja, silmien rajauksia tai huulia.</p>
                <br />
                <p>Pigmentoinnilla voidaan tehdä joko näyttävämpi, meikatun näköinen lopputulos tai luonnollinen ilme, joka sopii juuri sinun kasvonpiirteisiisi. Menetelmällä voidaan myös korjata kulmakarvojen symmetrisyyttä.</p>
                <br />
                <p>Kestopigmentointi tehdään hellävaraisesti, tarkasti ja yksilöllisesti. Jokaisen kasvot ovat ainutlaatuiset ja siksi suunnittelen pigmentoinnin aina yhteistyössä asiakkaan kanssa.</p>
                <br />
                <p>Toimenpiteen jälkeen lopputulos näyttää 30-40 % tummemmalta ja vaalenee parantuessaan. Parantuminen vie aikaa yhdestä kahteen viikkoa.</p>
                <br />
                <p>Lopputulos kestää henkilöstä riippuen 1–3 vuotta. Pigmentoinnin jälkeen tarvitaan vahvistuskäynti 4-10 viikon kuluttua ensimmäisestä käsittelystä. Tarvittaessa väriä voidaan vahvistaa vuosittaisilla ylläpitokäynneillä.</p>
                <br />
              <ReadMore caption="Katso hinnasta: tatuointi, kestopigmentointi ja microblading" linkTo="/hinnat" />
            </div>

            <div className="right-column">
              <h2>Microblading – karvatekniikalla luodut kulmat</h2>
              <br />
              <p>Valinta microbladingin ja kestopigmentoinnin välillä riippuu ihotyypistä, toiveista ja siitä, kuinka luonnollista tai näkyvää lopputulosta haet. Microblading sopii usein kuivaihoisille ja niille, jotka toivovat hyvin hienovaraista, karvamaista jälkeä. Kestopigmentointi taas on parempi vaihtoehto rasvaisemmalle iholle ja niille, jotka haluavat hieman pysyvämmän ja pehmeämmän varjostuksen.</p>
              <br />
              <p>Microbladingin jälki on tarkkaa ja kevyempää kuin koneellisessa kestopigmentoinnissa, mutta sen kesto on lyhyempi – tyypillisesti noin 12–18 kuukautta. Myös microblading vaatii ylläpitoa, ja ensimmäinen vahvistuskerta tehdään yleensä 4–10 viikon kuluttua ensimmäisestä käsittelystä.</p>
              <br />
              <h2>Kumpi sopii minulle?</h2>
              <br />
              <p>Kestopigmentointi on ihon pintakerrokseen tehtävä puolipysyvä meikkaus, joka tehdään erityisellä pigmentointilaitteella. Menetelmällä voidaan korostaa esimerkiksi kulmakarvoja, silmien rajauksia tai huulia. Tavoitteena ei ole näkyvä meikki, vaan luonnollinen ilme, joka sopii juuri sinun kasvonpiirteisiisi. INKY 11:llä kestopigmentointi tehdään hellävaraisesti, tarkasti ja yksilöllisesti. Jokaisen kasvot ovat ainutlaatuiset ja siksi suunnittelen pigmentoinnin aina yhteistyössä asiakkaan kanssa. Lopputulos kestää henkilöstä riippuen 1–3 vuotta, ja tarvittaessa väriä voidaan vahvistaa vuosittaisilla ylläpitokäynneillä.</p>
              <br />
              <p>Paula Annelica INKY 11:llä on koulutettu kestopigmentoija ja microblading-osaaja, joka auttaa sinua löytämään juuri sinulle sopivan ratkaisun. Studiollamme panostetaan rauhalliseen tunnelmaan, huolellisuuteen ja hygieniaan, jotta sinä voit tuntea olosi turvalliseksi.</p>
              <br />
              <p>Tervetuloa tutustumaan ja kysymään lisää – meillä jokainen asiakas kohdataan yksilöllisesti ja suurella sydämellä.</p>
              <br />
              <ReadMore caption="Hinnat: tatuointi, kestopigmentointi ja microblading " linkTo="/hinnat" />

            </div>

          </div>

        </div>
        
    </InfoPage>
  )
}

export default PermantMakeUp;