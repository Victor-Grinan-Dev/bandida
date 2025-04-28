import React from 'react';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppButton = ({caption, fx, extraStyle, lang}) => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <button className='app-btn' onClick={fx} style={extraStyle}>{translate(caption, lang || currentLang)}</button>
  )
}

export default AppButton;