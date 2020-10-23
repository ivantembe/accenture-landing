import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'
import Button from './Button'
import Card from './Card'

const cards = [
    {title: '505K', desc:'Accenture employees worldwide'},
    {title: '200', desc:'Cities with Accenture locations and operations, across 51 countries'},
    {title: '6K', desc:'Clients served throughout more than 120 countries'},
    {title: '7400', desc:'Patents and patents pending worldwide (over 4,800 and over 2,500 respectively)'},
]

const About=()=> {
    let txtAnim = useRef(null)
  let authorAnim = useRef(null)

  useEffect(()=>{
    TweenMax.from(
      txtAnim,
      .8,
      {
        opacity:0,
        y: -10,
        ease: Power3.easeOut
      }
    )

    TweenMax.from(
      authorAnim,
      .8,
      {
        opacity:0,
        y: 5,
        ease: Power3.easeOut,
        delay: .2
      }
    )
    
  }, [])
    return (
        <div className='about'>
            <div className='section-one'>
            <span className='aside'>accenture</span>
            <div className='quote'>
                <p ref={el=>{txtAnim=el}} className='quote--text'>"Across the globe, one thing is universally true of the people of Accenture: We care deeply about what we do and the impact we have with our clients and communities. It is personal to all of us."</p>
                <p ref={el=>{authorAnim=el}} className='quote--author'>Julie Sweet<br/>Chief Executive Officer</p>
                <Button lable='meet our leaders'/>
            </div>
            </div>
            <div className='global-team'>
                <h2 className='global-team--header'>We are one global team</h2>
                <ul className='global-team--card-collection'>
                    {cards.map(card=>(
                        <Card title={card.title} desc={card.desc}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About
