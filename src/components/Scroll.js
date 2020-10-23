import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

const Scroll=()=> {
  let scrollTxtAnim = useRef(null)
  let scrollCirAnim = useRef(null)
  let scrollLinAnim = useRef(null)


  useEffect(()=>{
    TweenMax.from(
      scrollTxtAnim,
      .8,
      {
        opacity:0,
        y: -40,
        ease: Power3.easeOut,
        delay: .7
      }
    )

    TweenMax.from(
      scrollCirAnim,
      .8,
      {
        opacity:0,
        x: 40,
        ease: Power3.easeOut,
        delay: .4
      }
    )

    TweenMax.from(
      scrollLinAnim,
      .8,
      {
        opacity:0,
        x: 40,
        ease: Power3.easeOut,
        delay: .6
      }
    )


  }, [])
  return (
    <div className='scroll'>
      <span ref={el=>{scrollTxtAnim=el}} className='scroll--text'>Scroll</span>
      <div ref={el=>{scrollCirAnim=el}} className='scroll--circle'></div>
      <div ref={el=>{scrollLinAnim=el}} className='scroll--line' />
    </div>
  )
}

export default Scroll