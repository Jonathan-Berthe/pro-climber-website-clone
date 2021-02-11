import React from 'react'

import ArticleCard from './ArticleCard';

import coinceur from '@/ressources/2018/11/camalot.png'

const Section2 = () => {
    return (
        <section className="section section-2">
            <ArticleCard title="LE PETIT POUCET AU YOSEMITE" img={coinceur} paragraphText="L’automne dernier, Florian Delcoigne, Merlin Didier, Lucas Nyssens et moi avons traversé l’Atlantique pour aller se frotter aux célèbres fissures du Yosemite. Rejoints par d’autres grimpeurs belges et étrangers nous y avons vécu de fameuses aventures verticales ! Voici le récit de certaines d’entre elles." />
        </section>
    )
}

export default Section2