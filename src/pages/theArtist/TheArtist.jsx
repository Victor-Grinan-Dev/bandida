import React, { useEffect } from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import { useLocation } from 'react-router-dom';

const TheArtist = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AboutMe ver="full"/>
  )
}

export default TheArtist