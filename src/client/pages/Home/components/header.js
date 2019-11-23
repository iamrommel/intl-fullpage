import React from 'react'

export const Header = () => {
    return (
        <header>
            <nav className="navbar-custom">
                <div className="container nav-position">
                    <div className="row">
                        <a className="navbar-brand logo text-uppercase" href="./">
                            StarBaraks
                        </a>
                        <a href="#" className="menu-btn-open">
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

