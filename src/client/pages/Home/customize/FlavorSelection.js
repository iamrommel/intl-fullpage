import React, { useState, useEffect } from 'react'
import { SelectInput } from '../components/SelectInput'

export const FlavorSelection = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <SelectInput {...{
            options, value: 'chocolate',
            label: 'Add more flavor!',
            description: 'You can even select multiple values'
        }} />
    )
}

