import React from 'react'

import Header from './Header'
import Label from '../../UI/Label'

import { BiCodeAlt} from "react-icons/bi"

import classes from './TimeLine.module.css'

const Introduction = () => {
    const introductionClasses = 
        `${ classes.Introduction } main-bg-color center`

    return (
        <div className = { introductionClasses }>
            <div className = { classes.Content }>
                <Label type = "sub">
                    Introduction
                </Label>
                <ul className = { classes.InfoContainer }>
                    <li className = { classes.InfoItem }>
                        <BiCodeAlt /> Developer at
                    </li>
                    <li className = { classes.InfoItem }>
                    </li>
                    <li className = { classes.InfoItem }>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const PostForm = () => {
    const postFormClasses = 
        `${ classes.PostForm } main-bg-color`

    return (
        <div className = { postFormClasses }>

        </div>
    )
}

const TimeLine = ({ activeComponent, setComponent }) => {
    return (
        <div className = { classes.Grid }>
            <Header 
                activeComponent = { activeComponent } 
                setComponent = { setComponent } />
            <Introduction />
            <PostForm />
        </div>
    )
}

export default TimeLine