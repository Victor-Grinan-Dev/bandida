import React from 'react';

import pic001 from "../../assets/images/Black&Grey/pic001.jpg";
import pic002 from "../../assets/images/Black&Grey/pic002.jpg";
import pic003 from "../../assets/images/Black&Grey/pic003.jpg";
import pic004 from "../../assets/images/Black&Grey/pic004.jpg";
import pic005 from "../../assets/images/Black&Grey/pic005.jpg";
import pic006 from "../../assets/images/Black&Grey/pic006.jpg";
import pic007 from "../../assets/images/Black&Grey/pic007.jpg";
import pic008 from "../../assets/images/Black&Grey/pic008.jpg";
import pic009 from "../../assets/images/Black&Grey/pic009.jpg";
import pic010 from "../../assets/images/Black&Grey/pic010.jpg";
import pic011 from "../../assets/images/Black&Grey/pic011.jpg";
import pic012 from "../../assets/images/Black&Grey/pic012.jpg";
import pic013 from "../../assets/images/Black&Grey/pic013.jpg";
import pic014 from "../../assets/images/Black&Grey/pic014.jpg";
import pic015 from "../../assets/images/Black&Grey/pic015.jpg";
import pic016 from "../../assets/images/Black&Grey/pic016.jpg";
import pic017 from "../../assets/images/Black&Grey/pic017.jpg";
import pic018 from "../../assets/images/Black&Grey/pic018.jpg";
import pic019 from "../../assets/images/Black&Grey/pic019.jpg";
import pic020 from "../../assets/images/Black&Grey/pic020.jpg";
import pic021 from "../../assets/images/Black&Grey/pic021.jpg";
import pic022 from "../../assets/images/Black&Grey/pic022.jpg";
import pic023 from "../../assets/images/Black&Grey/pic023.jpg";
import pic024 from "../../assets/images/Black&Grey/pic024.jpg";
import pic025 from "../../assets/images/Black&Grey/pic025.jpg";
import pic026 from "../../assets/images/Black&Grey/pic026.jpg";
import pic027 from "../../assets/images/Black&Grey/pic027.jpg";
import pic028 from "../../assets/images/Black&Grey/pic028.jpg";
import pic029 from "../../assets/images/Black&Grey/pic029.jpg";
import pic030 from "../../assets/images/Black&Grey/pic030.JPG";

import color01 from "../../assets/images/colors/pic013.jpg";
import color03 from "../../assets/images/colors/pic015.jpg";
import color04 from "../../assets/images/colors/pic017.jpg";
import color05 from "../../assets/images/colors/pic027.jpg";

import small001 from "../../assets/images/smalls/20220720_172939_Original.jpg";
import small002 from "../../assets/images/smalls/20230426_135032_Original.jpg";
import small003 from "../../assets/images/smalls/20230725_112826_Original.jpg";
import small004 from "../../assets/images/smalls/20230804_173707_Original.jpg";
import small005 from "../../assets/images/smalls/IMG_0101_Original.jpg";
import small006 from "../../assets/images/smalls/IMG_5109.jpg";
import small007 from "../../assets/images/smalls/IMG_5114.jpg";
import small008 from "../../assets/images/smalls/IMG_5135.jpg";
import small009 from "../../assets/images/smalls/matriushka.jpg";

import pmu01 from "../../assets/images/pmu/huulet.JPG"
import pmu02 from "../../assets/images/pmu/kulmat.JPG"

import logo32 from "../../assets/images/logo/la_bandida_logo_3-2(og).png";
import logo32_ from "../../assets/images/logo/la_bandida_logo_3-2_(og).png";
import logo43 from "../../assets/images/logo/la_bandida_logo_4-3(og).png";
import logo54 from "../../assets/images/logo/la_bandida_logo_5-4(og).png";
import logo54inv from "../../assets/images/logo/la_bandida_logo_5-4_inv.png";
import logo75 from "../../assets/images/logo/la_bandida_logo_7-5(og)png.png";
import logo169 from "../../assets/images/logo/la_bandida_logo_16-9(og).png";
import logo169inv from "../../assets/images/logo/la_bandida_logo_16-9_inv.png";

import kollaasi from "../../assets/images/kollaasi.jpg";
import paula_profile_1 from "../../assets/images/profiles pics/paula_profile_1.jpg";
import paula_medium from "../../assets/images/profiles pics/paula_profile.jpg";
import paula_small from "../../assets/images/profiles pics/paula_small.jpg";
import studio from "../../assets/images/profiles pics/studio.jpg";



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
    pic030:pic030,

    color01:color01,
    color03:color03,
    color04:color04,
    color05:color05,

    small001:small001,
    small002:small002,
    small003:small003,
    small004:small004,
    small005:small005,
    small006:small006,
    small007:small007,
    small008:small008,
    small009:small009,

    pmu01:pmu01,
    pmu02:pmu02,

    fav001:pic028,
    fav002:pic018,
    fav003:pic014,
    fav004:pic011,
    fav005:pic009,
    fav006:pic027,
    fav007:pic010,
    fav008:pic029,
    fav009:pic001,

    logo32:logo32, 
    logo32_:logo32_,
    logo43:logo43,
    logo54:logo54,
    logo54inv:logo54inv,
    logo75:logo75,
    logo169:logo169,
    logo169inv:logo169inv,

    kollaasi:kollaasi,
    paula_profile_1:paula_profile_1,
    paula_medium:paula_medium,
    paula_small:paula_small,
    studio:studio,

 
}

const PicLoader = (props) => {
    const {pic, style, idx} = props;


  return (
    <img src={pictures[pic]} 
    style={style} 
    alt="picLoader object" 
    className='pic-item' 
    key={idx}/>
  )
}

export const blackGrey = [
  'pic001',
  'pic002',
  'pic003',
  'pic004',
  'pic005',
  'pic006',
  'pic008',
  'pic009',
  'pic010',
  'pic011',
  'pic012',
  'pic013',
  'pic014',
  'pic015',
  'pic016',
  'pic017',
  'pic018',
  'pic019',
  'pic020',
  'pic021',
  'pic022',
  'pic023',
  'pic024',
  'pic025',
  'pic026',
  'pic027',
  'pic028',
  'pic029',
];
export const colors = [
  'color01',
  'color03',
  'color04',
  'color05', 
];
export const pmu = [
  'pmu01',
  'pmu02',
];
export const smalls = [
  'small001',
  'small002',
  'small003',
  'small004',
  'small005',
  'small006',
  'small007',
  'small008',
  // 'small009',
];


export default PicLoader;