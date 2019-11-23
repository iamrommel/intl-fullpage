import React from 'react'

export const PageSection = ({ children, id, className = '' }) => {
    return (
        <section className={`section ${className}`} id={id}>
            {children}
        </section>
    )
}

