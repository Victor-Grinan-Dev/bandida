import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = (props) => {
    const {linkTo, caption, idLink} = props;
  return (
    <div className='app-link'>
        {
        idLink ?
        
            <a ref={`#${linkTo}`} >{ caption }</a>
            :<Link to={linkTo}> { caption } </Link>
        }
    </div>
  )
}

export default AppLink;