import React, { useState } from 'react'
import { Header } from './header'
import { Menu } from './menu'

export const HeaderContainer = () => {
    const [showMenu, setShowMenu] = useState(false)


    return (
        <div className="sticky sticky-dark fixed-top nav-sticky">
            <Header {...{ showMenu, setShowMenu }}/>
            <Menu {...{ showMenu, setShowMenu }}/>
        </div>
    )
}

