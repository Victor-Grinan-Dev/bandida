import React from "react";
import PicLoader from '../../components/picLoader/PicLoader';
import "@fortawesome/fontawesome-free/css/all.min.css";

/* COMPONENTS */
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';
import Navegator from "../../components/navegator/Navegator";
import Hamburger from "../../components/hamburger/Hamburger";
import Some from "../../components/some/Some";

const LandingPage = () => {

  return (
    <div className='landinpage' id="landingpage">
        <section className="landinpage-banner" style={{width:"100%"}}>
            <div className="contact-bar">

                <div className='contact-bar__corner' id='left'>
                    <p className="address">Porvoonkatu 14, 00510 Helsinki.</p>
                    <p className="opening-hours-left">Aukioloajat Ma-Pe 10:00-18:00</p>
                </div>

                <Some />

                <div className='contact-bar__corner' id='right'>
                    <p className="address-right">Porvoonkatu 14, 00510 Helsinki.</p>
                    <p className="opening-hours-right">Aukioloajat Ma-Pe 10:00-18:00</p>
                </div>

            </div>

            <Hamburger />

            <div className="logo-wrapper" >
                <PicLoader pic="logo169inv"/>
            </div>

            <Navegator />
        </section>
        
        {/* <InfiniteCarrusel /> */}

    </div>
  )
}

export default LandingPage;


//$bandida-primary-2:#ece9b0;
//$bandida-primary-5:#aa9364;



