import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const AppLink = (props) => {
    const {linkTo, caption, idLink=false, active=false} = props;

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