import React from 'react'

export const PageSlide = ({ children, id }) => {
    return (
        <div className={`slide`} data-anchor={id}>
            {children}
        </div>
    )
}

