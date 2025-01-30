import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <HashLink to={`${linkTo}`}> { caption } </HashLink>
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