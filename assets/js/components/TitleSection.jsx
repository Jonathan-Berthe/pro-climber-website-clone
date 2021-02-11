import React from 'react'

const TitleSection = ({ titleContent }) => {
    return (
        <div className="title-section-container">
          <div className="title-section">
            { titleContent }
          </div>
          <div className="delimiter-title-section"></div>
        </div>
    )
}

export default TitleSection