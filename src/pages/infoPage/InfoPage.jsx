import AppLink from '../../components/appLink/AppLink';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import App from '../../App';

const InfoPage = ({ children }) => {      
  const curentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className='info-page' style={{color:"white"}}>
      <div className="link-wrapper">
        <AppLink caption={translate("kotiin", curentLang)} linkTo="/"/>

      </div>


      
      {children}
    </div>
  )
}

export default InfoPage;