import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'

export const CupSizeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.cupsize.value} className={`bg-cupsize`}>
            <p>Select A cup</p>
        </PageSection>
    )
}

