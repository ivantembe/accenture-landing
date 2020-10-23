import React from 'react'

const Card=({title, desc})=> {
    return (
        <li key={title} className='card'>
            <p className='card-title'>{title}</p>
            <p className='card-desc'>{desc}</p>
        </li>
    )
}

export default Card
