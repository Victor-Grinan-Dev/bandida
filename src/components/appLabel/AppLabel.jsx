import React from 'react';
import { translate } from '../../translation/translator';
import { useSelector } from 'react-redux';

const AppLabel = ({ caption, extraStyle }) => {
  const currentLang = useSelector((state) => state.app.currentLang);

  const isNotSpecialCharacter = str => /^[a-zA-Z0-9]+$/.test(str);

  if (!isNotSpecialCharacter(caption)) return (
    <div className='app-label' style={extraStyle}>
      {caption}
    </div>
  );

  return (
    <div className='app-label' style={extraStyle}>
      {translate(caption, currentLang)}
    </div>
  );
};

export default AppLabel;