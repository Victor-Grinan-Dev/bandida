import AppLink from '../../components/appLink/AppLink';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';
import InfoDropMenu from '../../components/infoDropMenu/InfoDropMenu';

const InfoPage = (props) => {      
const {children, hashLink=false, caption="kotiin", linkTo="/"} = props;
  const curentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className='info-page' style={{color:"white"}}>
      <div className="link-wrapper">
        <AppLink caption={translate(caption, curentLang)} linkTo={linkTo} hashLink={hashLink} />
        <InfoDropMenu />
      </div>



      {children}
    </div>
  )
}

export default InfoPage;