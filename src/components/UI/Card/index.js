import React from 'react'

import classes from './Card.module.css'

const Card = ({ children }) => (
    <div className = {  `${ classes.Card } main-bg-color center` }>
        <div className = { classes.Content }>
            { children }
        </div>
    </div>
)

export default Card