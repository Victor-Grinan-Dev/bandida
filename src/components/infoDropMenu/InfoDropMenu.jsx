import { useEffect, useRef, useState } from "react";
import AppLink from "../appLink/AppLink";
import { useSelector } from "react-redux";
import { translate } from "../../translation/translator";
import { capitalize } from "../../helper/capitalizer";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const InfoDropMenu = ({ active = false, extraStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const wrapperRef = useRef(null); // full wrapper ref
  const currentLang = useSelector((state) => state.app.currentLang);

  const dropdownRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const toggleMenu = (e) => {
    e.stopPropagation(); // prevent click from triggering outside click
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
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
        <div ref={wrapperRef} style={{ position: "relative", display: "inline-block" }}>
        <span
            onClick={toggleMenu}
            className={`app-link ${active ? "active" : ""} ${isAtTop ? "at-top" : ""}`}
            style={extraStyle}
        >
            {capitalize(translate("artikkelit", currentLang))}
        </span>

        {isOpen && (
            <div
            ref={dropdownRef}
            className="info-drop-menu"
            style={{
                position: "absolute",
                top: isAtTop ? "auto" : "100%",
                bottom: isAtTop ? "100%" : "auto",
                padding: "2px",
                whiteSpace: "nowrap",
            }}
            >
            <AppLink caption="Paula Annelica" linkTo="/paula-annelica" extraStyle={extraStyle} translation />
            <AppLink caption="studio" linkTo="/studio" extraStyle={extraStyle} translation />
            <AppLink caption="ajanvaraus" linkTo="/info-ajanvaraus" extraStyle={extraStyle} translation />
            <AppLink caption="ennen tatuointia" linkTo="/ennen-tatuointia" extraStyle={extraStyle} translation />
            <AppLink caption="tatuoinnin hinta" linkTo="/hinnat" extraStyle={extraStyle} translation />
            <AppLink caption="tatuoinnin hoito" linkTo="/tatuoinnin-hoito" extraStyle={extraStyle} translation />
            <AppLink caption="kestopigmentointi" linkTo="/kestopigmentointi-ja-microblading" extraStyle={extraStyle} translation />
            <AppLink caption="ideat tatuointiin" linkTo="/ideat-tatuointiin" extraStyle={extraStyle} translation />
            </div>
        )}
        </div>
    </AppLink>
  );
};

export default InfoDropMenu;