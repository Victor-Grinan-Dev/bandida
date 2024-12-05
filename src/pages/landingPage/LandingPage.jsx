import React, { useEffect, useRef } from "react";
import PicLoader from '../../components/picLoader/PicLoader';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppLink from '../../components/appLink/AppLink';
import InfiniteCarrusel from '../../components/InfiniteCarrusel/InfiniteCarrusel';

const LandingPage = () => {
    const navBarRef = useRef(null);

    useEffect(() => {
        const navBar = navBarRef.current;
        const originalPosition = navBar.offsetTop;
    
        const handleScroll = () => {
          if (window.scrollY >= originalPosition) {
            navBar.classList.add("sticky");
          } else {
            navBar.classList.remove("sticky");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      
  return (
    <div className='landinpage'>
        <div className="contact-bar">
            <div className='contact-bar__corner' id='left'>
                <p>Porvoonkatu 14, 00510 Helsinki.</p>
                <p>Aukioloajat Ma-Pe 10:00-18:00</p>
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
                <p>MENU</p>
            </div>
        </div>
        <div className="logo-wrapper" >
            {/* <div className="studio">STUDIO</div> */}
            <div class="arc-text">
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>D</span>
                <span>I</span>
                <span>O</span>
            </div>
            <PicLoader pic="logo169inv"/>

            <div className="lower-title">
                <div className="tattoo">TATTOO</div>
                <div className="dot">&middot;</div>
                <div className="pmu">PMU</div>
            </div>
        </div>

        <div className="nav-bar" id="nav-bar" ref={navBarRef}>
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



