import React from 'react'
import { PageSection } from './components/PageSection'

export const HomeSection = ({ fullPageApi }) => {
    return (
        <PageSection>
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullPageApi.moveSectionDown()}>
                Click me to move down
            </button>
        </PageSection>
    )
}

