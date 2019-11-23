import React from 'react'

export const ImageRadioButton = ({ name = 'imageRadioButton', id, value, imageSrc, title, onChange }) => {
    return (
        <React.Fragment>
            <input  {...{
                className: 'input-hidden',
                type: 'radio',
                name, id, onChange,
                value: value || id
            }}

            />
            <label htmlFor={id}>
                <div className={`m-3`}>
                    <img className={`img-fluid`} src={imageSrc} alt={title}/>
                    <h4 className={`text-center`}>{title}</h4>
                </div>

            </label>
        </React.Fragment>
    )
}
