import React from 'react'

export const MenuItem = ({ value, onClick, title }) => {
    return (
        <li><a href={`#${value}`} onClick={onClick}>{title}</a></li>
    )
}

