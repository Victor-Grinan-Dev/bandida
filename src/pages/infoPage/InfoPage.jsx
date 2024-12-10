import AppLink from '../../components/appLink/AppLink';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const InfoPage = () => {
  const [tab, setTab] = useState('ennen')
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const fullTitle = {
    ennen:"Ennen tatuointia",
    hoito:"Hoito- ohjeet",
    rajoitukset:"Rajoitukset",
    saapuminen:"Saapuminen Studiolle",
    varaus:"Ajan varaus",
    hinnasto:"Hinnasto",
  }

  const handleTabs = (tab) => {
    setTab(tab);
  };

  return (
    <div className='info-page' style={{color:"white"}}>
            
            <div className='info-page-wraper'>
            
              <div className="side-bar">
              
                <div className="links-wrapper">

                  <div className="link-wrapper" id='back'>
                    <AppLink caption="Takaisin" linkTo="/"/>
                  </div>

                  <div className="link-wrapper" onClick={()=>handleTabs('ennen')}>
                    <AppLink caption="Ennen tatuointia"/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('hoito')}>
                    <AppLink caption="Hoito- ohjeet"/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('rajoitukset')}>
                    <AppLink caption="Rajoitukset"/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('saapuminen')}>
                    <AppLink caption="Saapuminen Studiolle"/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('varaus')}>
                    <AppLink caption="Ajan varaus"/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('hinnasto')}>
                    <AppLink caption="Hinnasto"/>
                  </div>
                </div>
              </div>

            </div>

            <div className="info-wrapper">
              <h4>Info: {fullTitle[tab]}</h4>
              <br />
              {tab === 'ennen' &&
                <div className="info-container">
                  {/* <div className="title-container"><h5>Ennen tatuointia</h5></div> */}
                  <div className="text-container">
                    <ul>
                        <li><p>Ihoa on suositeltavaa rasvata vähintään viikon ajan ennen tatuointia.</p></li>
                        <li><p>Iho on suositeltavaa kuoria viikon aikana 2-3 kertaa ennen tatuointiin tuloa. </p></li>
                        <li><p>Nuku ja syö hyvin ennen tatuointia. Ota eväitä mukaan pitkään sessioon, studiolta löytyy jääkaappi ja kahvia on tarjolla. Vieressä on kauppa josta voi tarvittaessa hakea lisää syötävää.</p></li>
                        <li><p>Vältä alkoholia. Päihtyneenä tai krapulaisena ei tatuointiin kannata tulla. </p></li>
                        <li><p>Tatuoitavan alueen kova kuntosalitreeni samana aamuna tai edellisenä päivänä voi tehdä tatuoimisen ottamisesta kipeämpää.</p></li>
                        <li><p>Varustaudu mukavilla ja sopivalla vaatetuksella. Esim olkavarren tatuoitiin hihaton paita jne. Vaatteet saattavat myös sotkeutua, joten ethän laita vaatteita joiden et toivo sotkeutuvan. </p></li>
                        <li><p>Tulethan tatuointiin terveenä.</p></li>
                        <li><p>Joidenkin lääkitysten kohdalla (esim. verenohennuslääkeet) tai muita terveyteen liittyviä asioita, esim tulevat leikkaukset jne, on hyvä varmistaa lääkäriltäsi onko tautoiminen kannattavaa tässä kohtaa. </p></li>
                        <li><p>Tatuointi on ikuinen ja tulee elämään ihon mukana ajan kuluessa. Tämä ei kuitenkaan tarkoita että tatuoinnista on jäljellä vain musta/sininen mössö parin vuoden päästä. Tähän vaikuttavat tatuoinnin tyyli, paikka ja toteutus tapa. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin.</p></li>
                        <li><p>Tatuointeja ei tehdä alle 18-vuotiaille. </p></li>
                        <li><p>Tatuoinnilla on 6kk takuu. Jos hoito-ohjeita on noudatettu niin tatuointi paranee hyvin ja lopputulos on myös parempi. Jos jostain syystä jossain kohtaa väriä ei ole jäänyt tarpeeksi jne niin tämä korjataan ilman kuluja. Muissa tapauksissa korjauksesta veloitetaan normaali hinta. </p></li>
                    </ul>
                  </div>
                </div>
              }


              {tab === 'hoito' &&
                <div className="info-container">
                  {/* <div className="title-container"><h4>Hoito- ohjeet</h4></div> */}
                  <div className="text-container">
                    <ul>
                        <li><p>Tatuoinnin jälkeen iho suojataan kemulla tai haavakalvolla. Kelmu otetaan pois 2-3 tunnin kuluttua ja kalvo poistetaan 3-4 päivän kuluttua. </p></li>
                        <li><p>Haavakalvo on hengittävä ja vedenkestävä joten sen kanssa voi käydä suihkussa huoletta. Poista kalvo 3-4 päivän päästä veden alla varovasti vetämällä. Älä riuhtaise! Tämä sataa aiheuttaa iholle vaurioita ja pahimmassa tapauksessa rikkoa ihoa. Taputtele iho kuivaksi talouspaperilla tai ilma kuivaten. Levitä kevyt kerros rasvaa kuivauksen jälkeen. Voit halutessasi antaa ihon hengitellä ennen rasvausta 10-15 min. </p></li>
                        <li><p>Kelmun poiston jälkeen pese tatuointi haalealla vedellä ja miedolla pesuaineella, taputtele kuivaksi talouspaperilla ja rasvaa ohuesti.</p></li>
                        <li><p>Voit suojata tatuoinnin ensimmäisen yön ajaksi kelmulla, mutta parhaiten iho paranee kun saa mahdollisimman paljon ilmaa, ja kelmu ei hengitä. Tästä syystä myös kelmua ei tulisi pitää ensimmäisen päivän jälkeen. </p></li>
                        <li><p>Muista pestä aina kätesi ennen kuin kosket tatuointiin. </p></li>
                        <li><p>Ensimmäiset kaksi viikkoa pese ja rasvaa tatuointia ohuesti 2-3 krt/ pvä.  Tai tarvittaessa voi rasvata useammin jos iho tuntuu kovin kireältä. </p></li>
                        <li><p>Halutessasi voit suojata tatuointia sideharsolla ja laittaa alle hyvin rasvaa. </p></li>
                        <li><p>Vältä kireitä vaatteita tatuoinnin päällä </p></li>
                        <li><p>Käytä tatuoijasi suosittelemaa rasvaa tai esim Bepanthen tai Bevita-R. </p></li>
                        <li><p>Älä puhdista tatuointia Desinfiointiaineilla.</p></li>
                        <li><p>Jos joudut suojaamaan tatuointia esim töiden takia niin voit laittaa sideharsoa ja alle rasvaa hiukan enemmän. Kuitenkin paras on jos tatuointi saa olla ilman peittämistä.</p></li>
                        <li><p>Tatuointi on arka ja voi olla turvonnut ja punoittava ensimmäisten päivien aikana. Samoin kuume tai kipeä olo ovat normaaleja reaktioita varsinkin pidemmän session jälkeen. Voit ottaa särkylääkettä tarvittaessa. </p></li>
                        <li><p>Noin viikon kuluttua tatuoinnista alkaa irtoamaan kuollutta ihoa ja alta paljastuu uusiutunut iho joka saattaa näyttää tässä vaiheessa vielä haalealta mutta ajan kanssa palautuu normaaliin väriin. </p></li>
                        <li><p>älä revi irtoavaa ihoa. Tatuointia voi suihkussa kevyesti hieroa jolloin irtoava iho lähtee helpommin pois. Luonnollinen irtoaminen on kuitenkin paras vaihtoehto.</p></li>
                        <li><p>Iho voi myös kutista mutta älä raavi. Kevyt läpsyttely auttaa.</p></li>
                        <li><p>Älä päästä lemmikkiäsi nuolemaan tatuointia. </p></li>
                        <li><p>Jos paranemisessa ilmenee ongelmia ja tatuointi ei ala paranemaan vaan kipeytymään ja punoittamaan niin ole yhteydessä tatuoijaasi. </p></li>
                        <li><p>Älä epäröi kysyä tatuoijaltasi jos mieltäsi askarruttaa jokin asia.</p></li>
                        </ul>
                    </div>
                </div>
              }

              {tab === 'rajoitukset' &&
                  <div className="info-container">
                      {/* <div className="title-container"><h5>Rajoitukset</h5></div> */}
                    <div className="text-container">
                        <ul>
                          <li>Hiki / Rankka treeni 2 viikkoa</li>
                          <li> Kuntosali 1 viikko</li>
                          <li> Sauna 2 viikkoa</li>
                          <li> Uiminen 4 viikkoa</li>
                          <li> Aurinko ja solarium 4 viikkoa. Jos joudut olemaan auringossa, suojaa tatuointi vaatteilla ja tatuoinnin parannuttuakin käytä suojakerroin 50. Tatuoitu iho palaa herkästi.</li>
                        </ul>
                      </div>
                  </div>
              }

              {tab === 'saapuminen' &&
                  <div className="info-container">
                        {/* <div className="title-container"><h5>Saapuminen Studiolle</h5></div> */}
                      <div className="text-container">
                        <p>Studio sijaitsee aivan Linnanmäen kupeessa Alppilassa. Raitiovaunut 3 ja 4 pysähtyy suoraan studion eteen. Pysäkki on ”Alppila”. Sturenkadulta kulkee useita raitiovaunuja ja busseja ja siitä kävelee pari minuuttia studiolle. Pasilasta matkaa on 2km ja bussi nro 23 tulee Pasilasta suoraan Sturenkadulle. Autolle pysäköintipaikkoja on paljon kadun varsilla ja on ilmaista la-su, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadun varret. 
                       </p>
                    </div>
                  </div>
              }

              {tab === 'varaus' &&
                  <div className="info-container">
                      {/* <div className="title-container"><h5>Ajan varaus</h5></div> */}
                      <div className="text-container">
                      <p>Kerro viestiin oma nimi ja paikkakunta. Kerro tatuointi idean lisäksi mihin ja millä tyylillä kuvan haluaisit toteutettavan. Liitä muutamia referenssi kuva mukaan. En kuitenkaan kopioi suoraan toisten tekemiä tatuointeja. Logot ym. ovat asia erikseen. Jos alueella on muita tatuointeja tai haluat peittokuvaa, ota alueesta kuva ja kerro kumpi puoli esim kädestä on kyseessä. Tarkkaa hintaa on mahdoton sanoa heti alkuun ja hinta-arvio on aina arvio joka tarkentuu lopullisen suunnitelman ja toteutuksen mukaan. Suunnittelu ja varausmaksu on 100e jonka maksettua varaus on sitova ja suunnittelut tapahtuvat vasta maksun jälkeen. Varausmaksu hyvitetään tatuoinnin loppusummasta.  Jos idea muuttuu kuvan suunnittelun aikana/jälkeen, tästä otetaan uusi 100-150e  suunnittelumaksu. Jos sairastut, voi aikaa siirtää kaksi kertaa samalla varausmaksulla jonka jälkeen otetaan uusi varausmaksu.  Konsultaatio on maksuton ja se ei sido ottamaan vielä kuvaa. Siinä käydään ideaa tarkemmin läpi ja kysellään kaikenlaisia tarkentavia kysymyksiä jne. Joskus varattu kellonaika saattaa tatuointi päivänä venyä syystä tai toisesta joten tähän on hyvä varautua.  tatuointeja ei tehdä alle 18- vuotiaille. Tulethan tatuoitavaksi vain terveenä.</p>
                    </div>
                  </div>
              }

              {tab === 'hinnasto' &&
                  <div className="info-container">
                    {/* <div className="title-container"><h5>Hinnasto</h5></div> */}
                      <div className="text-container">
                        <ul>
                              <li>Tatuoinnit: 100e/h</li> 

                              <li>Walk-in kuvat alkaen 80e </li>
                              <li>koko päivä 500-800e </li>
                              <li>Pmu: 150-250e</li>
                              <li>Varasumaksu 50-100e</li>
                              <br />
                              <p>Maksutavat </p>
                              <p>Käteinen ja MobilePay</p>
                        </ul>
                    </div>
                </div>
              }
            </div>

    </div>
  )
}

export default InfoPage;