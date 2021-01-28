import React from 'react'

import me from '../../../assets/me.png'

import classes from './Avatar.module.css' 

const Avatar = () => 
    <img 
        src = { me } 
        className = { classes.Avatar } 
        alt = "jackie turof" />

export default Avatar