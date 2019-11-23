import React from 'react'
import numeral from 'numeraljs'
import get from 'lodash.get'
import { InputSlider } from '../components/InputSlider'

export const SugarCount = ({ value, onChange }) => {
    const sliderOptions = {
        range: {
            min: 0,
            max: 5
        },
        pips: {
            mode: 'steps',
            density: 20

        },
        start: value || 0,
        onChange: (args) => {
            const sliderValue = get(args, '[0]')
            onChange && onChange(numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider label="Add sugar?" description="How many new sugars should be added, we measure it by teaspoon"
                     value={value} options={sliderOptions}/>
    )
}

