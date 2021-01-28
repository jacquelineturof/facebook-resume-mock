import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import { 
    BiMailSend, 
    BiBell, 
    BiUserCircle, 
    BiChevronDown 
} from "react-icons/bi"

import classes from './TopBar.module.css'

const SearchBar = () => {
    const [ input, setInput ] = useState('')

    return (
        <div className = { classes.SearchBar }>
            <IoIosSearch className = 'margin--left white md-icon' />
            <input 
                className = { `${classes.SearchBarInput} margin--left`} 
                value = { input }
                onChange = { e => setInput(e.target.value) }
                placeholder = "Search" />
        </div>
    )
}

const Controls = () => {
    const [ isMenuVisible, setIsMenuVisible ] = useState(false)
    const menuClasses = `${classes.Menu} ${isMenuVisible 
        ? '' : 'hide'}`

    return (
        <div className = { classes.Controls }>
            <BiMailSend  className = 'white md-icon margin--right pointer' />
            <BiBell className = 'white md-icon margin--right pointer' />
            <div 
                className = { classes.DropDown } 
                onClick = { () => setIsMenuVisible(!isMenuVisible) }>
                <p>Guest</p>
                <BiUserCircle />
                <BiChevronDown />
            </div>
            <ul className = { menuClasses }>
                <li>Logout</li>
            </ul>
        </div>
    )
}

const Topbar = () => (
    <div className = { classes.Topbar  + " main-bg-color" }>
        <SearchBar />
        <Controls />
    </div>
)

export default Topbar