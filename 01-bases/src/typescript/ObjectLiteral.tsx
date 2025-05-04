import React from 'react';

interface Gem {
    name: string;
    altName: string;
    address: Address;
}

interface Address {
    country: string;
    houseNo: number;
    street?: string;
}

export const ObjectLiteral = () => {
    const gem: Gem = {
        name: 'Phos',
        altName: 'Lapis',
        address: {
            country: 'Earth',
            houseNo: 4,
        }

    }
    return (
        <div>
            <h1>
                Objetos Literales
            </h1>
            <p>
                {JSON.stringify(gem)}
            </p>
        </div>

    )
}
