import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Some = () => {
  return (
   <div className="some">
      <Link to="/booking" aria-label="Book time with us"><i className="fas fa-envelope some-icon"/></Link>
      <a target='blank' aria-label="Visit us in Facebook" href='https://www.facebook.com/profile.php?id=61550417768685&mibextid=LQQJ4d'><i className="fab fa-facebook some-icon"></i></a>
      <a target='blank' aria-label="Visit us in Instagram" href='https://www.instagram.com/paulaannelica.tattoo/'><i className="fab fa-instagram some-icon"></i></a>
      <a target='blank' aria-label="Visit us in Tiktok" href='https://www.tiktok.com/@paulaannelica.tattoo'><i className="fab fa-tiktok some-icon"></i></a>
      <Link to="/booking" aria-label="Book time with us"><i className="fab fa-whatsapp some-icon"></i></Link>
   </div>
  )
}

export default Some;




