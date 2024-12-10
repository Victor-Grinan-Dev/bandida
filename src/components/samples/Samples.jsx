import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import { useNavigate } from 'react-router-dom';

const Samples = () => {
    const navigate = useNavigate();
  return (
    <section className='samples ' id='samples '>
        <div className="pics-sample" onClick={()=>navigate("/gallery")}>
            <div className="pic-container">
                <PicLoader pic="fav001"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav002"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav003"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav004"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav005"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav006"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav007"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav008"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav009"/>
            </div>
        </div>

    </section>
  )
}

export default Samples;