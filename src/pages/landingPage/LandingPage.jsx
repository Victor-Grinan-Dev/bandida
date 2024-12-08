import React from "react";
import PicLoader from '../../components/picLoader/PicLoader';
import "@fortawesome/fontawesome-free/css/all.min.css";

/* COMPONENTS */
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';
import Navegator from "../../components/navegator/Navegator";
import Hamburger from "../../components/hamburger/Hamburger";

const LandingPage = () => {

  return (
    <div className='landinpage'>
        <section className="landinpage-banner" style={{width:"100%"}}>

            <div className="contact-bar">
                <div className='contact-bar__corner' id='left'>
                    <p className="address">Porvoonkatu 14, 00510 Helsinki.</p>
                    <p className="opening-hours-left">Aukioloajat Ma-Pe 10:00-18:00</p>
                </div>
                <div className="some">
                    <a 
                        className="some-item" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://mail.google.com/mail/?view=cm&to=paulaannelica.tattoo@gmail.com"
                        >
                    <i className="fas fa-envelope some-icon"></i>
                    </a>
                    <a className="some-item" target='blank' href='https://www.facebook.com/paulaannelica'><i className="fab fa-facebook some-icon"></i></a>
                    <a className="some-item" target='blank' href='https://www.instagram.com/paulaannelica.tattoo/'><i className="fab fa-instagram some-icon"></i></a>
                    <a className="some-item" target='blank' href='https://www.tiktok.com/@paulaannelica.tattoo'><i className="fab fa-tiktok some-icon"></i></a>
                </div>
                <div className='contact-bar__corner' id='right'>
                <p className="address-right">Porvoonkatu 14, 00510 Helsinki.</p>
                    <p className="opening-hours-right">Aukioloajat Ma-Pe 10:00-18:00</p>
                    <Hamburger />
                </div>
            </div>

            <div className="logo-wrapper" >
                <PicLoader pic="logo169inv"/>
            </div>

            <Navegator />
        </section>
        
        <InfiniteCarrusel />

    </div>
  )
}

export default LandingPage;


//$bandida-primary-2:#ece9b0;
//$bandida-primary-5:#aa9364;



