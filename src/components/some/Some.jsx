import React from 'react'

import ig from "../../assets/images/some/instagram.png"
import fb from "../../assets/images/some/facebook.png"
import mail from "../../assets/images/some/email.png"
import tt from "../../assets/images/some/tik tok.png"
import WA from "../../assets/images/some/whatsapp.png"
import yt from "../../assets/images/some/youtube.png"

const Some = () => {
  return (
    <div className="some">
    <br />
    <a className='nav-link'>
      <img src={ig} alt="" className="some" />
    </a>
    <br />
    <br />
    <a className='nav-link'>
      <img src={fb} alt="" className="some" />
    </a>
    <br />
    <br />
    <a className='nav-link'>
      <img src={mail} alt="" className="some" />
    </a>
    <br />
    <br />
    <a className='nav-link'>
      <img src={tt} alt="" className="some" />
    </a>
    <br />
    <br />
    <a className='nav-link'>
      <img src={WA} alt="" className="some" />
    </a>
    <br />
    <br />
    <a className='nav-link'>
      <img src={yt} alt="" className="some" />
    </a>
    <br />
</div>
  )
}

export default Some