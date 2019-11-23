import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'
import { CupSizeSlide } from './cupSize/cupSizeSlide'
import { TemperatureSlide } from './temperature/temperatureSlide'
import { HomeSlide } from './home/homeSlide'

export const HomeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.home.value} className={`bg-home`}>
            <HomeSlide {...{ fullpageApi }}/>
            <TemperatureSlide {...{ fullpageApi }}/>
            <CupSizeSlide {...{ fullpageApi }}/>
        </PageSection>
    )
}

