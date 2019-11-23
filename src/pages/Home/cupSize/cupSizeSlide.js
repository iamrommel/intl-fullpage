import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { SelectionContainer } from '../components/SelectionContainer'
import { ImageRadioButton } from '../components/ImageRadioButton'
import short from '../../../styles/images/short.png'
import tall from '../../../styles/images/tall.png'
import grande from '../../../styles/images/grande.png'
import venti from '../../../styles/images/venti.png'
import trenta from '../../../styles/images/trenta.png'


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
                icon: 'mdi mdi-adjust',
                title: 'Next to CUSTOMIZE'
            }}>
                <div className={`d-flex flex-wrap  justify-content-center`}>
                    <ImageRadioButton id={`SHORT`} title={`Short`} name={`size`} imageSrc={short}/>
                    <ImageRadioButton id={`TALL`} title={`Tall`} name={`size`} imageSrc={tall}/>
                    <ImageRadioButton id={`GRANDE`} title={`Grande`} name={`size`} imageSrc={grande}/>
                    <ImageRadioButton id={`VENTI`} title={`Venti`} name={`size`} imageSrc={venti}/>
                    <ImageRadioButton id={`TRENTA`} title={`Trenta`} name={`size`} imageSrc={trenta}/>
                </div>
            </SelectionContainer>
        </PageSlide>
    )
}

