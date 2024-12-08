import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import AppLink from '../appLink/AppLink';

const MyStyle = () => {
  return (
    <section className='my-style' id='my-style'>
        <div className="pics-sample">
            <div className="pic-container">
                <PicLoader pic="pic001"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="pic002"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="pic003"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="pic004"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="pic005"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="pic006"/>
            </div>
        </div>

        <div className='app-link-container'>
            <AppLink caption="katso Lisää kuvia Galleriasta" linkTo="/gallery"/>
        </div>

        <div className="my-style-text">
            <h3>Tyyli:</h3>
            <p>Tatuoinneissa näkyy pääsääntöisesti mustaharmaa realismi mutta värikuvat ovat yhtä lähellä sydäntä, samoin kuin pienemmät sirot kuvatkin. Kannattaa aina kysyä jos jokin muunlainen haluamasi aihe tai tyyli olisi mahdollista toteuttaa, Paula on avoin kaikenlaisille ideoille.
            </p>
        </div>

    </section>
  )
}

export default MyStyle;