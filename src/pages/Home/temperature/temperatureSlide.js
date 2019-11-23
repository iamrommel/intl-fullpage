import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { SelectionContainer } from '../components/SelectionContainer'
import { ImageRadioButton } from '../components/ImageRadioButton'
import cold from '../../../styles/images/cold.png'
import hot from '../../../styles/images/hot.png'


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
                title: 'Next to CUP SIZE'
            }}>
                <div className={`d-flex flex-wrap justify-content-center`}>
                    <ImageRadioButton id={`COLD`} title={`Cold coffee`} name={`temperature`} imageSrc={cold}/>
                    <ImageRadioButton id={`HOT`} title={`Hot coffee`} name={`temperature`} imageSrc={hot}/>
                </div>

            </SelectionContainer>


        </PageSlide>
    )
}

