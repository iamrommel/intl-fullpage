import React from 'react'
import Nouislider from 'nouislider-react'
import { InputDisplay } from './InputDisplay'

export const InputSlider = ({ label, description, value, options = {} }) => {
    options = {
        // Show a scale with the slider
        step: 1,
        connect: 'lower',
        pips: {
            mode: 'steps',
            stepped: true,
            density: 1
        },
        animate: true,
        animationDuration: 300,
        behaviour: 'tap',
        ...options
    }
    return (
        <div className="m-4 p-2 ">
            <InputDisplay {...{ value, description, label }}/>
            <Nouislider{...options} />
        </div>
    )
}
