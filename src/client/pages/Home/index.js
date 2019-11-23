import React from 'react'
import ReactFullPage from '@fullpage/react-fullpage'
import { HomeSection } from './homeSection'
import { CupSizeSection } from './cupSizeSection'
import { HeaderContainer } from './components/HeaderContainer'

export default () => {
    return (
        <React.Fragment>
            <HeaderContainer/>
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
