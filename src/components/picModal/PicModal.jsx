import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import { togglePicModal } from '../../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const PicModal = () => {
    const dispatch = useDispatch();
    const pic = useSelector(state => state.picModalCurrentPic);

    const handleClose = () => {
        dispatch(togglePicModal());
    }

  return (
    <div className='picmodal'>
        <div className="pic-wrapper">
          <div className="close" onClick={handleClose}>X</div>
          <PicLoader pic={pic}/>
        </div>
    </div>
  )
}

export default PicModal;