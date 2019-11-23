import React from 'react'
import { PageSection } from './components/PageSection'

export const HomeSection = ({ fullPageApi }) => {
    return (
        <PageSection id={'home'} className={`bg-home`}>
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

