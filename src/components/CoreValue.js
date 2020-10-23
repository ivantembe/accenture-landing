import React from 'react'
import Button from './Button'

const CoreValue=()=> {
    return (
        <div className='core-value'>
            <h2 className='core-value--heading'>Core values</h2>
            <p className='core-value--desc'>Our values shape the culture of our organization and define the character of our company. We live the core values through individual behaviors. They serve as the foundation for how we act and make decisions.</p>
            <Button lable='see our core values' theme='dark'/>
        </div>
    )
}

export default CoreValue
