import React from 'react'

const ArticleCard = ({ title, img, paragraphText, width = '50%', withLink = false, transparentButton = true }) => {
    return (
        <div className="article-card" style={{
            width: width,
        }}>
            <h2>{title}</h2>
            <img src={img} alt="" />
            <p>
                {paragraphText}
            </p>
            <button className={transparentButton ? 'button-1 no-background': 'button-1'}>
                Lire L'article
            </button>
            <div className="spacer-18px"></div>
            {withLink && <a href="#">Tous les articles</a>}
        </div>
    )
}

export default ArticleCard