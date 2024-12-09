import React from "react";
import PicLoader from '../../components/picLoader/PicLoader';
import "@fortawesome/fontawesome-free/css/all.min.css";

/*redux*/
import { useSelector } from "react-redux";

/* COMPONENTS */
import Navegator from "../../components/navegator/Navegator";
import Hamburger from "../../components/hamburger/Hamburger";
import Some from "../../components/some/Some";
import AboutMe from "../../components/aboutMe/AboutMe";
import Samples from "../../components/samples/Samples";
import Footer from "../../components/footer/Footer";
import MenuModal from "../../components/menuModal/MenuModal";

const LandingPage = () => {
    const isModal = useSelector(state => state.app.isModal);
    
  return (
    <div className='landinpage' id="landingpage">
        <section className="landinpage-banner" style={{width:"100%"}}>
            <div className="contact-bar">

                <div className='contact-bar__corner' id='left'>
                    <h1>Studio La Bandida&reg;</h1>
                    <p className="address">Porvoonkatu 14 00510 Helsinki.</p>

                </div>

                <Some />

                <div className='contact-bar__corner' id='right'>
                    <div>
                        <span class="material-symbols-outlined" style={{fontSize:'40px',}}>
                            settings
                        </span>
                    </div>
                </div>

            </div>

            <Hamburger />

            <div className="logo-wrapper" >
                <PicLoader pic="logo169inv"/>
            </div>

            <Navegator />
        </section>

        <Samples />
        <AboutMe />
        <Footer />
        { isModal && <MenuModal />}
    </div>
  )
}

export default LandingPage;



