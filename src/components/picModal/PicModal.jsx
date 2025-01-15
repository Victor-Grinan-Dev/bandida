import React from 'react';
import PicLoader from '../picLoader/PicLoader';


const PicModal = () => {
  return (
    <div className='picmodal'>
        <div className="close">X</div>
        PicModal
        <div className="pic-wrapper">
            <PicLoader />
        </div>
    </div>
  )
}

export default PicModal;