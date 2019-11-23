import React from 'react'
import { BackSectionButton } from '../components/BackSectionButton'
import { NextSectionButton } from '../components/NextSectionButton'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'

export const FinaleSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.finale.value}>
            <div className="col-lg-4 ">
                <h1>Check if diet was not affected!</h1>
                <p>Review your selection if everything is correct. You can always go back and change your selection</p>
            </div>
            <div className="col-lg-8 ">
                Show hte results here
            </div>

            <div className=" col-lg-4 mt-3">
                <div className={`d-flex justify-content-between`}>
                    <BackSectionButton {...{ fullpageApi }}/>
                    <NextSectionButton {...{
                        fullpageApi,
                        onClick: null,
                        icon: 'mdi mdi-flag-checkered',
                        title: 'Done'
                    }}/>
                </div>
            </div>
        </PageSlide>
    )
}

