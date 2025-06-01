import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore";
import InfoPage from "../infoPage/InfoPage";

const Artist = () => {

  return (
    <InfoPage hashLink={true} caption="kotiin" linkTo="/#about-me">

      {/* <div style={{position:"absolute", top:"20px", left:"20px", zIndex:"1000"}}>
        <AppLink hashLink={true} caption="kotiin" linkTo="/#about-me" />
      </div> */}
  
      <div className="">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
        </div>
        <div className='omistaja'><h1>Paula Annelica - tatuointiartisti</h1></div>
        <div><h2>Tatuoija & sertifioitu kestopigmentoija</h2></div>
  
      </div>
      <div className="">
        <div className="">
          {/* <p>
            Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä. Olen helposti lähestyttävä, tarkka ja sydämellä mukana jokaisessa projektissa.
          </p>
          <br /> */}
          <h2>Kestopigmentointi ja microblading</h2>
          <br />
          <p> 
            Olen äskettäin laajentanut osaamistani kestopigmentointeihin ja microbladingiin, joihin olen saanut viralliset koulutukset. Nyt tarjoan palveluita myös niille, jotka kaipaavat luonnollista ja kestävää kauneuden korostamista – esimerkiksi kauniisti muotoillut kulmat tai huulten kevyt sävytys voivat tehdä arjesta asteen huolettomampaa. Luonnollinen kauneus kestää aikaa ja korostaa omaa persoonaasi.          
          </p> 

          <br />
          <p>
            Lähestyn jokaista työtä luonnollisuuden ja yksilöllisyyden kautta
          </p>

          <ReadMore caption="Lue lisää: Mitä on kestopigmentointi ja microblading?" linkTo="/kestopigmentointi-ja-microblading"/> 
          <br />
          <h2>
            Realistinen mustavalkotatuointi, väritatuointi vai pieni symboli?
          </h2>
          <br />
          <p>
            Minulle tärkeintä on, että asiakas tuntee olonsa tervetulleeksi, turvalliseksi ja kuulluksi. Jokainen iho on ainutlaatuinen, ja siksi jokainen työ on tarkkaan mietitty ja huolella tehty juuri sinua varten.
          </p>
          <br />
          <p>
          Vaikka töissäni näkyy pääsääntöisesti mustaharmaa realismi, rakastan värejä ja teen myös värikuvia oikein mielelläni kuten myös pieniä yksinkertaisempiakin kuvia.
          </p>
          <br />
          <p>
            Tervetuloa toteuttamaan juuri sinun visiosi - oli se sitten herkkä pieni symboli tai näyttävämpi kokonaisuus
          </p>
          <ReadMore caption="Lue lisää: miten valmistautua tatuointiin" linkTo="/ennen-tatuointia"/> 
          <br />
        </div>
      </div>
    </InfoPage>
  )
}

export default Artist;