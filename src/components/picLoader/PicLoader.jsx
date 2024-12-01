import React from 'react';

import pic001 from "../../assets/images/all pics/pic001.webp";
import pic002 from "../../assets/images/all pics/pic002.jpg";
import pic003 from "../../assets/images/all pics/pic003.jpg";
import pic004 from "../../assets/images/all pics/pic004.jpg";
import pic005 from "../../assets/images/all pics/pic005.jpg";
import pic006 from "../../assets/images/all pics/pic006.jpg";
import pic007 from "../../assets/images/all pics/pic007.jpg";
import pic008 from "../../assets/images/all pics/pic008.jpg";
import pic009 from "../../assets/images/all pics/pic009.jpg";
import pic010 from "../../assets/images/all pics/pic010.jpg";
import pic011 from "../../assets/images/all pics/pic011.jpg";
import pic012 from "../../assets/images/all pics/pic012.jpg";
import pic013 from "../../assets/images/all pics/pic013.jpg";
import pic014 from "../../assets/images/all pics/pic014.jpg";
import pic015 from "../../assets/images/all pics/pic015.jpg";
import pic016 from "../../assets/images/all pics/pic016.jpg";
import pic017 from "../../assets/images/all pics/pic017.jpg";
import pic018 from "../../assets/images/all pics/pic018.jpg";
import pic019 from "../../assets/images/all pics/pic019.jpg";
import pic020 from "../../assets/images/all pics/pic020.jpg";
import pic021 from "../../assets/images/all pics/pic021.jpg";
import pic022 from "../../assets/images/all pics/pic022.jpg";
import pic023 from "../../assets/images/all pics/pic023.jpg";
import pic024 from "../../assets/images/all pics/pic024.jpg";
import pic025 from "../../assets/images/all pics/pic025.jpg";
import pic026 from "../../assets/images/all pics/pic026.jpg";
import pic027 from "../../assets/images/all pics/pic027.jpg";
import pic028 from "../../assets/images/all pics/pic028.jpg";
import pic029 from "../../assets/images/all pics/pic029.jpg";

const pictures = {
    pic001:pic001,
    pic002:pic002,
    pic003:pic003,
    pic004:pic004,
    pic005:pic005,
    pic006:pic006,
    pic007:pic007,
    pic008:pic008,
    pic009:pic009,
    pic010:pic010,
    pic011:pic011,
    pic012:pic012,
    pic013:pic013,
    pic014:pic014,
    pic015:pic015,
    pic016:pic016,
    pic017:pic017,
    pic018:pic018,
    pic019:pic019,
    pic020:pic020,
    pic021:pic021,
    pic022:pic022,
    pic023:pic023,
    pic024:pic024,
    pic025:pic025,
    pic026:pic026,
    pic027:pic027,
    pic028:pic028,
    pic029:pic029,
}

const PicLoader = (props) => {
    const {pic, style} = props;
  return (
    <img src={pictures[pic]} style={style} alt="picLoader object"/>
  )
}

export const pictureArray = Object.keys(pictures);
export default PicLoader;