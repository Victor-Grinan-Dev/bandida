import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section className='contact homepage-section' id='contact'>
        <div className="contact-container">

            <div className='title'>
                <h3 className='owner'>Paula Anneli</h3>
                <p className='ampersand'>&</p>
                <h1 className='company'>Bandida's Tattoo</h1>
                <p className='address'>Porvonkatu 14</p>
            </div>

            <div className="contact-some">
            
                <div className='contact-some-container'>
                    <i className="fab fa-whatsapp some-icon"></i>
                </div>
                
                
                <div className='contact-some-container'>
                    <i className="fab fa-youtube contact-some-icon"></i>
                </div>
                
                
                <div className='contact-some-container'>
                    <i className="fas fa-envelope contact-some-icon"></i>
                </div>
                
                
                <div className='contact-some-container'>
                    <i className="fab fa-facebook contact-some-icon"></i>
                </div>
                
                
                <div className='contact-some-container'>
                    <i className="fab fa-instagram contact-some-icon"></i>
                </div>
                
                
                <div className='contact-some-container'>
                    <i className="fab fa-tiktok contact-some-icon"></i>
                </div>
        
            </div>

            <p>All rights &reg; Reserved {new Date().getFullYear()}</p>

        </div>
  </section>
  )
}

export default Contact