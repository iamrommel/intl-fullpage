import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { SelectionContainer } from '../components/SelectionContainer'

const DescriptionContent = () => {
    return (
        <React.Fragment>
            <h1 className="text-center mb-4">The size always matters!</h1>
            <p>Pickup the right cup size that fits your desire, mood, taste or any reason</p>
        </React.Fragment>
    )
}

export const CupSizeSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.cupSize.value}>
            <SelectionContainer fullpageApi={fullpageApi} descriptionContent={<DescriptionContent/>} nextButtonProps={{
                onClick: null,
                icon: 'mdi mdi-format-size',
                title: 'Cup Size'
            }}>
                <p>Should Choose somethign here</p>
            </SelectionContainer>
        </PageSlide>
    )
}

