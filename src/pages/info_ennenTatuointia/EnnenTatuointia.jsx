import { useSelector } from "react-redux";
import PicLoader from "../../components/picLoader/PicLoader";
import { translate } from "../../translation/translator";
import InfoPage from "../infoPage/InfoPage";

const EnnenTatuointia = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (

    <InfoPage backTo="/artisti" >
      <div className="single-page ennen-tatuointia-page">

        <div className="columns-wrapper">
          <div className="left-column">
            <h1>{translate("Ennen tatuointia", currentLang)}</h1>
            <br />
              <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
              <ul>
                <br />
                <li>{translate("Tulethan tatuointiin terveenä.", currentLang)}</li>
                <br />
                <li>{translate("Tatuointeja ei tehdä alle 18-vuotiaille.", currentLang)}</li>
                <br />
                <li>{translate("Vältä alkoholia. Päihtyneenä tai krapulaisena ei tatuointiin kannata tulla.", currentLang)}</li>
              </ul>
          </div>

          <div className="right-column">
            
            <ul>
              <li>{translate("Ihoa on suositeltavaa rasvata vähintään viikon ajan ennen tatuointia.", currentLang)}</li>
              <br />
              <li>{translate("Iho on suositeltavaa kuoria viikon aikana 2-3 kertaa ennen tatuointiin tuloa.", currentLang)}</li>
              <br />
              <li>{translate("Nuku ja syö hyvin ennen tatuointia. Ota eväitä mukaan pitkään sessioon, studiolta löytyy jääkaappi, mikro ja kahvia on tarjolla. Vieressä on kauppa josta voi tarvittaessa hakea lisää syötävää.", currentLang)}</li>
              <br />
              <li>{translate("Tatuoitavan alueen kova kuntosalitreeni samana aamuna tai edellisenä päivänä voi tehdä tatuoimisen ottamisesta kipeämpää.", currentLang)}</li>
              <br />
              <li>{translate("Varustaudu mukavilla ja sopivalla vaatetuksella. Esimerkiksi olkavarren tatuointiin hihaton paita. Vaatteet saattavat myös sotkeutua, joten ethän laita vaatteita joiden et toivo sotkeutuvan.", currentLang)}</li>
              <br />
              <li>{translate("Jotkin lääkitykset (esim. verenohennuslääkeet) tai muut terveyteen liittyvät asiat, esimerkiksi tulevat leikkaukset, on hyvä varmistaa lääkäriltäsi onko tautuoiminen kannattavaa tässä kohtaa.", currentLang)}</li>
              <br />
              <li>{translate("Tatuointi on ikuinen ja tulee elämään jonkin verran ihon mukana ajan kuluessa. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin ja tähän vaikuttavat myös tatuoinnin tyyli, paikka ja toteutustapa, unohtamatta jälkihoitoa jolla on myös iso merkitys.", currentLang)}</li>
              <br />
              <li>{translate("Tatuoinnilla on 6kk takuu. Jos hoito-ohjeita on noudatettu, tatuointi paranee hyvin ja lopputulos on myös parempi. Jos jostain syystä jossain kohtaa väriä ei ole jäänyt tarpeeksi niin tämä korjataan ilman kuluja. Muissa tapauksissa korjauksesta veloitetaan normaali hinta.", currentLang)}</li>
              <br />
              <li>{translate("Konsultaatio on maksuton ja se ei sido ottamaan vielä kuvaa. Siinä käydään ideaa tarkemmin läpi ja kysellään kaikenlaisia tarkentavia kysymyksiä.", currentLang)}</li>
              <br />

            </ul>

          </div>
        </div>
      </div>
    </InfoPage>

  )
}

export default EnnenTatuointia