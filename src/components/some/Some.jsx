import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Some = () => {
  return (
   <div className="some">
      {/* <a 
         className="some-item" 
         target="_blank" 
         rel="noopener noreferrer" 
         href="https://mail.google.com/mail/?view=cm&to=paulaannelica.tattoo@gmail.com"
         >
      <i className="fas fa-envelope some-icon"></i>
      </a> */}
      <Link to="/booking"><i className="fas fa-envelope some-icon"/></Link>
      <a target='blank' href='https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d'><i className="fab fa-facebook some-icon"></i></a>
      <a target='blank' href='https://www.instagram.com/paulaannelica.tattoo/'><i className="fab fa-instagram some-icon"></i></a>
      <a target='blank' href='https://www.tiktok.com/@paulaannelica.tattoo'><i className="fab fa-tiktok some-icon"></i></a>
      <Link to="/booking"><i className="fab fa-whatsapp some-icon"></i></Link>
   </div>
  )
}

export default Some;




