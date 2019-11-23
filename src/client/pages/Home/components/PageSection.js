import React from 'react'

export const PageSection = ({ children, id, className = '' }) => {
    return (
        <section className={`section ${className}`} data-anchor={id}>
            {children}
        </section>
    )
}

