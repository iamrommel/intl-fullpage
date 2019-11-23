import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'
import { CupSizeSlide } from './cupSizeSlide'

export const ContactUsSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.contactUs.value} className={`bg-contact`}>
            <h1 className={'text-center'}>Contact Us Please</h1>
            <CupSizeSlide/>

        </PageSection>
    )
}

