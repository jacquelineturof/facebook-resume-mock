import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, children, clicked }) => (
    <button 
        className = { [ classes.Btn, classes[type] ].join(' ')}
        onClick = { clicked }>
        {  children }
    </button>
)

export default Button