import React from 'react'

import TitleSection from './TitleSection'


import petzl from '@/ressources/2018/11/Petzl-141x70.png';
import scarpa from '@/ressources/2018/11/Scarpa-132x75.png';
import cab from '@/ressources/2018/11/CAB-220x70.png';
import lecomte from '@/ressources/2018/11/lecomte-220x60.png';
import revolution from '@/ressources/2018/11/revolution_ct-200x180.png';
import escale from '@/ressources/2018/11/escale_logo_white-100x90.png';
import maniak from '@/ressources/2018/11/Logonom_blanc-110x130.png';

import insta from '@/ressources/insta_white.svg'
import fb from '@/ressources/fb_white.svg'

const Section5 = () => {
    return (
        <section className="section section-5">
            <TitleSection titleContent="Ils me supportent" />
            <div className="logo-row-container logo-row1-container">
                <img src={petzl} alt="" className="logo1-row1" />
                <img src={scarpa} alt="" className="logo2-row1" />
                <img src={cab} alt="" className="logo3-row1" />
                <img src={lecomte} alt="" className="logo4-row1" />
            </div>
            <div className="logo-row-container  logo-row2-container">
                <img src={escale} alt="" className="logo1-row2" />
                <img src={revolution} alt="" className="logo2-row2" />
                <img src={maniak} alt="" className="logo3-row2" />
            </div>
            <div className="section-footer">
                <div className="spacer-3"></div>
                <div className="footer-title">
                    Suivez-moi
                </div>
                <div className="follow-row">
                    <div className="follow-logo-container"><a href="#"><img src={insta} alt="" /></a></div>
                    <div className="follow-logo-container"><a href="#"><img src={fb} alt="" /></a></div>
                </div>
                <div className="spacer-1"></div>
                <div className="copyright">
                    <p>Sébastien Berthe © 2018. All Rights Reserved.</p>
                </div>
                <div className="spacer-1"></div>
            </div>
        </section>
    )
}

export default Section5