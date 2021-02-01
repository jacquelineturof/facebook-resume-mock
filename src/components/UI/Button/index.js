import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, children, clicked, disabled }) => (
    <button 
        className = { [ classes.Btn, classes[type] ].join(' ')}
        onClick = { clicked }
        disabled = { disabled }>
        {  children }
    </button>
)

export default Button