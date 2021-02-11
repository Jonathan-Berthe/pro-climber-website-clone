// Attention à import avant 'react' pour enable le hot reload
//TODO Mettre les articlesCard dans des flex container
import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { scrollHandler } from './scroll.js'

import MenuContainer from './components/menuBar/MenuContainer'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import NavIndicator from './components/NavIndicator.jsx'



const App = () => {

  const [currentSectionId, setCurrentSectionId] = useState(1)

  useEffect(() => {
    scrollHandler(setCurrentSectionId)
  }, [])

  return (
    <>
      <MenuContainer currentSectionId={currentSectionId}/>
      <NavIndicator currentSectionId={currentSectionId}/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}

export default hot(App)



