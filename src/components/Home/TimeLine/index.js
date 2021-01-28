import React, { useState } from 'react'

import Header from './Header'
import Label from '../../UI/Label'
import Avatar from '../../UI/Avatar'
import Button from '../../UI/Button'
import SkillUpdate from './SkillUpdate'

import { BiCodeAlt, BiBuildingHouse } from "react-icons/bi"
import { FcBusinesswoman,  FcShop, FcLike  } from "react-icons/fc"

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
                        <BiCodeAlt className = { classes.InfoIcon } /> 
                        Developer at
                        <a 
                            href = "https://www.linkedin.com/company/the-hero-loop/"
                            target = "_blank"
                            rel = "noreferrer" 
                            className = { `${classes.InfoLink } bold` }>
                            The Hero Loop
                        </a>
                    </li>
                    <li className = { classes.InfoItem }>
                        <BiBuildingHouse className = { classes.InfoIcon } /> 
                        Lives in Brooklyn
                    </li>
                </ul>
            </div>
        </div>
    )
}

const PostForm = () => {
    const postFormClasses = 
        `${ classes.PostForm } main-bg-color center`

    const [ input, setInput ] = useState('')

    return (
        <div className = { postFormClasses }>
            <div className = { classes.Content }>
                <ul className = { classes.PostTypeList }>
                    <li className = "bold">
                        Status
                    </li>
                    <li className = "bold">
                        Photos
                    </li>
                    <li className = "bold">
                        Videos
                    </li>
                </ul>
                <div className = { classes.PostFormContainer }>
                    <Avatar />
                    <input 
                        className = { classes.PostInput } 
                        value = { input }
                        onChange = { e => setInput(e.target.value) }
                        placeholder = "Write something to Jackie..." />
                </div>
                <div className = { classes.PostBottom }>
                    <ul className = { classes.PostTags }>
                        <li className = { classes.PostTag }>
                            <FcBusinesswoman 
                                className = { classes.PostTagIcon } />
                            People
                        </li>
                        <li className = { classes.PostTag }>
                            <FcShop className = { classes.PostTagIcon } />
                            Places
                        </li>
                        <li className = { classes.PostTag }>
                            <FcLike className = { classes.PostTagIcon } />
                            Mood
                        </li>
                    </ul>
                    <Button type = "Accent">
                        Share
                    </Button>
                </div>
            </div>

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
            <SkillUpdate />
        </div>
    )
}

export default TimeLine