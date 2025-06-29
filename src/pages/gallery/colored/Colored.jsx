import Gallery from "../Gallery";
import PicLoader, { colors } from '../../../components/picLoader/PicLoader';
import { useState } from "react";
import AppButton from "../../../components/appButton/AppButton";

const Colored = () => {
    const pics = colors;
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMore = () => {
        setVisibleCount(prev => prev + 5);
    };
  return (
    <Gallery>
        <div className="collage-wrapper" >
        
            <div className="collage">
            {[...pics].slice(0, visibleCount).map((pic, idx) => (
                <div className="img-wrapper" id={pic} key={idx}>
                <PicLoader pic={pic} idx={idx} seoAlt={"Tattoo design by Inkky11 - colored custom " + idx}/>
                </div>
            ))}
        </div>

        </div>
            {visibleCount < pics.length && (
            <div style={{ textAlign: 'center', margin: '20px' }}>
            <AppButton caption="lataa lisää" fx={loadMore} />
        </div>
        )}
    </Gallery>

  )
}

export default Colored;