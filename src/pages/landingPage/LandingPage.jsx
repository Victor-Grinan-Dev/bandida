import React from "react";
import PicLoader from '../../components/picLoader/PicLoader';
// import "@fortawesome/fontawesome-free/css/all.min.css";

/*redux*/
import { useSelector } from "react-redux";

/* COMPONENTS */
import Navegator from "../../components/navegator/Navegator";
import Hamburger from "../../components/hamburger/Hamburger";
import Some from "../../components/some/Some";
import AboutMe from "../../components/aboutMe/AboutMe";
import Studio from "../../components/studio/Studio";
import Samples from "../../components/samples/Samples";
import Footer from "../../components/footer/Footer";
import MenuModal from "../../components/menuModal/MenuModal";
import { HashLink } from "react-router-hash-link";

const LandingPage = () => {
    const isModal = useSelector(state => state.app.isModal);
    
  return (
    <div className='landinpage' id="landingpage">
        <section className="landinpage-banner" style={{width:"100%"}}>
            <div className="contact-bar">

                <div className='contact-bar__corner' id='left'>
                    <h1 style={{fontSize:"30px"}}>Inky11&reg;</h1>
                    <HashLink to={`${"#footer"}`} style={{textDecoration:"none", color:"$bandida-golden-6", fontSize:"19px"}} className="address">Porvoonkatu 14 00510 Helsinki.</HashLink>
                </div>

                <Some />

                <div className='contact-bar__corner' id='right'>
                    <div>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>

            </div>

            <Hamburger />

            <div className="logo-wrapper" >
                <PicLoader pic="mainLogo" xtraStyle={{ width: "50vw", maxWidth: "250px"}}/>
            </div>

            <Navegator />
        </section>

        <Samples />
        <AboutMe />
        <Studio />
        <Footer />
        { isModal && <MenuModal />}
    </div>
  )
}
export default LandingPage;



