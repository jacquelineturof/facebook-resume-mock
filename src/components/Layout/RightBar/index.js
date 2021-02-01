import React, { useState } from 'react'
import { IoChatbubblesSharp } from "react-icons/io5"

import Label from '../../UI/Label'
import Button from '../../UI/Button'

import classes from './RightBar.module.css'

const INITIAL = 0
const SET_USER = 1
const START_CHAT = 2

const RightBar = () => {
    const [ view, setView ] = useState(INITIAL)
    const [ username, setUsername ] = useState('')
    const [ message, setMessage ] = useState('')

    let cmpClasses = [ classes.View ]
    let cmp = null

    if (view === INITIAL) {
        cmpClasses.push('center')

        cmp = (
            <div className = { cmpClasses.join(' ') }>
                <IoChatbubblesSharp color = "#ccc" size = { 36 } />
                <Label center = { true }>
                    Click below to begin chat with Jackie
                </Label>
                <Button 
                    type = "Accent" clicked = { () => setView(SET_USER) } >
                    Start Chat
                </Button>
            </div>
        )
    } else if (view === SET_USER) {
        cmpClasses.push('center')

        /*
            Disable button if user did not enter a username.
        */
        cmp = (
            <div className = { cmpClasses.join(' ') }>
                <Label center = { true }>
                    Please enter your name below to begin chat.
                </Label>
                <input 
                    type = "text" 
                    className = { classes.NameInput }
                    value = { username }
                    onChange = { e => setUsername(e.target.value) }
                    placeholder = "Your Name Here..."  />
                <Button 
                    type = "Accent" 
                    clicked = { () => setView(START_CHAT) }
                    disabled = { username.length < 3 }>
                    Start Chat
                </Button>
            </div>
        )
    } else {
        cmpClasses.push('flex')

        cmp = (
            <div className = { cmpClasses.join(' ') }>
                <div className = { classes.MessageContainer + ' flex' }>
                    <input 
                        className = { classes.InputMessage }
                        value = { message }
                        onChange = { e => setMessage(e.target.value) }
                        placeholder = "Enter message here..." />
                </div>
            </div>
        )
    }

    return (
        <div className = { classes.RightBar + " main-bg-color center" }>
            <div className = { classes.Container }>
                <Label>
                    Chat
                </Label>
                { cmp }
            </div>
        </div>
    )
}

export default RightBar