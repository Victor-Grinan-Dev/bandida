import React from 'react';
import PicLoader from '../../components/picLoader/PicLoader';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppLink from '../../components/appLink/AppLink';
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';

const LandingPage = () => {
  return (
    <div className='landinpage'>
        <div className="contact-bar">
            <p>Aukioloajat Ma-Pe 10:00-18:00</p>
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
            <p>strönberginkuja 14</p>
        </div>
        <div className="logo-wrapper" >
            <PicLoader pic="logo169inv"/>
        </div>

        <div className="nav-bar">
            <AppLink caption="Kotisivu"  />
            <AppLink caption="Yrituksestä"  />
            <AppLink caption="Galleria"  />
            <AppLink caption="Tyyliestäni"  />
            <AppLink caption="Ajanvaraus"  />
            <AppLink caption="Ota Yhteys"  />
        </div>

        <InfiniteCarrusel />


    </div>
  )
}

export default LandingPage;


//$bandida-primary-2:#ece9b0;
//$bandida-primary-5:#aa9364;



