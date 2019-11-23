import React, { useState, useEffect } from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import { SelectionContainer } from '../components/SelectionContainer'

const DescriptionContent = () => {
    return (
        <React.Fragment>
            <h1 className="text-center mb-4">You want this, that and all above else?</h1>
            <p>Add more sweets or garnishing, or sugar or milk. Tell me all that you want</p>
        </React.Fragment>
    )
}

export const CustomizeSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.slides.customize.value}>
            <SelectionContainer fullpageApi={fullpageApi} descriptionContent={<DescriptionContent/>} nextButtonProps={{
                onClick: null,
                icon: 'mdi mdi-magnify',
                title: 'Next to REVIEW'
            }}>
                <p>Should Choose somethign here</p>
            </SelectionContainer>
        </PageSlide>
    )
}

