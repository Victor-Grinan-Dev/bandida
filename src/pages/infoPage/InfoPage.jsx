import AppLink from '../../components/appLink/AppLink';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import App from '../../App';

const InfoPage = ({ children }) => {
  const location = useLocation();          
  const [tab, setTab] = useState(location.state?.toTab ?? 'ennen');
  const { pathname } = useLocation();
  const curentLang = useSelector((state) => state.app.currentLang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, tab]);

  const fullTitle = {
    ennen:"ennen tatuointia",
    hoito:"hoito-ohjeet",
    rajoitukset:"rajoitukset",
    saapuminen:"saapuminen studiolle",
    varaus:"ajanvaraus",
    hinnasto:"hinnasto",
  }

  const handleTabs = (tab) => {
    setTab(tab);
  };



  return (
    <div className='info-page' style={{color:"white"}}>
      <AppLink />
      {children}
    </div>
  )
}

export default InfoPage;