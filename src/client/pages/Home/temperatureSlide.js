import React, { useState, useEffect } from 'react'
import { PageSlide } from './components/PageSlide'
import { anchors } from './anchors'
import { BackSection } from './components/BackSection'

export const TemperatureSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.temperature.value}>
            <BackSection {...{ fullpageApi }}/>
            <h1 className="text-center">Hot Or Cold</h1>
        </PageSlide>
    )
}

