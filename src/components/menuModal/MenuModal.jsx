import React from 'react';
import AppLink from '../appLink/AppLink';
import { APPLINKS } from '../../settings/setings';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsModal } from '../../app/appSlice';
import { useNavigate } from 'react-router-dom';
import AppButton from '../appButton/AppButton';
import AppLabel from '../appLabel/AppLabel';
import { setCurrentLang } from '../../app/appSlice';

const MenuModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const currentLang = useSelector((state) => state.app.currentLang);


    const handleLinks = (endpoint) => {
        dispatch(toggleIsModal());
        navigate(endpoint)
    }

  return (
    <div className='menu-modal'>
        <div className="links-wrapper">

            {APPLINKS.map((link, idx)=>(
                <div className="link-wraper" key={idx} onClick={()=>handleLinks(link.linksTo)}>
                    <AppLink 
                        caption={link.caption} 
                        linkTo={link?.linksTo}
                        idLink={link.type === "a"}
                        extraStyle={{fontSize:"xx-large"}}
                    />
                </div>
            ))}
                <div className="link-wraper">
                    <AppLabel
                        caption={"Muu Kieli:"} 
                        extraStyle={{fontSize:"xx-large"}}
                    />

                    <div className="options-wrapper">
                        { currentLang !== "fi" && <AppButton
                            caption={"Suomi"} 
                            lang={"fi"}
                            fx={()=>dispatch(setCurrentLang("fi"))}
                            extraStyle={{fontSize:"xx-large"}}
                        />        }            
                        { currentLang !== "en" && <AppButton
                            caption={"Suomi"} 
                            lang={"en"}
                            fx={()=>dispatch(setCurrentLang("en"))}
                            extraStyle={{fontSize:"xx-large"}}
                        />}
                        { currentLang !== "es" && <AppButton
                            caption={"Suomi"} 
                            lang={"es"}
                            fx={()=>dispatch(setCurrentLang("es"))}
                            extraStyle={{fontSize:"xx-large"}}
                        />}
                    </div>

                </div>
        </div>
    </div>
  )
}

export default MenuModal;