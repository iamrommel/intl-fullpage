import React from 'react'

export const Menu = ({ setShowMenu, showMenu }) => {
    return (
        <div className={`menu-lightbox ${(showMenu ? 'active' : '')}`}
             style={(showMenu ? { display: 'block' } : undefined)}>
            <div className="container nav-position">
                <div className="row">
                    <a href="#" className={`menu-btn-close ${(showMenu ? 'loaded' : '')}`}
                       onClick={() => setShowMenu(false)}>
                        <span className="line1"/>
                        <span className="line2"/>
                    </a>

                </div>
            </div>

            <ul className="menu-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#howitwork">How It Work?</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#video">Video</a></li>
                <li><a href="#screenshot">Screenshot</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#client">Client</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

