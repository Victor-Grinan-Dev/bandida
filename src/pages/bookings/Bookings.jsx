import React from 'react';
import AppLink from '../../components/appLink/AppLink';

const Bookings = () => {
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