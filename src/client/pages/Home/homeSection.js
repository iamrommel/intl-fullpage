import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'
import { CupSizeSlide } from './cupSizeSlide'
import { TemperatureSlide } from './temperatureSlide'
import { HomeSlide } from './components/homeSlide'

export const HomeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.home.value} className={`bg-home`}>
            <HomeSlide/>
            <TemperatureSlide {...{ fullpageApi }}/>
            <CupSizeSlide {...{ fullpageApi }}/>
        </PageSection>
    )
}

