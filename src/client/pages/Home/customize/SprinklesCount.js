import React from 'react'
import numeral from 'numeraljs'
import get from 'lodash.get'
import { InputSlider } from '../components/InputSlider'

export const SprinklesCount = ({ value, onChange }) => {
    const sliderOptions = {
        range: {
            min: 0,
            max: 20
        },
        pips: {
            mode: 'steps',
            density: 2
        },
        start: value || 0,
        onChange: (args) => {
            const sliderValue = get(args, '[0]')
            onChange && onChange(numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider label="Sprinkles Count" description="How many new sprinkles do you need"
                     value={value} options={sliderOptions}/>
    )
}

