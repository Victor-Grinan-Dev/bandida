import React from "react";
import PicLoader from '../../components/picLoader/PicLoader';

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
// import AppLabel from "../../components/appLabel/AppLabel";

// const keywords = {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important",
    
//         fontSize: "25px",
//         fontWeight: "200",
//         color: "$bandida-golden-6",
    

// }

const LandingPage = () => {
    const isModal = useSelector(state => state.app.isModal);
    
  return (
    <div className='landinpage' id="landingpage">
        <section className="landinpage-banner" style={{width:"100%"}}>
            <div className="contact-bar">

                <div className='contact-bar__corner' id='left'>
                    <h1 style={{fontSize:"30px"}}><span>Inky</span><span>11&reg;</span></h1>
                    <HashLink to={`${"#footer"}`} style={{textDecoration:"none", color:"$bandida-golden-6", fontSize:"19px"}} className="address">Porvoonkatu 14 00510 Helsinki.</HashLink>
                </div>

                <Some />

                <div className='contact-bar__corner' id='right'>

                </div>

            </div>

            <Hamburger />

            <div className="logo-wrapper" >
                <PicLoader pic="mainLogo" xtraStyle={{ width: "50vw", maxWidth: "250px"}}/>

                {/* <div className="keywords">
                    <h1>
                        <AppLabel extraStyle={keywords} 
                        caption="tatuoinnit"
                        />
                    </h1>

                    <AppLabel extraStyle={keywords} caption={"&"} />

                    <h1>
                        <AppLabel extraStyle={keywords} 
                        caption="kestopigmentointi"
                        />
                    </h1>
                    <div className="pmu" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"0"}}>
                        <AppLabel extraStyle={{...keywords, padding:"5px 0"}} caption={"("} />
                        <h1><AppLabel extraStyle={{...keywords, padding:"5px 0"}} caption={"PMU"} /></h1>
                        <AppLabel extraStyle={{...keywords, padding:"5px 0"}} caption={")"} />
                    </div>
                </div> */}

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



