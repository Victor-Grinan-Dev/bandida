import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PicLoader from '../../components/picLoader/PicLoader';
import InfoPage from '../infoPage/InfoPage';
import ReadMore from '../../components/readMore/ReadMore';

const Bookings = () => {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const copyToClipboard = (copiedText) => {
    navigator.clipboard.writeText(copiedText)
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const changeIconColor = (item) => {
    setCopied(item)
  }

  const handleClicked = (text, item) => {
    copyToClipboard(text)
    changeIconColor(item)
  }

  return (
    <InfoPage >
      <div className="single-page bookings-page" >
        <div className="title-box">
          <h1>Ajanvaraus</h1>
        </div>
        <div className="columns-wrapper">
            <div className="left-column">
              <PicLoader pic="paula_medium" picModalOn={false} style={{objectFit:"cover"}} seoAlt={"Inkky11 tattoo artist Paula Annelica"} />
            </div>
            <div className="right-column">

              <div className="content-wrapper">

                <div className="content-wrapper__column-b">
                  
                  <p>Ajanvaraukset viestillä sähköpostin, instagramin tai facebookin kautta.</p>
                  <ReadMore caption="Luethan ajanvaraus ohjeet" linkTo="/info-ajanvaraus" />
                  <br />
                  
                  <div className="content-item" >
                    <div className='content-item__head'>              
                      <i className="fas fa-envelope some-icon"/>
                      <p>paulaannelica.tattoo@gmail.com</p>
                    </div>

                    <div className="copy-icon-wrapper">
                      <i className={`fa-regular fa-copy ${copied === "email" && "active"}`} onClick={()=>handleClicked("paulaannelica.tattoo@gmail.com", "email")} />
                    </div>
                  </div>

                  <div className="content-item" >
                    <div className='content-item__head'>              
                      <i className="fab fa-facebook some-icon"></i>
                      <a className="bookings-link" target='blank' href="https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d"><p>Paula Annelica Tattoo</p></a>
                    </div>

                    <div className="copy-icon-wrapper">
                      <i className={`fa-regular fa-copy ${copied === "fb" && "active"}`} onClick={()=>handleClicked("https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d", "fb")} />
                    </div>
                  </div>

                  <div className="content-item" >
                    <div className='content-item__head'>              
                      <i className="fab fa-instagram some-icon"></i>
                      <a className="bookings-link" target='blank' href="https://www.instagram.com/paulaannelica.tattoo"><p>paulaannelica.tattoo</p></a>
                    </div>

                    <div className="copy-icon-wrapper">
                      <i className={`fa-regular fa-copy ${copied === "ig" && "active"}`} onClick={()=>handleClicked("https://www.instagram.com/paulaannelica.tattoo", "ig")} />
                    </div>
                  </div>
      

                </div>
            </div>
          </div>
        </div>
      </div>
    </InfoPage> 
  )
}

export default Bookings;




/**
     <div className='bookings' style={{color:"white"}}>

        <div className="bookings__tabs-bar" >

          <div className="link-wrapper">
              <AppLink caption="kotiin" linkTo="/"/>
          </div>

        </div>

        <div className="booking-text">
          <h4 style={{color:"white"}}>{translate("ajanvaraus", currentLang)}:</h4>
        </div>


        <div className="content-wrapper">

          <div className="content-wrapper__column-b">
            <div className="content-item" >
              <p>Ajanvaraukset viestillä sähköpostin, instagramin tai facebookin kautta. Luethan <Link className='bookings-link-highlight' aria-label="info-osiosta" to='/info-ajanvaraus' state={{ toTab: 'varaus' }} >  info-osiosta </Link> ajanvaraus ohjeet</p>
            </div>

            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fas fa-envelope some-icon"/>
                <p>paulaannelica.tattoo@gmail.com</p>
              </div>

              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "email" && "active"}`} onClick={()=>handleClicked("paulaannelica.tattoo@gmail.com", "email")} />
              </div>
            </div>

            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fab fa-facebook some-icon"></i>
                <a className="bookings-link" target='blank' href="https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d"><p>Paula Annelica Tattoo</p></a>
              </div>

              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "fb" && "active"}`} onClick={()=>handleClicked("https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d", "fb")} />
              </div>
            </div>

            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fab fa-instagram some-icon"></i>
                <a className="bookings-link" target='blank' href="https://www.instagram.com/paulaannelica.tattoo"><p>paulaannelica.tattoo</p></a>
              </div>

              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "ig" && "active"}`} onClick={()=>handleClicked("https://www.instagram.com/paulaannelica.tattoo", "ig")} />
              </div>
            </div>
 

          </div>

      </div>
      
    </div>
 */