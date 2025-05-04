import React from 'react'

export const BasicFunctions = () => {

    const addNumbers = (a: number, b: number): number => {
        return a + b;
    }
    return (
        <div>
            <h1>
                Funciones Basicas
            </h1>
            <p>
                {addNumbers(300,220)}
            </p>
        </div>
    )
}
