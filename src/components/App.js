import React from 'react'
import About from './About'
import Banner from './Banner'
import CoreValue from './CoreValue'
import Header from './Header'
import SocialMedia from './SocialMedia'

const App=()=> {
  return (
    <div className='container'>
      <SocialMedia/>
      <Header/>
      <Banner/>
      <About/>
      <CoreValue/>
    </div>
  )
}

export default App
