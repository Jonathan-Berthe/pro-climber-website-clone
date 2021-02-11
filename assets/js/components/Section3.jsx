import React from 'react'

import TitleSection from './TitleSection'

const Section3 = () => {
    return (
        <section className="section section-3">
            <TitleSection titleContent="Compétences" />
            <div className="item-container item1-container">
                <div className="icon-container">
                    <div className="item-icon item1-icon">&#128818;</div>
                </div>
                <h2 className="item-title item1-title">Membre de l'équipe nationale</h2>
                <p className="item-content item1-content">Pratique la compétition internationale depuis 12 ans.</p>
                <div className="spacer-1"></div>
            </div>
            <div className="item-container item2-container">
                <div className="icon-container">
                    <div className="item-icon item2-icon">&#128401;</div>
                </div>
                <h2 className="item-title item2-title">COACH DE L'ÉQUIPE NATIONALE &amp; OUVREUR</h2>
                <p className="item-content item2-content">Entraîne et coach des grimpeurs de tout niveau. Récemment devenu coach de l’équipe nationale</p>
                <div className="spacer-1"></div>
            </div>
            <div className="item-container item3-container">
                <div className="icon-container">
                    <div className="item-icon item3-icon">&#128382;</div>
                </div>
                <h2 className="item-title item3-title">
                    FALAISISTE EXPERT</h2>
                <p className="item-content item3-content">Objectif 2020 : 9B</p>
                <div className="spacer-1"></div>
            </div>
            <div className="button-container">
                <button className="button-2 no-background">
                    Mon parcours sportif
          </button>
            </div>
        </section>
    )
}

export default Section3