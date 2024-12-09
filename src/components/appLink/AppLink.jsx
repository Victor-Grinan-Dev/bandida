import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = (props) => {
    const {linkTo, caption, idLink=false, active=false} = props;

    if(idLink){
      return (
        <div className={`app-link ${active && "active"}`}>
            <a href={linkTo}> { caption } </a>
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