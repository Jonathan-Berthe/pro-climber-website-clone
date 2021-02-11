// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'


const Burger = ({ height, color = '#333' }) => {

    /* STYLE OF BURGER (function of props) */
    const padding = height * 0.1
    const heightWithPadding = height * 1.2
    const widthLine = height * 2

    const widthContainer = widthLine * 1.6
    const deltaX = widthLine * 1.4
    const heightLine = height / 4.5
    const borderRadius = height / 12
    const style = css`
        padding: ${padding}px 0;
        height: ${heightWithPadding}px;
        width: ${widthContainer}px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        .burger-line {
            height: ${heightLine}px;
            border-radius: ${borderRadius}px;
            width: ${widthLine}px;
            background: ${color};
            position: relative;
            pointer-events: none;
            &:before {
                content: "";
                height: ${heightLine}px;
                border-radius: ${borderRadius}px;
                width: ${widthLine}px;
                background: ${color};
                position: absolute;
                transform: translateX(-${deltaX}px);
                pointer-events: none;
                opacity: 1;
            }
        }
    `

    /* GSAP ANIM */

    const delay = 0.25

    const [TL] = useState(new gsap.timeline({ paused: true }))
    const [TLReverse] = useState(new gsap.timeline({ paused: true }))

    useEffect(() => { 
        const bugerLineAll = document.querySelectorAll('.burger-line')
        TL.staggerTo(bugerLineAll, delay, { x: deltaX, ease: 'none' }, delay)
        TLReverse.staggerTo(bugerLineAll, delay, { x: 0, ease: 'none' }, delay)
        return () => {
            TL.clear()
            TLReverse.clear() 
        } 
    }, [])  


    const handleMouseEnter = () => {
        TL.restart()
    }

    const handleMouseLeave = () => {
        TLReverse.restart()
    } 

    return (
        <>
            <div className="burger" css={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
        </>
    )


}

export default Burger