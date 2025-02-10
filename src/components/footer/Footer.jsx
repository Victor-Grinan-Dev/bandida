import React from 'react';
import Some from '../some/Some';

const mapStyle = {
  border:0,
}

const Footer = () => {
  return (
    <section className='footer' id='footer'>

        <div className="contact-bar">

          <div className='contact-bar__corner' id='left'>
              <p className="address">Porvoonkatu 14, 00510 Helsinki.</p>
          </div>

          <Some />

          <div className='contact-bar__corner' id='right'>
              <p className="address-right">Porvoonkatu 14, 00510 Helsinki.</p>
          </div>

        </div>

        <div className="map-container" id='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4014308678427!2d24.94268641279049!3d60.19063927493875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920986bec4d537%3A0x347c1a135d40f221!2sPorvoonkatu%2014%2C%2000510%20Helsinki!5e0!3m2!1sen!2sfi!4v1733645145790!5m2!1sen!2sfi" width="90%" height="100%" style={mapStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="La Bandida"></iframe>
        </div>

        <div className="legal">
          <p>All rights &reg; Reserved {new Date().getFullYear()} Inky11&reg;</p>
        </div>
    </section>
  )
}

export default Footer;

