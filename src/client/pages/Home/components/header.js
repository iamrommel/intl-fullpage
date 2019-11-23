import React from 'react'
import { anchors } from '../anchors'

export const Header = ({ setShowMenu }) => {
    return (
        <header>
            <nav className="navbar-custom">
                <div className="container nav-position">
                    <div className="row">
                        <a className="navbar-brand logo text-uppercase" href={`#${anchors.home.value}`}>
                            StarBaraks
                        </a>
                        <a href="#" className="menu-btn-open" onClick={() => setShowMenu(true)}>
                            <span className="line1"/>
                            <span className="line2"/>
                            <span className="line3"/>
                        </a>

                    </div>
                </div>
            </nav>
        </header>
    )
}

