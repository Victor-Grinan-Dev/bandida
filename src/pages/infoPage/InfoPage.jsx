import React from 'react';
import AppLink from '../../components/appLink/AppLink';
const InfoPage = () => {

  return (
    <div className='info-page' style={{color:"white"}}>
      <div className="tabs-bar">
        <div className="link-wrapper">
        <AppLink caption="Takaisin" linkTo="/"/>
        <AppLink caption="tab name"/>
        <AppLink caption="tab name"/>
        <AppLink caption="tab name"/>
        <AppLink caption="tab name"/>
        </div>
      </div>
      <h4>Info</h4>
      <div className="info-container">
        <div className="title-container">title</div>
        <div className="text-container">content</div>
      </div>
      <div className="info-container">
        <div className="title-container">title</div>
        <div className="text-container">content</div>
      </div>
      <div className="info-container">
        <div className="title-container">title</div>
        <div className="text-container">content</div>
      </div>
      <div className="info-container">
        <div className="title-container">title</div>
        <div className="text-container">content</div>
      </div>

    </div>
  )
}

export default InfoPage;