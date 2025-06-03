import { useEffect, useRef, useState } from "react";
import AppLink from "../appLink/AppLink"

const InfoDropMenu = (props) => {
    const {active=false, extraStyle} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(false);
    const linkRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
    const handleScroll = () => {
        if (linkRef.current) {
            const rect = linkRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            setIsAtTop(rect.top <= 0 || rect.bottom + 150 > viewportHeight); 
        }
    };

        window.addEventListener("scroll", handleScroll);
 
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppLink fx={toggleMenu} translation={false}>
            <span
                ref={linkRef}
                className={`app-link ${active && "active"} ${isAtTop ? "at-top" : ""}`}
                style={extraStyle}
            >
                    info    
            </span>
            {isOpen && (
                <div
                    className="info-drop-menu"
                    style={{

                        top: isAtTop ? "auto" : "100%",
                        bottom: isAtTop ? "100%" : "auto",
                        whiteSpace: "nowrap",
                        backgroundColor: "black",
                        padding: "2px",
                    }}
                >                    
                    <AppLink caption="artist" linkTo="/artist" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="studio" linkTo="/studio" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="ajanvaraus" linkTo="/info-ajanvaraus" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="ennen tatuointia" linkTo="/ennen-tatuointia" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="tatuoinnin hinta" linkTo="/tatuoinnin-hinta" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="tatuoinnin hoito" linkTo="/tatuoinnin-hoito" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="kestopigmentointi" linkTo="/kestopigmentointi-ja-microblading" extraStyle={extraStyle} translation={true}/>
                    <AppLink caption="ideat tatuointiin" linkTo="/ideat-tatuointiin" extraStyle={extraStyle} translation={true}/>
                </div>
            )}
        </AppLink>
    )
}

export default InfoDropMenu