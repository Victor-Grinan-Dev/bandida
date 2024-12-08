import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import AppLink from '../appLink/AppLink';

const AboutMe = (props) => {
  return (
    <section className='about-me'>

      {/* {props.ver && <div className="link-warpper">
        <AppLink linkTo="/" caption="Takaisin" />
      </div>}

      <div className="profile">
        {!props.ver &&<div className="profile-pic">
          <PicLoader pic="paula_profile_1" />
        </div>}

        <div className="profile-text">
          
            { props.ver && <p> Olen kotoisin Sawon sydämestä Kuopiosta jota piirtelyt ja kaikenlaiset käsihommat ovat kiinnostaneet pienestä lähtien. Vaatetusalan artesaani- ja rakennusalan kouluista samoin kuin kuvataidekoulusta on jäänyt paperit käteen ja ensimmäiset tatuoinnit Paula teki vuonna 2010.  Tässä vaiheessa elämä kuitenkin vei ympäri maailmaa ja tatuoimiset jäi haaveeksi odottamaan oikeaa aikaansa. Monenlaisessa mukana olleena ja erinäisiä hommia tehneenä palo tatuointeihin oli kuitenkin kova ja vuoden 2019 lopulla alkoi ura tatuoijana studiolla Lahdessa. Muutamassa studiossa työskennelleenä Lahdessa ja Helsingissä, myös oman osaamisen kehittäminen laajeni kestopigmentointeihin. Tästä lähti ajatus myös oman studion perustamiselle. Paula on käynyt microblading- ja kestopigmentointikoulutukset vuonna 2024. Studiolla saattaa myös joskus olla maalauksia ym askareita menossa😊 </p>}
            { !props.ver && <p>Artisti / omistaja </p>}
            <br />
            { !props.ver && <AppLink linkTo="artist" caption="Tieto minusta" />}
          </div>
      </div> */}

      <div className="profile-pic">
        <PicLoader pic="paula_profile_1" />
      </div>
      <div className="text-area">

        <p>Tatuoinneissa näkyy pääsääntöisesti mustaharmaa realismi mutta värikuvat ovat yhtä lähellä sydäntä, samoin kuin pienemmät sirot kuvatkin. Kannattaa aina kysyä jos jokin muunlainen haluamasi aihe tai tyyli olisi mahdollista toteuttaa, Paula on avoin kaikenlaisille ideoille.
        </p>
        <br />
        <p>Paula Annelica on kotoisin Sawon sydämestä Kuopiosta jota piirtelyt ja kaikenlaiset käsihommat ovat kiinnostaneet pienestä lähtien. Vaatetusalan artesaani- ja rakennusalan kouluista samoin kuin kuvataidekoulusta on jäänyt paperit käteen ja ensimmäiset tatuoinnit Paula teki vuonna 2010.  Tässä vaiheessa elämä kuitenkin vei ympäri maailmaa ja tatuoimiset jäi haaveeksi odottamaan oikeaa aikaansa. Monenlaisessa mukana olleena ja erinäisiä hommia tehneenä palo tatuointeihin oli kuitenkin kova ja vuoden 2019 lopulla alkoi ura tatuoijana studiolla Lahdessa. Muutamassa studiossa työskennelleenä Lahdessa ja Helsingissä, myös oman osaamisen kehittäminen laajeni kestopigmentointeihin. Tästä lähti ajatus myös oman studion perustamiselle. Paula on käynyt microblading- ja kestopigmentointikoulutukset vuonna 2024. Studiolla saattaa myös joskus olla maalauksia ym askareita menossa😊 
        </p>
      </div>

    </section>
  )
}

export default AboutMe;