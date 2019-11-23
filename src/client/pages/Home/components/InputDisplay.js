import React, { useState, useEffect } from 'react'

export const InputDisplay = ({ label, description, value }) => {
    return (
        <div className="mb-0 d-flex justify-content-between">
            <div>
                <h4 className="mb-0">{label}</h4>
                <small>{description}</small>
            </div>
            <h1 className="text-success mr-5 ">{value}</h1>
        </div>
    )
}

