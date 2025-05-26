import AppLink from "../../components/appLink/AppLink";
import PicLoader from "../../components/picLoader/PicLoader";
import { translate } from "../../translation/translator";
import { useSelector } from "react-redux";  


const Artist = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <section className='artist'>

      <div style={{position:"absolute", top:"50px", left:"50px", zIndex:"1000"}}>
        <AppLink caption="kotiin" linkTo="/" />
      </div>
  
      <div className="panel-1">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
        </div>
        <div className='omistaja'><h1>{translate("Paula Annelica", currentLang)}</h1></div>
      </div>
      <div className="panel-2">
        <div className="text-area">
          <p>Paula Annelica on kotoisin Sawon sydämestä Kuopiosta jota piirtäminen ja kaikenlainen käsillä tekeminen ovat kiinnostaneet pienestä lähtien. Pohjakoulutuksia on vaatetusalan artesaani- ja rakennusalan kouluista samoin kuin kuvataidekoulusta ja ravintola-alalta.</p> 
          <br />
          <p> Ensimmäiset tatuoinnit Paula teki vuonna 2010. Tässä vaiheessa elämä kuitenkin vei ympäri maailmaa ja tatuoimiset jäi haaveeksi odottamaan oikeaa aikaansa. Monenlaisessa mukana olleena ja erinäisiä hommia tehneenä palo tatuointeihin oli kuitenkin kova ja vuoden 2019 lopulla alkoi ura tatuoijana studiolla Lahdessa. Muutamassa studiossa työskennelleenä Lahdessa ja Helsingissä, myös kiinnostus ja osaamisen kehittäminen laajeni kestopigmentointeihin. Tästä lähti ajatus myös oman studion perustamiselle. Paula on käynyt microblading- ja kestopigmentointikoulutukset vuonna 2024.</p> 
          <br />
          <p>Tatuoinneissa näkyy pääsääntöisesti mustaharmaa realismi mutta värikuvat ovat yhtä lähellä sydäntä, samoin kuin pienemmät sirot kuvatkin. Eri tyylien kokeileminen ja kehittäminen on aina mielenkiintoista joten älä epäröi kysyä jos jokin haluamasi aihe tai tyyli olisi mahdollista toteuttaa.</p>

          {/*
          Tatuoija & sertifioitu kestopigmentoija

          Hei, olen Paula, tatuoija ja tuore kestopigmentoija.

          Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.

          Olen äskettäin laajentanut osaamistani kestopigmentointeihin ja microbladingiin, joihin olen saanut viralliset koulutukset. Nyt tarjoan palveluita myös niille, jotka kaipaavat luonnollista ja kestävää kauneuden korostamista – esimerkiksi kauniisti muotoillut kulmat tai huulten kevyt sävytys voivat tehdä arjesta asteen huolettomampaa. Lähestyn jokaista työtä luonnollisuuden ja yksilöllisyyden kautta.
          
          Olen helposti lähestyttävä, tarkka ja sydämellä mukana jokaisessa projektissa.
          
          Minulle tärkeintä on, että asiakas tuntee olonsa tervetulleeksi, turvalliseksi ja kuulluksi. Jokainen iho on ainutlaatuinen, ja siksi jokainen työ on tarkkaan mietitty ja huolella tehty juuri sinua varten.
          
          Vaikka töissäni näkyy pääsääntöisesti mustaharmaa realismi, rakastan värejä ja teen myös värikuvia oikein mielelläni kuten myös pieniä yksinkertaisempiakin kuvia.
          
          Tervetuloa toteuttamaan juuri sinun visiosi – oli se sitten herkkä pieni symboli tai näyttävämpi kokonaisuus.
          */}
        </div>
      </div>
    </section>
  )
}

export default Artist;