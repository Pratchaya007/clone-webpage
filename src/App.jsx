import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import Community from './components/Community'
import Pixelgrade from './components/Pixelgrade'
import Stats from './components/Stats'
import Howto from './components/Howto'
import Meet from './components/Meet'
import Article from './components/Article'
import Pellentesque from './components/Pellentesque'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Clients/>
    <Community/>
    <Pixelgrade/>
    <Stats/>
    <Howto/>
    <Meet/>
    <Article/>
    <Pellentesque/>
    <Footer/>
    </>
  )
}

export default App