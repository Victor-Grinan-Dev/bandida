import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore";
import InfoPage from "../infoPage/InfoPage";

const Artist = () => {

  return (
    <InfoPage linkTo="/#artist-section" >
      <div className="single-page artist-page" >

        <div className="columns-wrapper">
          <div className="left-column">
          <h1>Tatuointiartisti Paula</h1>
          <h2>Tatuoija & sertifioitu kestopigmentoija</h2>

            <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
            <br />
            <p>Hei, olen Paula, INKY 11:n perustaja, tatuoija ja koulutettu kestopigmentoija. Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä.</p>
          </div>

          <div className="right-column">
            <h2>Kestopigmentointi ja microblading</h2>
            <br />
            <p>Olen äskettäin laajentanut osaamistani kestopigmentointeihin ja microbladingiin, joihin olen saanut viralliset koulutukset. Nyt tarjoan palveluita myös niille, jotka kaipaavat luonnollista ja kestävää kauneuden korostamista – esimerkiksi kauniisti muotoillut kulmat tai huulten kevyt sävytys voivat tehdä arjesta asteen huolettomampaa. Luonnollinen kauneus kestää aikaa ja korostaa omaa persoonaasi.</p> 
            <br />
            <p>Lähestyn jokaista työtä luonnollisuuden ja yksilöllisyyden kautta.</p>
            <br />
            <ReadMore caption="Mitä on kestopigmentointi ja microblading?" linkTo="/kestopigmentointi-ja-microblading" state={{from:"/artist"}}/> 
            <br />
            <br />
            <h2>Realistinen mustavalkotatuointi, väritatuointi vai pieni symboli?</h2>
            <br />
            <p>Minulle tärkeintä on, että asiakas tuntee olonsa tervetulleeksi, turvalliseksi ja kuulluksi. Jokainen iho on ainutlaatuinen, ja siksi jokainen työ on tarkkaan mietitty ja huolella tehty juuri sinua varten.</p>
            <br />
            <p>Vaikka töissäni näkyy pääsääntöisesti mustaharmaa realismi, rakastan värejä ja teen myös värikuvia oikein mielelläni kuten myös pieniä yksinkertaisempiakin kuvia.</p>
            <br />
            <p>Tervetuloa toteuttamaan juuri sinun visiosi - oli se sitten herkkä pieni symboli tai näyttävämpi kokonaisuus</p>
            <br />
            <ReadMore caption="Miten valmistautua tatuointiin" linkTo="/ennen-tatuointia"/> 

          </div>

        </div>
        
      </div>
    </InfoPage>
  )
}

export default Artist;