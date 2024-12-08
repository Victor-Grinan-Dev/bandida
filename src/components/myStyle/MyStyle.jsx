import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import AppLink from '../appLink/AppLink';

const MyStyle = () => {
  return (
    <section className='my-style' id='my-style'>
        <div className="pics-sample">
            <div className="pic-container ">
                <PicLoader pic="fav001"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav002"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav003"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav004"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav005"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav006"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav007"/>
            </div>
            <div className="pic-container ">
                <PicLoader pic="fav008"/>
            </div>
        </div>

        <div className='app-link-container'>
            <AppLink caption="Katso Lisää kuvia galleriasta" linkTo="/gallery"/>
        </div>


    </section>
  )
}

export default MyStyle;