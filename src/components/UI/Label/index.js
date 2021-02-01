import React from 'react'

import classes from './Label.module.css'

/*
    rotate: boolean
    type: string, main || sub
*/
const Label = ({ children, rotate, type, isUppercase, center }) => {
    const labelClasses = type === 'main' 
        ? [ classes.Label ]
        : [ classes.LabelSub ]
    
    if (rotate) labelClasses.push(classes.Rotate)
    if (isUppercase) labelClasses.push('uppercase')
    if (center) labelClasses.push(classes.Center)

    let label = type === 'main' 
        ? (
            <h4 className = { labelClasses.join(' ') }>
                { children }
            </h4>
        )
        : (
            <h5 className = { labelClasses.join(' ') }>
                { children }
            </h5>
        )
    
    return label
}

export default Label