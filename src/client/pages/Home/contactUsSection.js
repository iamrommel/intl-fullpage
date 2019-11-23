import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'

export const ContactUsSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.contactUs.value} className={`bg-contact`}>
            <p>Contact Us Please</p>
        </PageSection>
    )
}

