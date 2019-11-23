import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'
import { CupSizeSlide } from './cupSize/cupSizeSlide'
import { TemperatureSlide } from './temperature/temperatureSlide'
import { HomeSlide } from './home/homeSlide'
import { CustomizeSlide } from './customize/customizeSlide'
import { FinaleSlide } from './finalize/finaleSlide'

export const HomeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.home.value} className={`bg-home`}>
            <HomeSlide {...{ fullpageApi }}/>
            <TemperatureSlide {...{ fullpageApi }}/>
            <CupSizeSlide {...{ fullpageApi }}/>
            <CustomizeSlide {...{ fullpageApi }}/>
            <FinaleSlide {...{ fullpageApi }}/>
        </PageSection>
    )
}

