import React from 'react'

export const PageSlide = ({ children, id }) => {
    return (
        <div className={`slide`} data-anchor={id}>

            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row justify-content-denter vertical-content responsive-padding">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

