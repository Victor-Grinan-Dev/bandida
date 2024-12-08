import React from 'react';
import PicLoader from '../picLoader/PicLoader';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className="profile">
        <div className="profile-pic">
          <PicLoader pic="paula_profile_1" />
        </div>
        <div className="profile-text">
        <h2>Artisti / omistaja</h2>
          <p>Paula Annelica on kotoisin Sawon sydämestä Kuopiosta jota piirtelyt ja kaikenlaiset käsihommat ovat kiinnostaneet pienestä lähtien. Vaatetusalan artesaani- ja rakennusalan kouluista samoin kuin kuvataidekoulusta on jäänyt paperit käteen ja ensimmäiset tatuoinnit Paula teki vuonna 2010.  Tässä vaiheessa elämä kuitenkin vei ympäri maailmaa ja tatuoimiset jäi haaveeksi odottamaan oikeaa aikaansa. Monenlaisessa mukana olleena ja erinäisiä hommia tehneenä palo tatuointeihin oli kuitenkin kova ja vuoden 2019 lopulla alkoi ura tatuoijana studiolla Lahdessa. Muutamassa studiossa työskennelleenä Lahdessa ja Helsingissä, myös oman osaamisen kehittäminen laajeni kestopigmentointeihin. Tästä lähti ajatus myös oman studion perustamiselle. Paula on käynyt microblading- ja kestopigmentointikoulutukset vuonna 2024. Studiolla saattaa myös joskus olla maalauksia ym askareita menossa😊 </p>
        </div>
      </div>

    </section>
  )
}

export default AboutMe;