import React from 'react'
import ReactFullPage from '@fullpage/react-fullpage'
import { Header } from './components/header'
import { HomeSection } from './homeSection'
import { CupSizeSection } from './cupSizeSection'

export default () => {
    return (
        <React.Fragment>
            <div className="sticky sticky-dark fixed-top nav-sticky">
                <Header/>
            </div>

            <ReactFullPage
                scrollingSpeed={1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullPage.Wrapper>
                            <HomeSection {...{ fullPageApi: fullpageApi, fullPageState: state }}/>
                            <CupSizeSection {...{ fullPageApi: fullpageApi, fullPageState: state }}/>
                        </ReactFullPage.Wrapper>
                    )
                }}
            />

        </React.Fragment>
    )
}
