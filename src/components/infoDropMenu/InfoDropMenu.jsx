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
        <AppLink fx={toggleMenu}>
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
                    <AppLink caption="ajanvaraus" linkTo="/info-ajanvaraus" extraStyle={extraStyle}/>
                    <AppLink caption="ennen-tatuointia" linkTo="/ennen-tatuointia" extraStyle={extraStyle}/>
                    <AppLink caption="tatuoinnin-hinta" linkTo="/tatuoinnin-hinta" extraStyle={extraStyle}/>
                    <AppLink caption="tatuoinnin-hoito" linkTo="/tatuoinnin-hoito" extraStyle={extraStyle}/>
                </div>
            )}
        </AppLink>
    )
}

export default InfoDropMenu