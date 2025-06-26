import PicLoader from '../picLoader/PicLoader';
import { useNavigate } from 'react-router-dom';

const Samples = () => {
    const navigate = useNavigate();
  return (
    <section className='samples ' id='samples '>
        <div className="pics-sample" onClick={()=>navigate("/gallery/mustavalkoinen-tatuointi")}>
            <div className="pic-container">
                <PicLoader pic="fav004" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav005" extraClass="pic-item"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav002" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav001" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav007" extraClass="pic-item"/>
            </div>
            <div className="pic-container">
                <PicLoader pic="fav003" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav006" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav008" extraClass="pic-item"/>
            </div>
            <div className="pic-container secundary">
                <PicLoader pic="fav009" extraClass="pic-item"/>
            </div>
        </div>

    </section>
  )
}

export default Samples;