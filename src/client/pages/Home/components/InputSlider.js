import React from 'react'
import Nouislider from 'nouislider-react'

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
            <div className="mb-0 d-flex justify-content-between">
                <div>
                    <h4 className="mb-0">{label}</h4>
                    <small>{description}</small>
                </div>
                <h1 className="text-success mr-5 ">{value || 10}</h1>
            </div>

            <Nouislider{...options} />
        </div>
    )
}
