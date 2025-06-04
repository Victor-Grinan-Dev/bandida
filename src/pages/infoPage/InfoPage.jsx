import AppLink from '../../components/appLink/AppLink';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import InfoDropMenu from '../../components/infoDropMenu/InfoDropMenu';
import { useEffect } from 'react';
import Some from '../../components/some/Some';
import Legal from '../../components/legal/Legal';

const InfoPage = (props) => {      
  const {children,   
    linkTo="/",
  } = props;

  const curentLang = useSelector((state) => state.app.currentLang);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='info-page' >
      <div className="link-wrapper">

        <AppLink caption={translate("kotiin", curentLang)} linkTo={linkTo} />
    
        <InfoDropMenu />
      </div>

      {children}
      <div className="seudo-footer">
       
        <p> Say hello!</p>
        <br />
        
        <Some />
        <br />
        <Legal />

      </div>
    </div>
  )
}

export default InfoPage;