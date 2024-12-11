import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../../components/appLink/AppLink';
import PicLoader from '../../components/picLoader/PicLoader';


const Bookings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const copyToClipboard = (copiedText) => {

    navigator.clipboard.writeText(copiedText)
      // .then(() => alert("Phone number copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className='boobkings' style={{color:"white"}}>

        <div className="boobkings__tabs-bar" >

          <div className="link-wrapper">
              <AppLink caption="Takaisin" linkTo="/"/>
          </div>

        </div>

        <div className="booking-text">
          <h4 style={{color:"white"}}>Ajanvaraus:</h4>
          
        </div>


        <div className="content-wrapper">

          <div className="content-wrapper__column-a">
            <PicLoader pic="paula_medium" style={{objectFit:"cover"}} />
          </div>

          <div className="content-wrapper__column-b">

            <div className="content-item" >
              <p>Työskentelemme varausjärjestelmän parissa, mutta toistaiseksi varaukset voi tehdä sähköpostitse, puhelimitse tai WhatsAppin kautta. Kiitos.</p>
            </div>

            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fas fa-envelope some-icon"/>
                <p>paulaannelica.tattoo@gmail.com</p>
              </div>

              <i className="fa-regular fa-copy" onClick={()=>copyToClipboard("paulaannelica.tattoo@gmail.com")} />
            </div>
            
            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fas fa-phone some-icon"/>
                <span>Puh.</span>
                <p>+358 45 78392909</p>
              </div>

              <i className="fa-regular fa-copy" onClick={()=>copyToClipboard("+358 45 78392909")} />
            </div>

            <div className="content-item" >
              <div className='content-item__head'> 
                <i className="fab fa-whatsapp some-icon"/>
                <span>Whatsapp</span>
                <p>+358 45 78392909</p>
              </div>
              <i className="fa-regular fa-copy" onClick={()=>copyToClipboard("+358 45 78392909")} />

            </div>

          </div>

      </div>
      
    </div>
  )
}

export default Bookings;




