import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'
import Scroll from './Scroll'

const Banner=()=> {
  let txtAnim = useRef(null)
  let txtSmallAnim = useRef(null)

  useEffect(()=>{
    TweenMax.from(
      txtAnim,
      .8,
      {
        opacity:0,
        y: -25,
        ease: Power3.easeOut,
        delay: .4
      }
    )

    TweenMax.from(
      txtSmallAnim,
      .8,
      {
        opacity:0,
        y: 5,
        ease: Power3.easeOut,
        delay: .8
      }
    )
    
  }, [])

  return (
    <div className='hero'>
      <div className='banner'>
        <h1 ref={el=>{txtAnim=el}} className='banner--text'>LEADING<br/> THROUGH CHANGE</h1>
        <p ref={el=>{txtSmallAnim=el}} className='banner--text__small'>
          We embrace the power of change to create 360° value
          for our clients, people and communities.
        </p>
      </div>
      <Scroll/>
    </div>
  )
}

export default Banner