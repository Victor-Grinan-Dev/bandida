import { useSelector } from "react-redux";
import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore"
import { capitalize } from "../../helper/capitalizer";
import InfoPage from "../infoPage/InfoPage";
import { translate } from "../../translation/translator";

const PermantMakeUp = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <InfoPage backTo="/artisti">
        <div className="single-page pmu-page"  >

          <div className="columns-wrapper" >

            <div className="left-column">
              <h1>{translate("Mitä on kestopigmentointi ja microblading?", currentLang)}</h1>
              <br />
                <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
                <br />
                <h2>{translate("Luonnollista kauneutta, joka kestää aikaa H2", currentLang)}</h2>
                <br />
                <p>{translate("Kauniisti muotoillut kulmat ja huulten kevyt sävy korostavat kasvojen parhaita piirteitä ilman päivittäistä meikkaamista. Tarjoamme kahta eri menetelmää luonnolliseen ja kestävään kauneuden korostamiseen: kestopigmentointia ja microbladingia.", currentLang)}</p>
                <br />
                <p>{translate("Mutta mitä nämä oikeastaan tarkoittavat, ja miten ne eroavat toisistaan?", currentLang)}</p>
                <br />
                <h2>{translate("Kulmien kestopigmentointi – luonnollinen ja kestävä lopputulos", currentLang)}</h2>
                <br />
                <p>{translate("Kestopigmentointi eli puuterikulmat tehdään tatuointikoneella ihon pintakerrokseen. Menetelmällä voidaan korostaa kasvojen piirteitä, kuten kulmakarvoja, silmien rajauksia tai huulia.", currentLang)}</p>
                <br />
                <p>{translate("Pigmentoinnilla voidaan tehdä joko näyttävämpi, meikatun näköinen lopputulos tai luonnollinen ilme, joka sopii juuri sinun kasvonpiirteisiisi. Menetelmällä voidaan myös korjata kulmakarvojen symmetrisyyttä.", currentLang)}</p>
                <br />
                <p>{translate("Kestopigmentointi tehdään hellävaraisesti, tarkasti ja yksilöllisesti. Jokaisen kasvot ovat ainutlaatuiset ja siksi suunnittelen pigmentoinnin aina yhteistyössä asiakkaan kanssa.", currentLang)}</p>
                <br />
                <p>{translate("Toimenpiteen jälkeen lopputulos näyttää 30-40 % tummemmalta ja vaalenee parantuessaan. Parantuminen vie aikaa yhdestä kahteen viikkoa.", currentLang)}</p>
                <br />
                <p>{translate("Lopputulos kestää henkilöstä riippuen 1–3 vuotta. Pigmentoinnin jälkeen tarvitaan vahvistuskäynti 4-10 viikon kuluttua ensimmäisestä käsittelystä. Tarvittaessa väriä voidaan vahvistaa vuosittaisilla ylläpitokäynneillä.", currentLang)}</p>
                <br />
              <ReadMore caption={capitalize(translate("hinnasto", currentLang))} linkTo="/hinnat" />
            </div>

            <div className="right-column">
              <h2>{translate("Microblading – karvatekniikalla luodut kulmat", currentLang)}</h2>
              <br />
              <p>{translate("Valinta microbladingin ja kestopigmentoinnin välillä riippuu ihotyypistä, toiveista ja siitä, kuinka luonnollista tai näkyvää lopputulosta haet. Microblading sopii usein kuivaihoisille ja niille, jotka toivovat hyvin hienovaraista, karvamaista jälkeä. Kestopigmentointi taas on parempi vaihtoehto rasvaisemmalle iholle ja niille, jotka haluavat hieman pysyvämmän ja pehmeämmän varjostuksen.", currentLang)}</p>
              <br />
              <p>{translate("Microbladingin jälki on tarkkaa ja kevyempää kuin koneellisessa kestopigmentoinnissa, mutta sen kesto on lyhyempi – tyypillisesti noin 12–18 kuukautta. Myös microblading vaatii ylläpitoa, ja ensimmäinen vahvistuskerta tehdään yleensä 4–10 viikon kuluttua ensimmäisestä käsittelystä.", currentLang)}</p>
              <br />
              <h2>{translate("Kumpi sopii minulle?", currentLang)}</h2>
              <br />
              <p>{translate("Kestopigmentointi on ihon pintakerrokseen tehtävä puolipysyvä meikkaus, joka tehdään tatuointikoneella. Menetelmällä voidaan korostaa esimerkiksi kulmakarvoja, silmien rajauksia tai huulia. INKY 11:llä kestopigmentointi tehdään hellävaraisesti, tarkasti ja yksilöllisesti. Jokaisen kasvot ovat ainutlaatuiset ja siksi suunnittelen pigmentoinnin aina yhteistyössä asiakkaan kanssa. Lopputulos kestää henkilöstä riippuen 1–3 vuotta, ja tarvittaessa väriä voidaan vahvistaa vuosittaisilla ylläpitokäynneillä.", currentLang)}</p>
              <br />
              <p>{translate("Paula Annelica INKY 11:llä on koulutettu kestopigmentoija ja microblading-osaaja, joka auttaa sinua löytämään juuri sinulle sopivan ratkaisun. Studiollamme panostetaan rauhalliseen tunnelmaan, huolellisuuteen ja hygieniaan, jotta sinä voit tuntea olosi turvalliseksi.", currentLang)}</p>
              <br />
              <p>{translate("Tervetuloa tutustumaan ja kysymään lisää – meillä jokainen asiakas kohdataan yksilöllisesti ja suurella sydämellä.", currentLang)}</p>
              <br />
              <ReadMore title={false} caption={capitalize(translate("katso esimerkkejä galleriasta", currentLang))} linkTo="/galleria/pmu-tatuointi" />

            </div>
              
          </div>

        </div>
        
    </InfoPage>
  )
}

export default PermantMakeUp;