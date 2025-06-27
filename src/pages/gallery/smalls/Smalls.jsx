
import PicLoader, { smalls } from '../../../components/picLoader/PicLoader';
import { useState } from "react";
import AppButton from "../../../components/appButton/AppButton";

const Smalls = () => {
    const pics = smalls;
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMore = () => {
        setVisibleCount(prev => prev + 5);
    };
  return (
    <div>
        <div className="collage-wrapper" >
        
            <div className="collage">
            {[...pics].slice(0, visibleCount).map((pic, idx) => (
                <div className="img-wrapper" id={pic} key={idx}>
                <PicLoader pic={pic} idx={idx} seoAlt={"Tattoo design by Inkky11 - custom small tatoo " + idx}/>
                </div>
            ))}
        </div>

        </div>
            {visibleCount < pics.length && (
            <div style={{ textAlign: 'center', margin: '20px' }}>
            <AppButton caption="lataa lisää" fx={loadMore} />
        </div>
        )}
    </div>
  )
}

export default Smalls;