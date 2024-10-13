import React from 'react'

import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import Featured from '../src/Pages/Featured/Featured'
import Gallery from '../src/Pages/Gallery/Gallery'
import Home from '../src/Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Workers from './Pages/Workers/Workers'

const App = () => {
  return (
    <div>
        <Home />
        <About />
        <Contact />
        <Gallery />
        <Featured />
        <Workers />
        <NotFound />
    </div>
  )
}

export default App