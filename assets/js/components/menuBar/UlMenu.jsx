import React from 'react'

import fb from '@/ressources/fb.svg'
import insta from '@/ressources/insta.svg'
import fbW from '@/ressources/fb_white.svg'
import instaW from '@/ressources/insta_white.svg'

const UlMenu = ({ logoWhiteMode = true, whiteModeClassName = '' }) => {
    return (
        <ul className={"ul-menu" + whiteModeClassName}>
            <li className={"menu-item m1 active" + whiteModeClassName}><a href="#"></a>Home</li>
            <li className="menu-item m2"><a href="#">Palmares</a></li>
            <li className="menu-item m3"><a href="#">Gallery</a></li>
            <li className="menu-item m4"><a href="#">Contact</a></li>
            <li className="menu-item m5"><a href="#"><img src={logoWhiteMode ? fbW : fb} alt="" /></a></li>
            <li className="menu-item m6"><a href="#"><img src={logoWhiteMode ? instaW : insta} alt="" /></a></li>
        </ul>
    )
}

export default UlMenu