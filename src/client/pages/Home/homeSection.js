import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'
import { CupSizeSlide } from './CupSizeSlide'

export const HomeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.home.value} className={`bg-home`}>
        </PageSection>
    )
}

