import React from 'react';
import { Link } from 'react-router-dom';


const AppLink = (props) => {
    const {linkTo, caption, idLink=false, active=false} = props;

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if(idLink){
      return (
        <div className={`app-link ${active && "active"}`}>
            <a href={linkTo} onClick={() => scrollToSection(linkTo)}> { caption } </a>
        </div>
      )
    }

    return (
      <div className={`app-link ${active && "active"}`}>
          <Link to={linkTo}> { caption } </Link>
      </div>
    )
}

export default AppLink;