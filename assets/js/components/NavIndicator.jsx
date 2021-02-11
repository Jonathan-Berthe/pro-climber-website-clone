import React from 'react'

/* The nav indicator is fixed on the right of the screen to tell to user the current section of nav.*/
const NavIndicator = ({ currentSectionId }) => {
    let whiteMode = ((currentSectionId % 2 === 0)) ? false : true
    const whiteModeClassName = (whiteMode ? ' white-mode' : '')

    /* a nav-indicator-item has the class 'white-mode' if we want a white color and the class 'active' if it represents the current nav section. Each nav-indicator item has a click-listener that scroll to the correspondant section when clicking. This listener is set in the useEffect() of the App component (because this listener can change the state of App component).*/
    return (
        <div className="nav-indicator-container">
            {
                [...Array(5).keys()].map((i) => {
                    return <div key={i} className={`nav-indicator-item nav-indicator-item${i + 1}` + whiteModeClassName + (currentSectionId === (i + 1) ? ' active' : '')}></div>
                })
            }
        </div>
    )
}

export default NavIndicator