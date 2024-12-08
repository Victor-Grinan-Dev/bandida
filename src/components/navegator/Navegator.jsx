import React, { useEffect, useRef } from "react";
import AppLink from '../../components/appLink/AppLink';

const Navegator = () => {
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
    <div className="nav-bar" id="nav-bar" ref={navBarRef}>
      <div className="link-wrapper">
          <AppLink caption="Kotisivu"  />
          <AppLink caption="Info"  />
          <AppLink caption="Studio"  />
          <AppLink caption="Galleria"  />
          <AppLink caption="Tyyliestäni"  />
          <AppLink caption="Ajanvaraus"  />
          <AppLink caption="Ota Yhteys"  />
      </div>
  </div>
  )
}

export default Navegator;