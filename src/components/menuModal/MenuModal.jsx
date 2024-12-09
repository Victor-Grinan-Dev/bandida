import React from 'react';
import AppLink from '../appLink/AppLink';
import { APPLINKS } from '../../settings/setings';
import { useDispatch } from 'react-redux';
import { toggleIsModal } from '../../app/appSlice';

const MenuModal = () => {
    const dispatch = useDispatch();

  return (
    <div className='menu-modal'>
        <div className="links-wrapper">

            {APPLINKS.map((link, idx)=>(
                <div className="link-wraper" key={idx} onClick={()=>dispatch(toggleIsModal())}>
                    <AppLink 
                        caption={link.caption} 
                        linkTo={link.linkTo}
                    />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default MenuModal;