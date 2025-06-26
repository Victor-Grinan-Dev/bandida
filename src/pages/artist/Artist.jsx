import { useSelector } from "react-redux";
import PicLoader from "../../components/picLoader/PicLoader";
import ReadMore from "../../components/readMore/ReadMore";
import InfoPage from "../infoPage/InfoPage";
import { translate } from "../../translation/translator";

const Artist = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <InfoPage linkTo="/#artist-section" >
      <div className="single-page artist-page" >

        <div className="columns-wrapper">
          <div className="left-column">
          <h1>{translate("Tatuointiartisti Paula Annelica", currentLang)}</h1>
          <h2>{translate("Tatuoija & sertifioitu kestopigmentoija", currentLang)}</h2>
          <br />

            <PicLoader pic="paula_profile_1" seoAlt={"Portrait of Inkky11 tattoo artist Paula Annelica"} picModalOn={false}/>
            <br />
            <p>{translate("Hei, olen Paula, INKY 11:n perustaja, tatuoija ja koulutettu kestopigmentoija.", currentLang)}</p>
            <br />
            <p>{translate("Olen toiminut tatuointien parissa usean vuoden ajan ja rakastan luoda uniikkeja teoksia, jotka kertovat tarinaa tai kuvastavat jotain merkityksellistä. Olen helposti lähestyttävä, tarkka ja sydämellä mukana jokaisessa projektissa.", currentLang)}</p>
          </div>

          <div className="right-column">
            <h2>{translate("Kestopigmentointi ja microblading", currentLang)}</h2>
            <br />
            <p>{translate("Olen äskettäin laajentanut osaamistani kestopigmentointeihin ja microbladingiin, joihin olen saanut viralliset koulutukset.", currentLang)}</p> 
            <br />
            <p>{translate("Nyt tarjoan palveluita myös niille, jotka kaipaavat luonnollista kauneuden korostamista – esimerkiksi muotoillut kulmat tai huulten kevyt sävytys voivat tehdä arjesta asteen huolettomampaa. Luonnollinen kauneus kestää aikaa ja korostaa omaa persoonaasi.", currentLang)}</p>
            <br />
            <p>{translate("Lähestyn jokaista työtä yksilöllisyyden kautta.", currentLang)} </p>
            <br />
            <ReadMore caption="Mitä on kestopigmentointi ja microblading?" linkTo="/kestopigmentointi-ja-microblading" state={{from:"/artisti"}}/> 
            <br />
            <h2>{translate("Realistinen mustavalkotatuointi, väritatuointi vai pieni symboli?", currentLang)}</h2>
            <br />
            <p>{translate("Minulle tärkeintä on, että asiakas tuntee olonsa tervetulleeksi, turvalliseksi ja kuulluksi. Jokainen iho on ainutlaatuinen, ja siksi jokainen työ on tarkkaan mietitty ja huolella tehty juuri sinua varten.", currentLang)}</p>
            <br />
            <p>{translate("Vaikka töissäni näkyy pääsääntöisesti mustaharmaa realismi, rakastan värejä ja teen myös värikuvia oikein mielelläni kuten myös pieniä yksinkertaisempiakin kuvia.", currentLang)}</p>
            <br />
            <p>{translate("Tervetuloa toteuttamaan juuri sinun visiosi – oli se sitten herkkä pieni symboli tai näyttävämpi kokonaisuus.", currentLang)}</p>
            <br />
            <ReadMore caption="Ideat tatuointiin – miten valita oma tatuointityyli?" linkTo="/ideat-tatuointiin" /> 

          </div>

        </div>
        
      </div>
    </InfoPage>
  )
}

export default Artist;