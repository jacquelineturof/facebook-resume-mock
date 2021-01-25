import React from 'react'

import me from '../../../../assets/me.png'

import classes from './Header.module.css'

const HEADER_LINKS = [
    "timeline", "about", "friends", "photos", "more"
]

const HeaderLink = ({ name, activeComponent }) => (
    <li className = { activeComponent === name
        ? `${ classes.ActiveLink } center` : `${ classes.Link } center`}>
        { name }
    </li>
)

const Header = ({ activeComponent, setComponent }) => {
    return (
        <header className = { classes.Header }>
            <div className = { `${ classes.LinksWrapper } main-bg-color`}>
                <ul className = { classes.HomeLinksList } >
                    { HEADER_LINKS.map(link => 
                        <HeaderLink 
                            key = { link }
                            name = { link }
                            activeComponent = { activeComponent } /> )
                    }
                </ul>
            </div>

            <img 
                src = { me } 
                className = { classes.UserImage } 
                alt = "jackie turof" />

            <h2 className = { classes.HeaderLabel }>Jackie Turof</h2>
        </header>
    )
}

export default Header