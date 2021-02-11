import React, { useEffect, useState } from 'react'

import Burger from './burger/Burger'
import UlMenu from './UlMenu'

import logoMountainWhite from '@/ressources/2018/10/Favi_120_w.png'
import logoMountainBlack from '@/ressources/2018/10/Favi_76-2.png'
import fbW from '@/ressources/fb_white.svg'
import instaW from '@/ressources/insta_white.svg'

// The MenuContainer element has two main components: the horizontal menu (that change when the screen is < 800px width) and the vertical menu that can be expanded or not. The currentSectionId prop is used to know where we are in the page and is important to know the color to give to the horizontal menu (white or black).
const MenuContainer = ({ currentSectionId }) => {

    // isSmallScreen = true if the width of the screen is < 800px
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    // menuIsExpanded = true if the vertical menu is expand (by clicking on nav burger)
    const [verticalMenuIsExpanded, setToggleVerticalMenu] = useState(false)

    const checkWidth = () => {
        const newWidth = window.innerWidth
        if (newWidth < 800) {
            setIsSmallScreen(true)
        } else {
            setIsSmallScreen(false)
        }
    }

    useEffect(() => {
        checkWidth()
        window.addEventListener('resize', function () {
            checkWidth()
        });
    }, [])


    // Call to toggle the vertical menu, either when clicking on burger if the menu is close, or when clicking outside of the menu (=> on the exterior-bloc element) when the vertical menu is expanded.
    const handleClick = () => {
        setToggleVerticalMenu(!verticalMenuIsExpanded)

        // If the vertical menu is expanded, we give to #app the class 'menu-expand' (to manage an offset-x animation of the whole app when we open the menu)
        document.querySelector('#app').classList.toggle('menu-expand')
    }


    let whiteMode = ((currentSectionId % 2 === 0)) ? false : true
    const whiteModeClassName = (whiteMode ? ' white-mode' : '')

    const isVisibleClass = `${verticalMenuIsExpanded ? 'visible' : 'not-visible'}`

    return (
        <>
            {/* The 'exterior-bloc' element is a fixed element that is display only when the vertical menu is expanded and take all the screen EXCEPT the place of the vertical menu. Thanks to this element, if we click outside of the vertical expanded menu, it will call handleClick and then close this menu (and so will be not displayed) */}
            <div onClick={handleClick} className={`exterior-bloc ${isVisibleClass}`}>
                {/* We call e.stopPropagation() on a click listener of the vertical menu because without it, if we click inside the vertical menu, it will trigger a click event on parent element (=exterior-bloc), call the click listener of this parent (= handleClick) and close the menu... => we don't want this. */}
                <div onClick={(e) => e.stopPropagation()} className={`vertical-menu-container ${isVisibleClass}`}>
                        <img src={logoMountainWhite} alt="" />
                        <UlMenu />
                        <div className="spacer-4"></div>

                        {/* In small screens, the vertical menu is different of it in large screen. The style is managed in the .scss file by media-query, but there are also components that only exists in this small-screen vertical menu: */}
                        {!isSmallScreen && (
                            <>
                                <div className="follow-row">
                                    <div className="follow-logo-container"><a href="#"><img src={instaW} alt="" /></a></div>
                                    <div className="follow-logo-container"><a href="#"><img src={fbW} alt="" /></a></div>
                                </div>
                                <div className="copyright">
                                    <p>Sébastien Berthe © 2018. All Rights Reserved.</p>
                                </div>
                            </>
                        )}
                </div>
            </div>

            <div className={`horizontal-menu-container`}>
                <img src={(whiteMode && !isSmallScreen) ? logoMountainWhite : logoMountainBlack} alt="" />
                <div className="spacer-4"></div>
                {/* The ul-menu is visible only in large screen */}
                {!isSmallScreen && <UlMenu logoWhiteMode={whiteMode} whiteModeClassName={whiteModeClassName}/>}
                <div className="spacer-1"></div>
                {/* If we click on the burger => expand the vertical menu */}
                <div onClick={handleClick}>
                    {isSmallScreen && <Burger height={15} color={whiteMode ? '#f1f1f1' : '#333'} />}
                    {!isSmallScreen && <Burger height={10} color={whiteMode ? '#f1f1f1' : '#333'} />}
                </div>
            </div>
        </>

    )
}

export default MenuContainer