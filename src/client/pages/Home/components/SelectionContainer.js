import React from 'react'
import { BackSectionButton } from './BackSectionButton'
import { NextSectionButton } from './NextSectionButton'

export const SelectionContainer = ({ fullpageApi, children, descriptionContent, nextButtonProps }) => {
    return (
        <React.Fragment>
            <div className="col-lg-8">
                {children}
            </div>
            <div className="col-lg-4">
                {descriptionContent}
            </div>

            <div className=" col-lg-4 offset-lg-8 ">
                <div className={`d-flex justify-content-between`}>
                    <BackSectionButton {...{ fullpageApi }}/>
                    <NextSectionButton {...{
                        fullpageApi,
                        ...nextButtonProps
                    }}/>
                </div>
            </div>
        </React.Fragment>
    )
}

