import {TweenMax, Power3} from 'gsap'

export const gsapAnimation_1 = (refElement)=>{
    return TweenMax.to(
      refElement,
      .8,
      {
        opacity:1,
        y: -10,
        ease: Power3.easeOut
      }
    )
  }