import React from 'react';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = ({caption, extraStyle}) => {
    const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className='app-label' style={extraStyle}>{translate(caption, currentLang)}</div>
  )
}

export default AppLabel