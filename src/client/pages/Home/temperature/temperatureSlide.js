import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { SelectionContainer } from '../components/SelectionContainer'

const DescriptionContent = () => {
    return (
        <React.Fragment>
            <h1 className="text-center mb-4">Hot Or Cold</h1>
            <p>Choose the best temperature for your needs! You can also asked our barista for the best offer
                ever</p>
        </React.Fragment>
    )
}

export const TemperatureSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.temperature.value}>
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

