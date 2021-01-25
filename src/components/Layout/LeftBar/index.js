import React from 'react'
import { RiMenu2Fill, RiGithubFill } from "react-icons/ri"
import { 
    BiHomeAlt, 
    BiBookOpen, 
    BiMapPin, 
    BiFile, 
    BiImage,
    BiCalendarEvent, 
} from "react-icons/bi"
import { 
    FcAddressBook, 
    FcAlarmClock, 
    FcCalculator, 
    FcAssistant 
} from "react-icons/fc"

import Label from '../../UI/Label'

import classes from './LeftBar.module.css'

const GithubLink = ({ isMobile }) => {
    const linkContent = 
        isMobile 
            ? <RiGithubFill size = { 36 }  />
            : <p>Find me on <span className = "bold">Github</span></p>
    
    const linkClass = isMobile 
        ? classes.GithubLinkContainerMobile 
        : classes.GithubLinkContainerDesktop

    return (
        <a 
            href = "https://github.com/jacquelineturof" 
            target = "_blank"
            rel = "noreferrer" 
            className = { linkClass + ' center'}>
            { linkContent }
        </a>
    )
}

const MobileView = () => (
    <div className = { classes.Mobile }>
        <div className = { classes.IconContainer + " center pointer" }>
            <RiMenu2Fill size = { 24 } />
        </div>
        <div 
            className = { 
                classes.HeadingContainerMobile + " center uppercase" }>
            <Label type = "main" rotate = { true }>
                j.turof
            </Label>
        </div>
        <GithubLink isMobile = { true } />
    </div>
)

const DesktopView = () => (
    <div className = { classes.Desktop }>
        <div 
            className = { 
                classes.HeadingContainerDesktop + " center uppercase" }>
            <Label type = "main">
                j.turof
            </Label>
        </div>
        
        <div className = { classes.Menu }>
            <div className = { classes.MenuContainer }>
                <Label isUppercase = { true }>
                    menu
                </Label>
                <ul className = { classes.LinkList }>
                    <li className = { classes.Link + ' pointer' }>
                        <BiHomeAlt className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Home</p>
                    </li>
                    <li className = { classes.Link + ' pointer' }>
                        <BiBookOpen className = { classes.LinkIcon }/>
                        <p className = { classes.LinkLabel }>Latest News</p>
                    </li>
                    <li className = { classes.Link  + ' pointer' }>
                        <BiMapPin className = { classes.LinkIcon }/>
                        <p className = { classes.LinkLabel }>Explore</p>
                    </li>
                    <li className = { classes.Link + ' pointer' }>
                        <BiFile className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Files</p>
                    </li>
                    <li className = { classes.Link  + ' pointer'}>
                        <BiImage className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Gallery</p>
                    </li>
                    <li className = { classes.Link  + ' pointer' }>
                        <BiCalendarEvent className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Events</p>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className = { classes.Apps }>
            <div className = { classes.AppsContainer }>
                <Label isUppercase = { true }>
                    apps
                </Label>
                <ul className = { classes.AppList }>
                    <li className = { classes.Link + ' pointer' }>
                        <FcAddressBook className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Contacts</p>
                    </li>
                    <li className = { classes.Link + ' pointer' }>
                        <FcAlarmClock className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Reminders</p>
                    </li>
                    <li className = { classes.Link + ' pointer' }>
                        <FcCalculator className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Calculator</p>
                    </li>
                    <li className = { classes.Link + ' pointer' }>
                        <FcAssistant className = { classes.LinkIcon } />
                        <p className = { classes.LinkLabel }>Support</p>
                    </li>
                </ul>
            </div>
        </div>

        <GithubLink />
    </div>
)

const LeftBar = () => {
    return (
        <div className = {`${ classes.LeftBar } main-bg-color` }>
            <MobileView />
            <DesktopView />
        </div>
    )      
}

export default LeftBar