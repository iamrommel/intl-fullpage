import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { BackSectionButton } from '../components/BackSectionButton'

export const TemperatureSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.temperature.value}>
            <div className="col-lg-8 mt-3">

            </div>
            <div className="col-lg-4 mt-3">
                <h1 className="text-center mb-4">Hot Or Cold</h1>
                <p>Choose the best temperature for your needs! You can also asked our barista for the best offer
                    ever</p>
            </div>

            <div className=" col-lg-4 offset-lg-8 mt-3">
                <BackSectionButton {...{ fullpageApi }}/>
            </div>


        </PageSlide>
    )
}

