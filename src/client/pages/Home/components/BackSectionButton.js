import React from 'react'

export const BackSectionButton = ({ fullpageApi }) => {
    return (
        <a className="btn btn-outline-custom" onClick={() => {
            fullpageApi.moveSlideLeft()
        }}><i className="mdi mdi-arrow-left"/> Back</a>
    )
}

