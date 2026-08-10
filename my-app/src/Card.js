import React from 'react'
import './Card.css'
export default function card({title, price}) {
     if(title === undefined) {
        console.error('Please add title for the card');
    }
    else if(typeof title !== 'string') {
        console.error('Title must be a string');
    }
    if(typeof price !== 'number') {
        console.error('Price must be a number');
    }   
    return (
        <div className='Card'>
            <h1>{title}</h1>
            <p className='price'>${price}</p>
            <p>
                <button> Add to card</button>
            </p>
        </div>
    )
}

