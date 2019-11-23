import React from 'react'
import { PageSection } from './components/PageSection'
import { anchors } from './anchors'

export const HomeSection = ({ fullpageApi }) => {
    return (
        <PageSection id={anchors.home.value} className={`bg-home`}>
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row justify-content-denter vertical-content responsive-padding">
                            <h1>Choose your talent</h1>
                        </div>
                    </div>
                </div>

            </div>

        </PageSection>
    )
}

