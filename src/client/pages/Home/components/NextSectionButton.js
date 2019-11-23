import React, { useState, useEffect } from 'react'

export const NextSectionButton = ({ fullpageApi, onClick, icon, title }) => {
    return (
        <a className="btn btn-custom" onClick={() => {
            onClick && onClick()
            fullpageApi.moveSlideRight()
        }}><i className={icon}/> {title}</a>
    )

}

