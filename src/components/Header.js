import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'
import {ReactComponent as Logo} from '../assets/accenture-logo.svg'
// import {gsapAnimation_1} from '../animatios'

const navItems = ['Who we are', 'What we believe', 'How we work with clients', 'Community','Awards', 'Success stories', 'Join us']


const Header=()=> {
  let logoAnim = useRef(null)
  let navAnim = useRef(null)
  // useEffect(gsapAnimation_1,[])

  useEffect(()=>{
    TweenMax.to(
      logoAnim,
      .8,
      {
        opacity:1,
        y: -10,
        ease: Power3.easeOut
      }
    )

    TweenMax.to(
      navAnim,
      .8,
      {
        opacity:1,
        y: 5,
        ease: Power3.easeOut,
        delay: .2
      }
    )
    
  }, [])

  return (
    <div className='header'>
    <Logo ref={el=>{logoAnim=el}} className='logo'/>
      <ul ref={el=>{navAnim=el}} className='nav'>
        {navItems.map(item=>(
            <li className={item === 'Join us'?'item-list--button':'item-list'} key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Header