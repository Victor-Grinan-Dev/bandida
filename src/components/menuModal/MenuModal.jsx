import React from 'react';
import AppLink from '../appLink/AppLink';
import { APPLINKS } from '../../settings/setings';
import { useDispatch } from 'react-redux';
import { toggleIsModal } from '../../app/appSlice';
import { useNavigate } from 'react-router-dom';

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
                <div className="link-wraper" key={idx} onClick={()=>handleLinks(link.linksTo)}>
                    <AppLink 
                        caption={link.caption} 
                        linkTo={link?.linksTo}
                        idLink={link.type === "a"}
                        extraStyle={{fontSize:"xx-large"}}
                    />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default MenuModal;