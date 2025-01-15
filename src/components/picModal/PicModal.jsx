import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import { togglePicModal } from '../../app/appSlice';
import { useDispatch } from 'react-redux';

const PicModal = (props) => {
    const {pic} = props;
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(togglePicModal());
    }
  return (
    <div className='picmodal'>
        <div className="close" onClick={handleClose}>X</div>
        PicModal
        <div className="pic-wrapper">
            <PicLoader pic={pic}/>
        </div>
    </div>
  )
}

export default PicModal;