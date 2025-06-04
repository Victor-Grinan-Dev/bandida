import PicLoader from "../../components/picLoader/PicLoader";
import InfoPage from "../infoPage/InfoPage";

const EnnenTatuointia = () => {
  return (

    <InfoPage backTo="/artist" >
      <article className="single-page ennen-tatuointia-page">

        <div className="columns-wrapper">
          <div className="left-column">
            <h1>Ennen tatuointia</h1>
            <br />
              <PicLoader pic="studio2" seoAlt={"Inky 11 tatuointi studio"} picModalOn={false}/>
              <ul>
                <br />
                <li>Tulethan tatuointiin terveenä.</li>
                <br />
                <li>Tatuointeja ei tehdä alle 18-vuotiaille.</li>
                <br />
                <li>Vältä alkoholia. Päihtyneenä tai krapulaisena ei tatuointiin kannata tulla.</li>
              </ul>
          </div>

          <div className="right-column">
            
            <ul>
              <li>Ihoa on suositeltavaa rasvata vähintään viikon ajan ennen tatuointia.</li>
              <br />
              <li>Iho on suositeltavaa kuoria viikon aikana 2-3 kertaa ennen tatuointiin tuloa. </li>
              <br />
              <li>Nuku ja syö hyvin ennen tatuointia. Ota eväitä mukaan pitkään sessioon, studiolta löytyy jääkaappi, mikro ja kahvia on tarjolla. Vieressä on kauppa josta voi tarvittaessa hakea lisää syötävää.</li>
              <br />
              <li>Tatuoitavan alueen kova kuntosalitreeni samana aamuna tai edellisenä päivänä voi tehdä tatuoimisen ottamisesta kipeämpää.</li>
              <br />
              <li>Varustaudu mukavilla ja sopivalla vaatetuksella. Esim olkavarren tatuointiin hihaton paita jne. Vaatteet saattavat myös sotkeutua, joten ethän laita vaatteita joiden et toivo sotkeutuvan.</li>
              <br />
              <li>Jotkin lääkitykset (esim. verenohennuslääkeet) tai muut terveyteen liittyvät asiat, esim tulevat leikkaukset jne, on hyvä varmistaa lääkäriltäsi onko tautuoiminen kannattavaa tässä kohtaa.</li>
              <br />
              <li>Tatuointi on ikuinen ja tulee elämään jonkin verran ihon mukana ajan kuluessa. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin ja tähän vaikuttavat myös tatuoinnin tyyli, paikka ja toteutustapa, unohtamatta jälkihoitoa jolla on myös iso merkitys.</li>
              <br />
              <li>Tatuoinnilla on 6kk takuu. Jos hoito-ohjeita on noudatettu, tatuointi paranee hyvin ja lopputulos on myös parempi. Jos jostain syystä jossain kohtaa väriä ei ole jäänyt tarpeeksi jne niin tämä korjataan ilman kuluja. Muissa tapauksissa korjauksesta veloitetaan normaali hinta.</li>
              <br />
              <li>Konsultaatio on maksuton ja se ei sido ottamaan vielä kuvaa. Siinä käydään ideaa tarkemmin läpi ja kysellään kaikenlaisia tarkentavia kysymyksiä jne.</li>
              <br />

            </ul>

          </div>
        </div>
      </article>
    </InfoPage>

  )
}

export default EnnenTatuointia