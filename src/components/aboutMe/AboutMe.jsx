import React, { useEffect } from 'react';
import PicLoader from '../picLoader/PicLoader';
import { translate } from '../../translation/translator'
import { useSelector } from 'react-redux';

const AboutMe = () => {
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <section className='about-me' id='about-me'>

      <div className="panel-1">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" />
        </div>
        <div className='omistaja'><h3>{translate("artist", currentLang)}</h3></div>
      </div>
      <div className="panel-2">
        <div className="text-area">
          <p>Paula Annelica on kotoisin Sawon sydämestä Kuopiosta jota piirtäminen ja kaikenlainen käsillä tekeminen ovat kiinnostaneet pienestä lähtien. Pohjakoulutuksia on vaatetusalan artesaani- ja rakennusalan kouluista samoin kuin kuvataidekoulusta ja ravintola-alalta.</p> 
          <br />
          <p> Ensimmäiset tatuoinnit Paula teki vuonna 2010. Tässä vaiheessa elämä kuitenkin vei ympäri maailmaa ja tatuoimiset jäi haaveeksi odottamaan oikeaa aikaansa. Monenlaisessa mukana olleena ja erinäisiä hommia tehneenä palo tatuointeihin oli kuitenkin kova ja vuoden 2019 lopulla alkoi ura tatuoijana studiolla Lahdessa. Muutamassa studiossa työskennelleenä Lahdessa ja Helsingissä, myös kiinnostus ja osaamisen kehittäminen laajeni kestopigmentointeihin. Tästä lähti ajatus myös oman studion perustamiselle. Paula on käynyt microblading- ja kestopigmentointikoulutukset vuonna 2024.</p> 
          <br />
          <p>Tatuoinneissa näkyy pääsääntöisesti mustaharmaa realismi mutta värikuvat ovat yhtä lähellä sydäntä, samoin kuin pienemmät sirot kuvatkin. Eri tyylien kokeileminen ja kehittäminen on aina mielenkiintoista joten älä epäröi kysyä jos jokin haluamasi aihe tai tyyli olisi mahdollista toteuttaa.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;