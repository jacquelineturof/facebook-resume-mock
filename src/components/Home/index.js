import React, { useState } from 'react'

import TimeLine from './TimeLine'

import classes from './Home.module.css'

const Home = () => {
    const [ cmp, setCmp ] = useState('timeline')
    
    let loadedComponent = (
        <TimeLine 
            activeComponent = { cmp } 
            setComponent = { setCmp } />
    )
    
    return (
        <div className = { `${classes.Wrapper } center` }>
            { loadedComponent }
        </div>
    )
}

export default Home