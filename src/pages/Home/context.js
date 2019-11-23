import React, { useContext as useContextCore, useState } from 'react'

const context = React.createContext()
const CoreProvider = context.Provider

export let Provider = (props) => {

    const temperatureState = useState('HOT')
    const cupSizeState = useState('T')

    return (
        <React.Fragment>
            <CoreProvider value={{
                ...props,
                temperatureState, cupSizeState
            }}>
                {props.children}
            </CoreProvider>
        </React.Fragment>
    )
}
export const useContext = () => useContextCore(context)
