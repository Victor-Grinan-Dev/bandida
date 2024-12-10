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
        <h4>Bookings</h4>
        <div className="tabs-bar">
        <div className="link-wrapper">
            <AppLink caption="Takaisin" linkTo="/"/>
        </div>
      </div>
    </div>
  )
}

export default Bookings;