import AppLink from '../appLink/AppLink';
import { APPLINKS } from '../../settings/setings';
import { useDispatch } from 'react-redux';
import { toggleIsModal } from '../../app/appSlice';
import { useNavigate } from 'react-router-dom';
import InfoDropMenu from '../infoDropMenu/InfoDropMenu';
import LangPanel from '../langPanel/LangPanel';

const MenuModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLinks = (endpoint) => {
        dispatch(toggleIsModal());
        navigate(endpoint)
    }

  return (
    <div className='menu-modal'>
        <div className="links-wrapper">

            {APPLINKS.map((link, idx)=>(
                link.caption === "info" ? 
                <InfoDropMenu key={idx} extraStyle={{fontSize: "xx-large"}}/> 
                : <div className="link-wraper" key={idx} onClick={()=>handleLinks(link.linksTo)}>
                    <AppLink 
                        caption={link.caption} 
                        linkTo={link?.linksTo}
                        hashLink={link.type === "a"}
                        extraStyle={{fontSize:"xx-large"}}
                        translation={true}
                    />
                </div>
            ))}

            <LangPanel />

        </div>
    </div>
  )
}

export default MenuModal;