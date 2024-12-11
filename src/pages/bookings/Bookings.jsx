import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../../components/appLink/AppLink';


const Bookings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{color:"white"}}>

        <div className="tabs-bar" >

          <div className="link-wrapper">
              <AppLink caption="Takaisin" linkTo="/"/>
          </div>

          <h4 style={{color:"white"}}>Bookings</h4>

          <div className="content-wrapper">

          <div className="content-wrapper__column-a">
            some image i guess
          </div>

          <div className="content-wrapper__column-b">
            <div className="content-item">
              <span>Icon</span>
              <p>content text</p>
            </div>

            <div className="content-item">
              <span>Icon</span>
              <p>content text </p>
            </div>
          </div>


            
          </div>
      </div>
      
    </div>
  )
}

export default Bookings;