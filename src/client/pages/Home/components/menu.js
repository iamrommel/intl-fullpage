import React from 'react'
import { MenuItem } from './menuItem'
import { anchors } from '../anchors'

export const Menu = ({ setShowMenu, showMenu }) => {

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <div className={`menu-lightbox ${(showMenu ? 'active' : '')}`}
             style={(showMenu ? { display: 'block' } : undefined)}>
            <div className="container nav-position">
                <div className="row">
                    <a href="#" className={`menu-btn-close ${(showMenu ? 'loaded' : '')}`}
                       onClick={closeMenu}>
                        <span className="line1"/>
                        <span className="line2"/>
                    </a>
                </div>
            </div>

            <ul className="menu-nav">
                <MenuItem  {...{ ...anchors.home, onClick: closeMenu }}/>
                <MenuItem {...{ ...anchors.contactUs, onClick: closeMenu }} />
            </ul>
        </div>
    )
}


