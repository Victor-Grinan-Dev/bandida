import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = (props) => {
    const {linkTo, caption, idLink=false} = props;

    if(idLink){
      return (
        <div className='app-link'>
            <a href={linkTo}> { caption } </a>
        </div>
      )
    }
  return (
    <div className='app-link'>
        <Link to={linkTo}> { caption } </Link>
    </div>
  )
}

export default AppLink;