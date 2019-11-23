import React, { useState, useEffect } from 'react'
import { PageSlide } from './components/PageSlide'
import { anchors } from './anchors'

export const TemperatureSlide = () => {
    return (
        <PageSlide id={anchors.home.slides.temperature.value}>
            <h1 className="text-center">Hot Or Cold</h1>
        </PageSlide>
    )
}

