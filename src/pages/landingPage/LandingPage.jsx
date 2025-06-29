import { useEffect, useState  } from 'react';
import { HashLink } from "react-router-hash-link";
import PicLoader from '../../components/picLoader/PicLoader';
import { translate } from '../../translation/translator';

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
import LangPanel from '../../components/langPanel/LangPanel';

const LandingPage = () => {
    const isModal = useSelector(state => state.app.isModal);
    const currentLang = useSelector(state => state.app.currentLang);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setShowScrollTop(scrolled > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <LangPanel showLabel={false}/>
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

        <div className="sections">
            <Samples />
            <AboutMe />
            <Studio />
            <Footer />
        </div>
        
        { isModal && <MenuModal />}

        { showScrollTop && 
        
            <button onClick={scrollToTop} className="scroll-to-top">
                ↑ {translate("ylös", currentLang) }
                 
            </button>
        }

    </div>
  )
}
export default LandingPage;



