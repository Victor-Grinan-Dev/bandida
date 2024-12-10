import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../../components/appLink/AppLink';


const Bookings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
        <div className="tabs-bar">
          <div className="link-wrapper">
              <AppLink caption="Takaisin" linkTo="/"/>
          </div>
      </div>
      <h4 style={{color:"white"}}>Bookings</h4>
    </div>
  )
}

export default Bookings;