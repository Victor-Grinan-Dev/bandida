import React from 'react';

const AppButton = ({caption, fx}) => {
  return (
    <button className='app-btn' onClick={fx}>{caption}</button>
  )
}

export default AppButton;