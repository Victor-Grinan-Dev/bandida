import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const AppLink = (props) => {
    const {linkTo, caption, idLink=false, active=false, extraStyle} = props;

    if(idLink){
      return (
        <div className={`app-link ${active && "active"}`} >
            <HashLink to={`${linkTo}`} style={extraStyle}> { caption } </HashLink>
        </div>
      )
    }

    return (
      <div className={`app-link ${active && "active"}`}>
          <Link aria-label={`Go To ${caption}`} to={linkTo} style={extraStyle}> { caption } </Link>
      </div>
    )
}

export default AppLink;