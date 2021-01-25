import React from 'react'

import Leftbar from './LeftBar'
import Topbar  from './TopBar'
import Rightbar from './RightBar'

import classes from './Layout.module.css'

const Layout = ({ children }) => (
    <div className = { classes.Grid }>
        <Leftbar />
        <Topbar />
        <Rightbar />
        { children }
    </div>
)

export default Layout