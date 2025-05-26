import AppLink from '../../components/appLink/AppLink';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import InfoDropMenu from '../../components/infoDropMenu/InfoDropMenu';

const InfoPage = ({ children }) => {      
  const curentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className='info-page' style={{color:"white"}}>
      <div className="link-wrapper">
        <AppLink caption={translate("kotiin", curentLang)} linkTo="/"/>
        <InfoDropMenu />
      </div>


      
      {children}
    </div>
  )
}

export default InfoPage;