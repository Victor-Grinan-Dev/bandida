import React, { useState } from 'react';
import { setPicModal, togglePicModal } from '../../app/appSlice';

import pic030 from "../../assets/images/Black&Grey/pic001.webp";
import pic029 from "../../assets/images/Black&Grey/pic002.webp";
import pic028 from "../../assets/images/Black&Grey/pic003.webp";
import pic027 from "../../assets/images/Black&Grey/pic004.webp";
import pic026 from "../../assets/images/Black&Grey/pic005.webp";
import pic025 from "../../assets/images/Black&Grey/pic006.webp";
import pic024 from "../../assets/images/Black&Grey/pic007.webp";
import pic023 from "../../assets/images/Black&Grey/pic008.webp";
import pic022 from "../../assets/images/Black&Grey/pic009.webp";
import pic021 from "../../assets/images/Black&Grey/pic010.webp";
import pic020 from "../../assets/images/Black&Grey/pic011.webp";
import pic019 from "../../assets/images/Black&Grey/pic012.webp";
import pic018 from "../../assets/images/Black&Grey/pic013.webp";
import pic017 from "../../assets/images/Black&Grey/pic014.webp";
import pic016 from "../../assets/images/Black&Grey/pic015.webp";
import pic015 from "../../assets/images/Black&Grey/pic016.webp";
import pic014 from "../../assets/images/Black&Grey/pic017.webp";
import pic013 from "../../assets/images/Black&Grey/pic018.webp";
import pic012 from "../../assets/images/Black&Grey/pic019.webp";
import pic011 from "../../assets/images/Black&Grey/pic020.webp";
import pic010 from "../../assets/images/Black&Grey/pic021.webp";
import pic009 from "../../assets/images/Black&Grey/pic022.webp";
import pic008 from "../../assets/images/Black&Grey/pic023.webp";
import pic007 from "../../assets/images/Black&Grey/pic024.webp";
import pic006 from "../../assets/images/Black&Grey/pic025.webp";
import pic005 from "../../assets/images/Black&Grey/pic026.webp";
import pic004 from "../../assets/images/Black&Grey/pic027.webp";
import pic003 from "../../assets/images/Black&Grey/pic028.webp";
import pic002 from "../../assets/images/Black&Grey/pic029.webp";
import pic001 from "../../assets/images/Black&Grey/pic030.webp";

import color01 from "../../assets/images/colors/pic013.webp";
import color03 from "../../assets/images/colors/pic015.webp";
import color04 from "../../assets/images/colors/pic017.webp";
import color05 from "../../assets/images/colors/pic027.webp";

import small001 from "../../assets/images/smalls/20220720_172939_Original.webp";
import small002 from "../../assets/images/smalls/20230426_135032_Original.webp";
import small003 from "../../assets/images/smalls/20230725_112826_Original.webp";
import small004 from "../../assets/images/smalls/20230804_173707_Original.webp";
import small005 from "../../assets/images/smalls/IMG_0101_Original.webp";
import small006 from "../../assets/images/smalls/IMG_5109.webp";
import small007 from "../../assets/images/smalls/IMG_5114.webp";
import small008 from "../../assets/images/smalls/IMG_5135.webp";
import small009 from "../../assets/images/smalls/matriushka.webp";

import pmu01 from "../../assets/images/pmu/huulet.webp"
import pmu02 from "../../assets/images/pmu/kulmat.webp"

import mainLogo from "../../assets/images/logo/inky-logo.png";

import kollaasi from "../../assets/images/banner/kollaasi.jpg";
import paula_profile_1 from "../../assets/images/profiles pics/paula_profile_1.webp";
import paula_medium from "../../assets/images/profiles pics/paula_profile.webp";
import studio from "../../assets/images/studio/studio.webp";
import { useDispatch, useSelector } from 'react-redux';

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

    mainLogo:mainLogo,

    kollaasi:kollaasi,
    paula_profile_1:paula_profile_1,
    paula_medium:paula_medium,
    studio:studio,
}

export const blackGrey = [
  // 'pic001',
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
  'pic030',
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
];

const PicLoader = (props) => {
    const {pic, xtraStyle, extraClass, idx} = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const modalPic = useSelector(state=>state.app.picModalCurrentPic);
    const isPicModal = useSelector(state=>state.app.isPicModal);

    const handleImgPopUp = () => {
      dispatch(setPicModal(pic));
      dispatch(togglePicModal());
    }

  return (
    <>
      {!isLoaded && (
        <img
          className={extraClass}
          src={pictures[pic? pic: modalPic]}
          alt="picLoader object"
          key={idx}
          style={{...xtraStyle, filter: 'blur(10px)',transition: 'opacity 0.3s'}}
          loading="lazy"
        />
      )}
      <img
        className={extraClass}
        src={pictures[pic? pic: modalPic]}
        alt="picLoader object"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{ ...xtraStyle,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        onClick={!isPicModal ? handleImgPopUp : null }
      />
    </>
  )
}




export default PicLoader;