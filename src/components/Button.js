import React from 'react'
import {ReactComponent as ArrowRight} from '../assets/right.svg'

const Button=({lable, theme})=> {
    return (
        <button className={`button button--${theme}`}>
            <ArrowRight className='button--arrow'/>
            <span>{lable}</span>
        </button>
    )
}

export default Button
