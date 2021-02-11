import React from 'react'

import ArticleCard from './ArticleCard';

import razor from '@/ressources/2018/11/razor-delimiter-black.png'

const Section4 = () => {
    return (
        <section className="section section-4">
            <ArticleCard title="RAZORBLADE" img={razor} paragraphText="En dépit de la douleur,  j’arme la prise de toutes mes forces. Je sens la lame s’enfoncer au plus profond de la pulpe de mes doigts : parfait ! Mon pied est haut-placé, au millimètre près. Mon corps est si proche de la paroi que je peux sentir sur ma joue…" width='40%' />
         
                <iframe src="https://www.youtube.com/embed/IEsCzvWRpw0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
        </section>
    )
}

export default Section4