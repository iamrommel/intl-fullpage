import React from 'react'
import ReactFullPage from '@fullpage/react-fullpage'
import { HomeSection } from './homeSection'
import { HeaderContainer } from './components/HeaderContainer'
import { anchors } from './anchors'
import { ContactUsSection } from './contactUsSection'


export default () => {
    return (
        <React.Fragment>
            <HeaderContainer/>

            <ReactFullPage
                anchors={[anchors.home.value, anchors.contactUs.value]}
                easing={'easeInQuart'}
                controlArrows={false}
                scrollingSpeed={1000}
                render={(fullPage) => {
                    return (
                        <ReactFullPage.Wrapper>
                            <HomeSection {...fullPage}/>
                            <ContactUsSection {...fullPage}/>
                        </ReactFullPage.Wrapper>
                    )
                }}
            />

        </React.Fragment>
    )
}
