import React from 'react';
import PicLoader from '../picLoader/PicLoader';

const studioimg = {
    filter: "grayscale(100%) brightness(1.2) saturate(1.5) hue-rotate(45deg)",
}

const styles = {
    grayscale: {
      filter: "",
    },
    golden: {
      
    },
  };

const Studio = () => {
  return (
    <section className='studio' id='studio'>

      <div className="panel-1">

        <div className="text-area">
          <p>La Bandida Studio perustettiin vuonna 2024 pienyrityksenä. Studion perustaja, intohimoinen tatuoija, yhdistää luovuutensa ja yrittäjähenkensä tarjotakseen asiakkailleen ainutlaatuisia tatuointikokemuksia. Tämä startup-yritys keskittyy korkealaatuiseen työhön, asiakaslähtöisyyteen ja yksilöllisten visioiden toteuttamiseen. Studion tavoitteena on kasvaa ja tuoda lisää väriä ja merkitystä ihmisten elämään taiteen kautta.</p> 
          <br />
          <p>   Saapuminen Studiolle
                Studio sijaitsee aivan Linnanmäen kupeessa Alppilassa. 
                Raitiovaunut 3 ja 4 pysähtyy suoraan studion eteen. Pysäkki on ”Alppila”.
                Sturenkadulta kulkee useita raitiovaunuja ja busseja ja siitä kävelee pari minuuttia studiolle.
                Pasilasta matkaa on 2km ja bussi nro 23 tulee Pasilasta suoraan Sturenkadulle. 
                Autolle pysäköintipaikkoja on paljon kadun varsilla ja on ilmaista la-su, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadun varret. 
            </p>
        </div>

      </div>

      <div className="panel-2">

        <div className="profile-pic">
          <PicLoader pic="studio" style={studioimg}/>
        </div>
        <div className='omistaja'>Studio</div>

      </div>

    </section>
  )
}

export default Studio;