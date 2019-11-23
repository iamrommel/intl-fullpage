import React from 'react'
import Nouislider from 'nouislider-react'

export const InputSlider = ({ label, description, value, options = {} }) => {
    options = {
        // Show a scale with the slider
        connect: 'lower',
        pips: {
            mode: 'steps',
            stepped: true,
            density: 2
        },
        animate: true,
        animationDuration: 300,
        behaviour: 'tap',
        ...options
    }
    return (
        <div>
            <Nouislider{...options} />
        </div>
    )
}
