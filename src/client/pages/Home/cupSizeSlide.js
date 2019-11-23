import React from 'react'
import { PageSlide } from './components/PageSlide'
import { anchors } from './anchors'

export const CupSizeSlide = () => {
    return (
        <PageSlide id={anchors.home.slides.cupSize}>
            <h1 className="text-center">Choose Cup Size</h1>
        </PageSlide>
    )
}

