import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'
import {ReactComponent as Twitter} from '../assets/twitter.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import {ReactComponent as Facebook} from '../assets/facebook.svg'
import {ReactComponent as Email} from '../assets/email.svg'

const SocialMedia=()=> {
  let socialMediaAnim = useRef(null)

  useEffect(()=>{
    TweenMax.to(
      socialMediaAnim,
      .8,
      {
        opacity: 1,
        x: 10,
        ease: Power3.easeOut,
        delay: .3
        
      }
    )
  }, [])

  return (
    <div ref={el=>{socialMediaAnim=el}} className='social-media-container'>
      <Twitter className='social-media-icon'/>
      <LinkedIn className='social-media-icon'/>
      <Facebook className='social-media-icon'/>
      <Email className='social-media-icon'/>
    </div>
  )
}

export default SocialMedia