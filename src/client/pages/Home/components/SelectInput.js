import Select from 'react-select'
import React from 'react'
import { InputDisplay } from './InputDisplay'

export const SelectInput = ({ options, value, description, label, name = 'selectInput' }) => {

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: 'black'
        }),

        control: (provided, state) => ({
            ...provided,
            borderColor: '#10c469',
            '&:hover': {
                borderColor: '#10c469'
            }
        })

    }


    return (
        <div className="m-4 p-2 ">
            <InputDisplay {...{ value: '', description, label }}/>
            <Select options={options} isMulti name={name}
                    styles={customStyles}
            />
        </div>

    )
}

