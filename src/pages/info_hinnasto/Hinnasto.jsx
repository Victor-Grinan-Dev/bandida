import React from 'react'

const Hinnasto = () => {
  return (
    <div>
      <div className="info-container">
          <div className="text-container">
              <p className="subject">
                Tatuoinnit:
              </p>
              <ul>
                    <li><p>100e/h</p></li> 
                    <li><p>Walk- In kuvat alkaen 60e</p></li>
                    <li><p>koko päivä 500-600e</p></li>
                    <li><p>Varausmaksu 50-100e</p></li>
              </ul>
              <br />
              <p className="subject">Kestopigmentoinnit:</p>
              <ul>
                <li><p>150-250e</p></li>
                <li><p>Varausmaksu 50-100e</p></li>
              </ul>
              <br />
              <p className="subject">Maksutavat:</p>
              <ul>
                <li><p>Ensisijaisena käteinen</p></li>
                <li><p>MobilePay</p></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Hinnasto